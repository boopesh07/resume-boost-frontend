// components/ScoreImprovement.tsx
import React from 'react';

interface ScoreImprovementProps {
  score: string;
}

const ScoreImprovement: React.FC<ScoreImprovementProps> = ({ score }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Score Improvement</h2>
      <div className="bg-gray-800 p-4 rounded text-white">
        {score}
      </div>
    </div>
  );
};

export default ScoreImprovement;
