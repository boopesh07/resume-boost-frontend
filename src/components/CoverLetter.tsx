import React from 'react';

interface CoverLetterProps {
  content: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ content }) => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

export default CoverLetter;
