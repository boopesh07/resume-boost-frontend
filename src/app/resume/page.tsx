<div className="min-h-screen bg-gray-900 text-white p-8 flex">
      {/* Sidebar */}
      <aside className="h-screen w-96 px-5 bg-gray-900 text-white fixed top-0 left-0 flex flex-col items-center justify-start overflow-y-scroll no-scrollbar">
        <h2 className="text-2xl font-semibold p-4  mt-4">Resume Score</h2>

        <div className="flex flex-col gap-10">
          <CircularProgressBar />
          <div className="pb-5">
            <KeywordsInserted keywords={parsedData.keywords_inserted} />
          </div>
          <div className="pb-5">
            <ProjectSuggestions projects={parsedData.project_suggestions} />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-96  flex-1 ">
        <TailoredResume content={parsedData.tailored_resume} />
      </main>
    </div>