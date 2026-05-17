// File: data.tsx

import Image from 'next/image';
import {
  ChevronRight,
  Link as LinkIcon,
  Cpu,
  Database,
  Network,
  Workflow,
  ShieldCheck,
  Sparkles,
  GitBranch,
  Boxes,
  Activity,
  Cloud,
  Terminal,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- TYPE DEFINITIONS ---
type Highlight = { label: string; value: string };
type Feature = { icon: React.ReactNode; title: string; body: string };
type ArchLine = string;

interface ProjectData {
  title: string;
  tagline?: string;
  description: string;
  techStack: string[];
  stackGroups?: { name: string; items: string[] }[];
  highlights?: Highlight[];
  features?: Feature[];
  architecture?: ArchLine[];
  date: string;
  status?: 'Live' | 'In Production' | 'Shipped' | 'Research';
  links: { name: string; url: string }[];
  images: { src: string; alt: string }[];
}

// --- PROJECT DATABASE ---
const PROJECT_CONTENT: ProjectData[] = [
  {
    title: 'BigData Platform — AI Observability Agent',
    tagline:
      'GKE-deployed big-data platform with a RAG-powered Gemini chatbot that diagnoses pipeline failures, K8s pod issues and traces lineage in real time.',
    description:
      "A production-grade big data platform deployed on Google Kubernetes Engine (GKE) with an AI-powered observability chatbot. Engineers diagnose pipeline failures, analyze Kubernetes pod issues, trace data lineage and get instant answers about the platform — all through a RAG-powered chat interface backed by Google Gemini 2.5 Flash. The system fuses live Airflow state, Kubernetes telemetry and OpenLineage flow graphs into a single ChromaDB knowledge fabric that an agent reasons over.",
    status: 'Live',
    highlights: [
      { label: 'Deploy Target', value: 'GKE Autopilot' },
      { label: 'LLM Core', value: 'Gemini 2.5 Flash' },
      { label: 'Vector Store', value: 'ChromaDB · 4 collections' },
      { label: 'Pipelines', value: '6 Airflow DAGs' },
      { label: 'Data Zones', value: 'landing → models' },
      { label: 'Namespaces', value: 'backend · airflow · data · demo-faults' },
    ],
    features: [
      {
        icon: <Sparkles className="h-4 w-4" />,
        title: 'RAG-Powered Chat',
        body:
          'all-MiniLM-L6-v2 embeddings + ChromaDB retrieval across code, logs, DAG metadata and lineage — answers cite their sources.',
      },
      {
        icon: <Activity className="h-4 w-4" />,
        title: 'Live Failure Diagnosis',
        body:
          'Auto-fills from recent Airflow failures, fetches task logs and runs an LLM diagnosis with category, root cause and next actions.',
      },
      {
        icon: <Boxes className="h-4 w-4" />,
        title: 'Kubernetes Triage',
        body:
          'Browses pods + events per namespace, diagnoses CrashLoopBackOff, OOMKilled, ImagePullBackOff and unschedulable pods.',
      },
      {
        icon: <GitBranch className="h-4 w-4" />,
        title: 'OpenLineage Tracing',
        body:
          'Marquez-backed dataset lineage from landing → raw → staging → curated → features → models, synced into the vector store.',
      },
      {
        icon: <Workflow className="h-4 w-4" />,
        title: 'Demo Mode',
        body:
          'A demo_pipeline DAG with an inject_bad_data toggle plus a demo-faults namespace of intentionally broken pods for live recruiter demos.',
      },
      {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: 'Data Quality Gates',
        body:
          'Schema validation, null ratios, row counts and duplicate detection enforced before data promotes between zones.',
      },
    ],
    architecture: [
      '┌──────────────────────────────────────────────────────────┐',
      '│   React + Vite + Tailwind   (Chat · Logs · Airflow · K8s) │',
      '└────────────────────────────┬─────────────────────────────┘',
      '                             │  nginx reverse proxy',
      '                             ▼',
      '┌──────────────────────────────────────────────────────────┐',
      '│                    FastAPI Backend                        │',
      '│  /chat  /analyze-log  /analyze-airflow-task              │',
      '│  /analyze-k8s-pod  /lineage/*  /ops/*  /index/*          │',
      '└──┬────────┬──────────┬──────────┬──────────┬─────────────┘',
      '   │        │          │          │          │',
      '   ▼        ▼          ▼          ▼          ▼',
      ' RAG     Log         K8s       Lineage     Ops',
      ' Engine  Analyzer    Logs      Client      Sync',
      '   │                              │          │',
      '   ▼                              ▼          ▼',
      ' Gemini 2.5 Flash            Marquez    Apache Airflow',
      '   │',
      '   ▼',
      ' ChromaDB (PVC) — code · logs · DAGs · lineage',
    ],
    stackGroups: [
      {
        name: 'Frontend',
        items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Markdown'],
      },
      {
        name: 'Backend & AI',
        items: [
          'FastAPI',
          'Google Gemini 2.5 Flash',
          'google-genai SDK',
          'sentence-transformers (MiniLM-L6-v2)',
          'ChromaDB',
        ],
      },
      {
        name: 'Data & Orchestration',
        items: [
          'Apache Airflow',
          'OpenLineage',
          'Marquez',
          'PostgreSQL',
          'PySpark-style ETL',
          'RandomForest (sklearn)',
        ],
      },
      {
        name: 'Infrastructure',
        items: [
          'Google Kubernetes Engine (GKE)',
          'Docker',
          'Artifact Registry',
          'PVC storage',
          'LoadBalancer Services',
          'RBAC',
        ],
      },
    ],
    techStack: [
      'GKE',
      'FastAPI',
      'Gemini 2.5 Flash',
      'ChromaDB',
      'LangChain-style RAG',
      'Apache Airflow',
      'OpenLineage',
      'Marquez',
      'React + Vite',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
    ],
    date: 'May 2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss',
      },
    ],
    images: [
      {
        src: '/projects/ai-obs.png',
        alt: 'AI Observability Agent — GKE big-data platform architecture',
      },
    ],
  },
  {
    title: 'DataPilot AI Pro',
    tagline:
      '6-agent autonomous data-science platform orchestrated by LangGraph with PPO-driven model selection.',
    description:
      'An AI-powered autonomous data science platform featuring 6 specialized AI agents orchestrated by LangGraph. Uses Reinforcement Learning (PPO) for intelligent model selection and includes AutoML, feature engineering, and SHAP/LIME explainability. A complete end-to-end ML pipeline with MLflow tracking and Docker deployment.',
    status: 'Shipped',
    highlights: [
      { label: 'AI Agents', value: '6 specialized' },
      { label: 'Orchestrator', value: 'LangGraph' },
      { label: 'RL Policy', value: 'PPO (Stable-Baselines3)' },
      { label: 'Explainability', value: 'SHAP + LIME' },
    ],
    techStack: [
      'Python',
      'LangGraph',
      'Llama 3.1',
      'Stable-Baselines3',
      'PPO',
      'PyCaret',
      'FastAPI',
      'Streamlit',
      'MLflow',
      'Docker',
      'PostgreSQL',
      'Redis',
    ],
    date: 'January 2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss/DataPilot-AI',
      },
    ],
    images: [
      {
        src: '/projects/datapilot-preview.jpg',
        alt: 'DataPilot AI Pro - Multi-Agent Data Science Platform',
      },
    ],
  },
  {
    title: 'Deep Virtual Try-On',
    tagline:
      'GAN + TPS warping pipeline for high-fidelity garment synthesis with preserved texture and shape.',
    description:
      'End-to-end Deep Learning pipeline for Virtual Try-On using Generative Adversarial Networks (GANs) and Thin-Plate Spline (TPS) transformation. Enables realistic high-fidelity garment synthesis suitable for e-commerce, preserving texture, shape, and realistic deformations.',
    status: 'Shipped',
    techStack: [
      'Python',
      'PyTorch',
      'GANs',
      'Computer Vision',
      'TPS Warping',
      'DeepLabV3',
      'OpenPose',
      'VGG16',
    ],
    date: 'December 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss/Virtual_Try_On',
      },
    ],
    images: [
      { src: '/projects/vton-preview.jpg', alt: 'Deep Virtual Try-On with GANs' },
    ],
  },
  {
    title: 'Smart Field',
    tagline:
      'IEEE-published precision agriculture stack: ResNet9 disease detection + RF crop recommendation + IoT.',
    description:
      'An end-to-end ML solution for precision agriculture combining Deep Learning (ResNet9 with 38-class plant disease detection), Random Forest crop recommendations, and real-time IoT sensor integration. Features weather API integration and a Flask-based web interface. Published in IEEE AIMLA 2024.',
    status: 'Shipped',
    techStack: [
      'Python',
      'PyTorch',
      'Flask',
      'scikit-learn',
      'Random Forest',
      'Deep Learning',
      'Computer Vision',
      'OpenWeatherMap API',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss/Smart_Field',
      },
    ],
    images: [
      {
        src: '/projects/smartfield-preview.jpg',
        alt: 'Smart Field - AI-Powered Agriculture Platform',
      },
    ],
  },
  {
    title: 'L.I.S.A',
    tagline:
      'NLP accessibility stack: BERT QA + T5 generation + SpaCy summarization for the hearing-impaired.',
    description:
      'NLP-powered accessibility platform transforming spoken language into accessible formats for hearing-impaired individuals. Features BERT-based Question Answering, T5 Question Generation, and SpaCy text summarization - bridging communication gaps through AI.',
    status: 'Shipped',
    techStack: [
      'Python',
      'PyTorch',
      'Transformers',
      'BERT',
      'T5',
      'SpaCy',
      'Flask',
      'Hugging Face',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss/LISA',
      },
    ],
    images: [
      { src: '/projects/lisa-preview.jpg', alt: 'LISA - Learning Interpreter for Specially Aided' },
    ],
  },
  {
    title: 'AI-Native Portfolio',
    tagline:
      "The portfolio you're using right now — chat with my digital twin instead of scrolling a static page.",
    description:
      "The world's first AI-native portfolio where an AI avatar answers questions about me in real time. Built with Next.js and powered by Mistral AI, featuring dynamic conversations, tool-calling for projects/resume/contact, and personalized responses.",
    status: 'Live',
    techStack: [
      'Next.js 16',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'Vercel AI SDK',
      'Vercel',
    ],
    date: 'January 2026',
    links: [
      {
        name: 'Live Demo — You Are Here!',
        url: 'https://github.com/Shiva250503ss/Portfolio-Shivaraj',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shiva250503ss/Portfolio-Shivaraj',
      },
    ],
    images: [
      { src: '/projects/ai-portfolio-preview.png', alt: 'AI Native Portfolio with chat interface' },
    ],
  },
];

