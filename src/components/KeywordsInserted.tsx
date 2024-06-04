// components/KeywordsInserted.tsx
import React from 'react';

interface KeywordsInsertedProps {
  keywords: string[];
}

const KeywordsInserted: React.FC<KeywordsInsertedProps> = ({ keywords }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Keywords Inserted</h2>
      <div className="bg-gray-800 p-4 rounded text-white">
        <ul className="list-disc list-inside">
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordsInserted;
