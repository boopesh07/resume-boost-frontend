// components/KeywordsInserted.tsx
import React from 'react';

interface KeywordsInsertedProps {
  keywords: string[];
}

const KeywordsInserted: React.FC<KeywordsInsertedProps> = ({ keywords }) => {
  return (
    <div className="mb-8 bg-gray-800 p-5 rounded-3xl">
    <h2 className="text-2xl font-bold mb-4">Keywords Inserted</h2>
    <div className=" p-4 rounded text-white">
      <ul className="list-disc list-inside font-semibold ">
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default KeywordsInserted;
