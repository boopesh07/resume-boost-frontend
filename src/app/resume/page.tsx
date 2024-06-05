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

  const extractFinalScore = (scoreImprovement: string) => {
    const match = scoreImprovement.match(/Final score\s*:\s*(\d+)%/);
    if (match) {
      return parseInt(match[1], 10);
    } else {
      return 0;
    }
  };

  const extractInitialScore = (scoreImprovement: string) => {
    const match = scoreImprovement.match(/Initial score\s*:\s*(\d+)%/);
    if (match) {
      return parseInt(match[1], 10);
    } else {
      return 0;
    }
  };

  const finalScore = parsedData ? extractFinalScore(parsedData.score_improvement) : 0;
  const initialScore = parsedData ? extractInitialScore(parsedData.score_improvement) : 0;


  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex">
      {/* Sidebar */}
      <aside className="h-screen w-96 px-5 bg-gray-900 text-white fixed top-0 left-0 flex flex-col items-center justify-start overflow-y-scroll no-scrollbar">
      <h2 className="text-2xl font-semibold p-4 mt-4">Resume Scores</h2>
<div className="flex flex-col gap-10">
  <div className="flex gap-5 justify-center">
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-semibold mb-4">Initial Score</h3>
      <CircularProgressBar score={initialScore} />
    </div>
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-semibold mb-4">Final Score</h3>
      <CircularProgressBar score={finalScore} />
    </div>
  </div>
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
