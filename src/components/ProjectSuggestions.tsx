// components/ProjectSuggestions.tsx
import React from 'react';

interface ProjectSuggestionsProps {
  projects: string[];
}

const ProjectSuggestions: React.FC<ProjectSuggestionsProps> = ({ projects }) => {
  return (
    <div className="mb-8 bg-gray-800 p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4">Project Suggestions</h2>
      <div className="  text-white">
        <ul className="list-disc list-inside">
          {projects.map((project, index) => (
            <li className="mb-5" key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSuggestions;
