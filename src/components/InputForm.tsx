"use client"; // This directive ensures the component is treated as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputForm: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
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

  const handleFormSubmit = async (e: React.FormEvent, endpoint: string, redirectPath: string) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job_description: jobDescription, resume_text: resume }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/${redirectPath}?runId=${data.run_id}`);
      } else {
        console.error('Failed to process request');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <h1 className="text-3xl font-bold mt-10 mb-5 tracking-wider">
        Welcome to Resume Boost
      </h1>
      <p className="mb-5 font-medium tracking-wider">
        Please paste your resume and job description below
      </p>
      {errorMessage && (
        <div className="text-red-500 mb-5 text-center mb-5">{errorMessage}</div>
      )}
      <form className="w-full max-w-7xl" onSubmit={(e) => handleFormSubmit(e, 'generate_resume', 'resume')}>
        <div className="flex justify-between gap-20 mb-8">
          <div>
            <label
              className="block text-left text-gray-300 text-2xl pl-3 font-bold mb-5 text-center"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              placeholder="Add Job Description...."
              className="w-full p-5 text-sm text-white bg-gray-800 border-0 focus:ring-0 rounded-2xl placeholder:text-[1rem] placeholder:font-medium resize-none"
              rows={30}
              cols={120}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label
              className="block text-left text-gray-300 text-2xl pl-3 font-bold mb-5 text-center"
              htmlFor="resume"
            >
              Resume
            </label>
            <textarea
              id="resume"
              className="w-full p-5 text-sm text-white bg-gray-800 border-0 focus:ring-0 rounded-2xl placeholder:text-[1rem] placeholder:font-medium resize-none"
              rows={30}
              placeholder="Add Resume here...."
              cols={120}
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            Boost Resume
          </button>
          <button
            type="button"
            onClick={(e) => handleFormSubmit(e, 'generate_cover_letter', 'cover')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            Generate Cover Letter
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
