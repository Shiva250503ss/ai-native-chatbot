'use client';

import React from 'react';
import { Download } from 'lucide-react';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: "Shivaraj's Resume",
    description: 'AI Engineer • Data Scientist • ML Enthusiast',
    fileType: 'PDF',
    lastUpdated: 'January 2026',
    fileSize: '0.2 MB',
    downloadUrl: '/Resume_Shivaraj_AI.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-0 transition-transform duration-200 hover:scale-[1.01] animate-in fade-in duration-300"
      >
        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download indicator */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80 transition-colors duration-200">
              <Download className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;