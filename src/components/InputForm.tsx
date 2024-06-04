// components/InputForm.tsx
"use client"; // This directive will ensure the component is treated as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputForm: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const validateInputs = () => {
    if (!jobDescription && !resume) {
      setErrorMessage('Both job description and resume fields are required.');
      return false;
    }
    if (!jobDescription && resume) {
      setErrorMessage('Please provide a valid job description.');
      return false;
    }
    if (!resume && jobDescription) {
      setErrorMessage('Please provide a valid resume.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleBoostResume = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_resume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ job_description: jobDescription, resume_text: resume }),
    });
    if (response.ok) {
      const data = await response.json();
      router.push(`/resume?data=${encodeURIComponent(JSON.stringify(data))}`);
    } else {
      console.error('Failed to boost resume');
    }
  };

  const handleGenerateCoverLetter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_cover_letter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ job_description: jobDescription, resume_text: resume }),
    });
    if (response.ok) {
      const data = await response.json();
      router.push(`/cover?data=${encodeURIComponent(JSON.stringify(data))}`);
    } else {
      console.error('Failed to generate cover letter');
    }
  };

  return (
    <div className="flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <p className="mb-5">Please upload your resume and the job description below</p>
      {errorMessage && <p className="text-red-500 mb-5">{errorMessage}</p>}
      <form>
        <div className="flex justify-between w-full h-full mb-8 space-x-8">
          <div id = "Resume" className="w-full flex-col">
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
          <div className="w-full">
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
