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

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const runId = query.get('runId');

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/view_cover/${runId}`);
        if (response.ok) {
          const data: CoverLetterData = await response.json();
          setParsedData(data);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Generated Cover Letter</h1>
      {parsedData && <CoverLetter content={parsedData.cover_letter} />}
    </div>
  );
};

export default CoverPage;
