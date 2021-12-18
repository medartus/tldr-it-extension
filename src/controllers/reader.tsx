import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';

import { FunctionComponent } from 'react';
import Loader from '../components/Loader';
import NoContent from '../components/no-content';
import { useSummary } from '../hooks/summary';

type ReaderProps = { url: URL };

export const Reader: FunctionComponent<ReaderProps> = ({ url }) => {
  const { summary, deleteSummary } = useSummary();

  if (summary === null) return <Loader />;
  else if (summary?.numSummaries === 0) return <NoContent />;
  else {
    const summaries = Array.from(Object.entries(summary.summaries));
    return (
      <div className="flex-1 w-5/6 mx-auto">
        <div className="flex justify-between my-4">
          <p className="text-white text-lg font-semibold">
            Summaries: {summary.numSummaries}
          </p>
        </div>
        <div className="space-y-6 pb-10">
          {summaries.map((summaryObj, index) => (
            <div key={index}>
              <div className="relative bg-white p-10 rounded-xl">
                <p className="text-base text-gray-600">{summaryObj[1].text}</p>
                <span className="absolute bg-green-500 w-10 h-10 flex items-center justify-center font-bold text-green-50 rounded-full -top-3 -left-3">
                  {index + 1}
                </span>
                <div className="absolute top-0 right-0 flex space-x-2 p-4">
                  {/* <PencilAltIcon className="h-6 w-6 cursor-pointer text-blue-400" /> */}
                  <TrashIcon
                    className="h-6 w-6 cursor-pointer text-red-400"
                    onClick={() => {
                      deleteSummary(summaryObj[0]);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end"></div>
      </div>
    );
  }
};

export default Reader;
