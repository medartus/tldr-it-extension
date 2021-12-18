import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FunctionComponent
} from 'react';
import Base64 from 'crypto-js/enc-base64url';
import sha256 from 'crypto-js/sha256';
import { v4 as uuid4 } from 'uuid';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { connectFunctionsEmulator, httpsCallable } from 'firebase/functions';
import { db, functions } from '../providers/firebase';

type Summary = {
  hash: string;
  url: string;
  numSummaries: number;
  summaries: {
    [key: string]: {
      text: string;
      score: number;
    };
  };
} | null;

interface SummaryContextType {
  summary: Summary;
  addSummary: (text: string) => void;
  deleteSummary: (key: string) => void;
}

const summaryContext = createContext({
  summary: null,
  addSummary: () => {
    console.log('addSummary not implemented');
  },
  deleteSummary: () => {
    console.log('deleteSummary not implemented');
  }
} as SummaryContextType);
export default summaryContext;

export const ProvideSummary: FunctionComponent<{
  url: URL;
  children: React.ReactNode;
}> = ({ url, children }) => {
  const summary = useProvideSummary(url);

  return (
    <summaryContext.Provider value={summary}>
      {children}
    </summaryContext.Provider>
  );
};

// Hook for child components to get the summary object and re-render when it changes.
export const useSummary = () => {
  return useContext(summaryContext);
};

const defaultSummary = (hash: string, url: string): Summary => ({
  hash,
  url: url,
  numSummaries: 0,
  summaries: {}
});

// Provider hook that creates summary object and handles state
const useProvideSummary = (url: URL) => {
  const [summary, setSummary] = useState<Summary>(null);

  const hash = Base64.stringify(sha256(url.href));

  const addSummary = (text: string) => {
    let newSummary = summary || defaultSummary(hash, url.href);
    if (newSummary) {
      newSummary = {
        ...newSummary,
        numSummaries: newSummary.numSummaries + 1,
        summaries: {
          ...newSummary.summaries,
          [uuid4()]: {
            text,
            score: 0
          }
        }
      };
      setSummary(newSummary);
    }
  };

  const deleteSummary = (key: string) => {
    if (summary) {
      delete summary.summaries[key];
      const newSummary = {
        ...summary,
        numSummaries: summary.numSummaries - 1,
        summaries: {
          ...summary.summaries
        }
      };
      setSummary(newSummary);
    }
  };

  const autoSummarize = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      // connectFunctionsEmulator(functions, 'localhost', 5001);
      httpsCallable(
        functions,
        'autoSummarize'
      )({ url: url.href })
        .then((result: any) => {
          resolve(result.data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    getDoc(doc(db, 'domains', url.hostname, 'pages', hash)).then((doc) => {
      if (doc.exists()) setSummary(doc.data() as Summary);
      else {
        autoSummarize()
          .then((text) => {
            addSummary(text);
          })
          .catch(() => {
            setSummary(defaultSummary(hash, url.href));
          });
      }
    });
  }, []);

  useEffect(() => {
    if (summary) {
      setDoc(doc(db, 'domains', url.hostname, 'pages', hash), summary);
    }
  }, [summary]);

  // Return the user object and auth methods
  return { summary, addSummary, deleteSummary };
};
