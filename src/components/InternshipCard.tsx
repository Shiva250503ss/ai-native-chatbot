'use client';

import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:shse1502@colorado.edu', '_blank');
  };
  const router = useRouter();

  return (
    <div
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/profile-shivaraj.jpg"
              alt="Shivaraj's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Shivaraj Senthil Rajan
            </h2>
            <p className="text-muted-foreground text-sm">
              Open to Full-Time Opportunities
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Availability</p>
            <p className="text-muted-foreground text-sm">
              Currently pursuing MS in Data Science @ CU Boulder (Grad: May 2026)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Boulder, CO (Open to Relocate!)
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech Stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Python, SQL, PySpark, R</li>
                <li>PyTorch, TensorFlow, scikit-learn</li>
                <li>LangChain, RAG, Hugging Face</li>
                <li>Tableau, Power BI, Streamlit</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>AWS, GCP, Azure</li>
                <li>Spark, Kafka, Airflow</li>
                <li>Docker, Kubernetes, MLflow</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See all skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I Bring to the Table 💪
        </p>
        <p className="text-foreground text-sm">
          End-to-end AI/ML experience: from data pipelines to production-ready models. <br />
          I've built RAG systems, deployed ML at scale, and created dashboards that drive real decisions. <br />
          Published researcher (IEEE AIMLA 2024) who loves turning complex problems into elegant solutions.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">My Goal 🎯</p>
        <p className="text-foreground text-sm">
          Join a team where I can build AI that matters. I want to solve hard problems,
          learn from brilliant people, and make real impact.
          Also, I bring great energy and cricket analogies to team meetings! 🏏
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
