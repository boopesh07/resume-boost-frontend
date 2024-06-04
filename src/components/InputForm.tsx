// components/InputForm.tsx
"use client"; // This directive will ensure the component is treated as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputForm: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState('');
  const router = useRouter();

  const handleBoostResume = async (e: React.FormEvent) => {
    e.preventDefault();
    // Make API call to boost resume
    // Assuming we have an API endpoint that returns the tailored resume
    const response = await fetch('/api/boost-resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobDescription, resume }),
    });
    const data = await response.json();
    // Redirect to /resume route with the tailored resume data
    router.push(`/resume?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  const handleGenerateCoverLetter = async (e: React.FormEvent) => {
    e.preventDefault();
    // Make API call to generate cover letter
    // Assuming we have an API endpoint that returns the cover letter
    const response = await fetch('/api/generate-cover-letter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobDescription, resume }),
    });
    const data = await response.json();
    // Redirect to /cover route with the cover letter data
    router.push(`/cover?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mt-10 mb-5">Welcome to Resume Boost</h1>
      <p className="mb-5">Please upload your resume and the job description below</p>
      <form className="w-full max-w-6xl" onSubmit={handleBoostResume}>
        <div className="flex justify-between mb-8 space-x-8">
          <div className="w-1/2">
            <label className="block text-center text-gray-300 text-sm font-bold mb-2" htmlFor="jobDescription">
              Job Description
            </label>
            <textarea
              id="jobDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              rows={20}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="w-1/2">
            <label className="block text-center text-gray-300 text-sm font-bold mb-2" htmlFor="resume">
              Resume
            </label>
            <textarea
              id="resume"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              rows={20}
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={handleBoostResume}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Boost Resume
          </button>
          <button
            type="button"
            onClick={handleGenerateCoverLetter}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Generate Cover Letter
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
