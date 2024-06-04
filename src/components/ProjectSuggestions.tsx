// components/ProjectSuggestions.tsx
import React from 'react';

interface ProjectSuggestionsProps {
  projects: string[];
}

const ProjectSuggestions: React.FC<ProjectSuggestionsProps> = ({ projects }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Project Suggestions</h2>
      <div className="bg-gray-800 p-4 rounded text-white">
        <ul className="list-disc list-inside">
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSuggestions;
