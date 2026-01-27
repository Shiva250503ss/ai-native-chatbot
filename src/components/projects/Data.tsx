// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'DataPilot AI Pro',
    description:
      'An AI-powered autonomous data science platform featuring 6 specialized AI agents orchestrated by LangGraph. Uses Reinforcement Learning (PPO) for intelligent model selection and includes AutoML, feature engineering, and SHAP/LIME explainability. A complete end-to-end ML pipeline with MLflow tracking and Docker deployment.',
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
      { src: '/projects/datapilot-preview.jpg', alt: 'DataPilot AI Pro - Multi-Agent Data Science Platform' },
    ],
  },
  {
    title: 'Deep Virtual Try-On',
    description:
      'End-to-end Deep Learning pipeline for Virtual Try-On using Generative Adversarial Networks (GANs) and Thin-Plate Spline (TPS) transformation. Enables realistic high-fidelity garment synthesis suitable for e-commerce, preserving texture, shape, and realistic deformations.',
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
    description:
      'An end-to-end ML solution for precision agriculture combining Deep Learning (ResNet9 with 38-class plant disease detection), Random Forest crop recommendations, and real-time IoT sensor integration. Features weather API integration and a Flask-based web interface.',
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
      { src: '/projects/smartfield-preview.jpg', alt: 'Smart Field - AI-Powered Agriculture Platform' },
    ],
  },
  {
    title: 'L.I.S.A',
    description:
      'NLP-powered accessibility platform transforming spoken language into accessible formats for hearing-impaired individuals. Features BERT-based Question Answering, T5 Question Generation, and SpaCy text summarization - bridging communication gaps through AI.',
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
    description:
      'The world\'s first AI-native portfolio where an AI avatar answers questions about me in real time. Built with Next.js and powered by Mistral AI, featuring dynamic conversations and personalized responses.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'Vercel',
    ],
    date: 'January 2026',
    links: [
      {
        name: 'Live Demo - You Are Here!',
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

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
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
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
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
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Multi-Agent AI & MLOps',
    title: 'DataPilot AI Pro',
    src: '/projects/datapilot-preview.jpg',
    content: (
      <ProjectContent project={{ title: 'DataPilot AI Pro' }} />
    ),
  },
  {
    category: 'Computer Vision & GANs',
    title: 'Deep Virtual Try-On',
    src: '/projects/vton-preview.jpg',
    content: (
      <ProjectContent project={{ title: 'Deep Virtual Try-On' }} />
    ),
  },
  {
    category: 'Deep Learning & IoT',
    title: 'Smart Field',
    src: '/projects/smartfield-preview.jpg',
    content: (
      <ProjectContent project={{ title: 'Smart Field' }} />
    ),
  },
  {
    category: 'NLP & Transformers',
    title: 'L.I.S.A',
    src: '/projects/lisa-preview.jpg',
    content: (
      <ProjectContent project={{ title: 'L.I.S.A' }} />
    ),
  },
  {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    src: '/projects/ai-portfolio-preview.png',
    content: (
      <ProjectContent project={{ title: 'AI-Native Portfolio' }} />
    ),
  },
];