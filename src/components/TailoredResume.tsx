// components/TailoredResume.tsx
import React from 'react';

interface TailoredResumeProps {
  content: string;
}

const TailoredResume: React.FC<TailoredResumeProps> = ({ content }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Tailored Resume</h2>
      <div className="bg-gray-800 p-4 rounded text-white whitespace-pre-wrap">{content}</div>
    </div>
  );
};

export default TailoredResume;
