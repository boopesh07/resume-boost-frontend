"use client"; // Ensure this component is treated as a client component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TailoredResume from '@/components/TailoredResume';
import KeywordsInserted from '@/components/KeywordsInserted';
import ScoreImprovement from '@/components/ScoreImprovement';
import ProjectSuggestions from '@/components/ProjectSuggestions';
import CircularProgressBar from '@/components/CircularProgressBar';

interface ResumeData {
  tailored_resume: string;
  keywords_inserted: string[];
  score_improvement: string;
  project_suggestions: string[];
}

const ResumePage: React.FC = () => {
  const router = useRouter();
  const [parsedData, setParsedData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const runId = query.get('runId');

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/view_resume/${runId}`);
        if (response.ok) {
          const data: ResumeData = await response.json();
          setParsedData(data);
        } else {
          setError('Failed to fetch resume data');
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
    <div className="min-h-screen bg-gray-900 text-white p-8 flex">
      {/* Sidebar */}
      <aside className="h-screen w-96 px-5 bg-gray-900 text-white fixed top-0 left-0 flex flex-col items-center justify-start overflow-y-scroll no-scrollbar">
        <h2 className="text-2xl font-semibold p-4 mt-4">Resume Score</h2>
        <div className="flex flex-col gap-10">
          <CircularProgressBar />
          {parsedData && (
            <>
              <div className="pb-5">
                <KeywordsInserted keywords={parsedData.keywords_inserted} />
              </div>
              <div className="pb-5">
                <ProjectSuggestions projects={parsedData.project_suggestions} />
              </div>
            </>
          )}
        </div>
      </aside>
      {/* Main content */}
      <main className="ml-96 flex-1">
        {parsedData && <TailoredResume content={parsedData.tailored_resume} />}
      </main>
    </div>
  );
};

export default ResumePage;