// --- SUB-COMPONENTS ---

const StatusPill = ({ status }: { status?: ProjectData['status'] }) => {
  if (!status) return null;
  const color =
    status === 'Live' || status === 'In Production'
      ? 'bg-emerald-500'
      : status === 'Research'
        ? 'bg-amber-500'
        : 'bg-sky-500';
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur dark:bg-white/5 dark:text-neutral-200">
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-75`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
      </span>
      {status}
    </span>
  );
};

const HighlightGrid = ({ items }: { items: Highlight[] }) => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
    {items.map((h, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 p-4 backdrop-blur transition hover:border-blue-400/60 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-blue-400/40"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="text-[11px] tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          {h.label}
        </div>
        <div className="mt-1 font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {h.value}
        </div>
      </div>
    ))}
  </div>
);

const ArchitectureBlock = ({ lines }: { lines: ArchLine[] }) => (
  <div className="overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950 text-neutral-200 shadow-xl">
    <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/80 px-4 py-2">
      <span className="h-3 w-3 rounded-full bg-red-500/80" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
      <span className="h-3 w-3 rounded-full bg-green-500/80" />
      <span className="ml-3 flex items-center gap-2 font-mono text-xs text-neutral-400">
        <Terminal className="h-3.5 w-3.5" />
        architecture.txt
      </span>
    </div>
    <pre className="overflow-x-auto px-5 py-4 font-mono text-[11px] leading-relaxed text-emerald-300 sm:text-xs">
      {lines.join('\n')}
    </pre>
  </div>
);

const FeatureGrid = ({ items }: { items: Feature[] }) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {items.map((f, i) => (
      <div
        key={i}
        className="group rounded-2xl border border-neutral-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400/60 dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-blue-400/40"
      >
        <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-2.5 py-1 text-blue-600 dark:text-blue-300">
          {f.icon}
          <span className="text-xs font-semibold tracking-wide uppercase">
            {f.title}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {f.body}
        </p>
      </div>
    ))}
  </div>
);

const SectionHeader = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-4 flex items-center gap-2">
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-300">
      {icon}
    </div>
    <h3 className="text-sm font-semibold tracking-wider text-neutral-700 uppercase dark:text-neutral-300">
      {children}
    </h3>
  </div>
);

// --- COMPONENT ---
interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-[#F5F5F7] via-white to-[#EEF4FF] p-8 dark:border-neutral-800 dark:from-[#0E1320] dark:via-[#0B0F1A] dark:to-[#0E1320]">
        {/* hi-tech grid bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(99,102,241,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
          }}
        />
        <div className="relative space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-neutral-500 dark:text-neutral-400">
              {projectData.date}
            </span>
            <StatusPill status={projectData.status} />
          </div>

          {projectData.tagline && (
            <p className="bg-gradient-to-r from-neutral-900 via-blue-700 to-neutral-900 bg-clip-text font-sans text-lg leading-snug font-semibold text-transparent dark:from-white dark:via-blue-300 dark:to-white md:text-xl">
              {projectData.tagline}
            </p>
          )}

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-[17px]">
            {projectData.description}
          </p>
        </div>
      </div>

      {/* Highlights */}
      {projectData.highlights && projectData.highlights.length > 0 && (
        <div>
          <SectionHeader icon={<Activity className="h-4 w-4" />}>
            At a Glance
          </SectionHeader>
          <HighlightGrid items={projectData.highlights} />
        </div>
      )}

      {/* Architecture */}
      {projectData.architecture && projectData.architecture.length > 0 && (
        <div>
          <SectionHeader icon={<Network className="h-4 w-4" />}>
            Live Architecture
          </SectionHeader>
          <ArchitectureBlock lines={projectData.architecture} />
        </div>
      )}

      {/* Feature grid */}
      {projectData.features && projectData.features.length > 0 && (
        <div>
          <SectionHeader icon={<Sparkles className="h-4 w-4" />}>
            What's Inside
          </SectionHeader>
          <FeatureGrid items={projectData.features} />
        </div>
      )}

      {/* Stack groups */}
      {projectData.stackGroups && projectData.stackGroups.length > 0 ? (
        <div>
          <SectionHeader icon={<Cpu className="h-4 w-4" />}>
            Engineering Stack
          </SectionHeader>
          <div className="space-y-4">
            {projectData.stackGroups.map((group, gi) => (
              <div key={gi}>
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                  {group.name === 'Frontend' && <Boxes className="h-3.5 w-3.5" />}
                  {group.name === 'Backend & AI' && (
                    <Cpu className="h-3.5 w-3.5" />
                  )}
                  {group.name === 'Data & Orchestration' && (
                    <Database className="h-3.5 w-3.5" />
                  )}
                  {group.name === 'Infrastructure' && (
                    <Cloud className="h-3.5 w-3.5" />
                  )}
                  {group.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech, ti) => (
                    <span
                      key={ti}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 font-mono text-[12px] text-neutral-800 transition hover:border-blue-400 hover:text-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <SectionHeader icon={<Cpu className="h-4 w-4" />}>
            Technologies
          </SectionHeader>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {projectData.links && projectData.links.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2 px-1">
            <h3 className="text-sm tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Links
            </h3>
            <LinkIcon className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-transparent bg-[#F5F5F7] p-4 transition-colors hover:border-blue-300 hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:border-blue-500/40 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
export const data = [
  {
    category: 'AIOps · GKE · RAG',
    title: 'BigData Platform — AI Observability Agent',
    src: '/projects/ai-obs.png',
    content: (
      <ProjectContent
        project={{ title: 'BigData Platform — AI Observability Agent' }}
      />
    ),
  },
  {
    category: 'Multi-Agent AI & MLOps',
    title: 'DataPilot AI Pro',
    src: '/projects/datapilot-preview.jpg',
    content: <ProjectContent project={{ title: 'DataPilot AI Pro' }} />,
  },
  {
    category: 'Computer Vision & GANs',
    title: 'Deep Virtual Try-On',
    src: '/projects/vton-preview.jpg',
    content: <ProjectContent project={{ title: 'Deep Virtual Try-On' }} />,
  },
  {
    category: 'Deep Learning & IoT',
    title: 'Smart Field',
    src: '/projects/smartfield-preview.jpg',
    content: <ProjectContent project={{ title: 'Smart Field' }} />,
  },
  {
    category: 'NLP & Transformers',
    title: 'L.I.S.A',
    src: '/projects/lisa-preview.jpg',
    content: <ProjectContent project={{ title: 'L.I.S.A' }} />,
  },
  {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    src: '/projects/ai-portfolio-preview.png',
    content: <ProjectContent project={{ title: 'AI-Native Portfolio' }} />,
  },
];
