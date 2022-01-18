import { useEffect, useState } from 'react';
import { useSummary } from '../hooks/summary';

export const Creator = () => {
  const { summary, addSummary } = useSummary();

  const [shareSummary, setShareSummary] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (shareSummary > 0 && text.length > 0) {
      addSummary(text);
      setText('');
    }
  }, [shareSummary]);

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="container">
        <div className="max-w-lg mx-auto bg-white p-5 rounded-md shadow-md">
          <div className="text-center">
            <h1 className="my-1 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Add a summary
            </h1>
            <p className="text-lg text-gray-400 dark:text-gray-600">
              Share a short summary of this webpage.
            </p>
          </div>
          <div className="py-3">
            <textarea
              rows={10}
              name="message"
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Explain in 5 paragraphs what this page is about..."
              className="w-full px-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <p
            onClick={() => setShareSummary(shareSummary + 1)}
            className="button w-full text-lg text-center py-2 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
          >
            Share you summary with the community! 🎉
          </p>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </div>
      </div>
    </div>
  );
};

export default Creator;
