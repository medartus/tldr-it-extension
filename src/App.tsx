import { useEffect, useState } from 'react';
import Reader from './controllers/reader';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotSupported from './components/404';
import Navbar from './components/navbar';
import Creator from './controllers/creator';
import { ProvideSummary } from './hooks/summary';
import About from './controllers/about';

export const App = () => {
  const [url, setUrl] = useState<URL | null>(null);

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        if (tabs[0] && tabs[0].url) setUrl(new URL(tabs[0].url));
        else setUrl(null);
      });
  }, []);

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      {url ? (
        <ProvideSummary url={url}>
          <Routes>
            <Route path="/" element={<Reader url={url} />} />
            <Route path="add" element={<Creator />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProvideSummary>
      ) : (
        <NotSupported />
      )}
    </div>
  );
};

export default App;
