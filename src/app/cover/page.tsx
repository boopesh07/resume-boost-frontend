"use client"; // Ensure this component is treated as a client component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CoverLetter from '@/components/CoverLetter';

interface CoverLetterData {
  cover_letter: string;
}

const CoverPage: React.FC = () => {
  const router = useRouter();
  const [parsedData, setParsedData] = useState<CoverLetterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [coverLetter, setCoverLetter] = useState<string>('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const runId = query.get('runId');

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/view_cover/${runId}`);
        if (response.ok) {
          const data: CoverLetterData = await response.json();
          setParsedData(data);
          setCoverLetter(data.cover_letter); // Set the initial value of the textarea
        } else {
          setError('Failed to fetch cover letter data');
        }
      } catch (error) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (runId) {
      fetchData();
    } else {
      setLoading(false);
      setError('Run ID not provided');
    }
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCoverLetter(event.target.value);
  };

  return (
    <div>
      <label
        className="block text-left text-gray-300 text-2xl pl-3 font-bold mb-5 text-center"
        htmlFor="coverLetter"
      >
        Cover Letter
      </label>
      <textarea
        id="coverLetter"
        className="w-full p-5 text-sm text-white bg-gray-800 border-0 focus:ring-0 rounded-2xl placeholder:text-[1rem] placeholder:font-medium resize-none"
        rows={30}
        cols={120}
        value={coverLetter}
        onChange={handleTextareaChange}
      ></textarea>
    </div>
  );
};

export default CoverPage;
