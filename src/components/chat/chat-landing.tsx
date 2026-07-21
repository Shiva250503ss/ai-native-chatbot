'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Code,
  Mail,
  MessageSquare,
  Sparkles,
  Workflow,
} from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'Who are you?',
      hint: 'about · background',
    },
    {
      icon: <Workflow className="h-4 w-4" />,
      text: 'Tell me about your Code Repair Assistant project',
      hint: 'featured · LLM fine-tuning',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'What projects have you worked on?',
      hint: 'portfolio',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: 'What are your skills?',
      hint: 'stack · tooling',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'How can I contact you?',
      hint: 'recruiters',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome message */}
      <motion.div className="mb-8 text-center" variants={itemVariants}>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 font-mono text-[11px] tracking-wider text-blue-700 uppercase dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Digital Twin · Online
        </div>
        <h2 className="mb-3 text-2xl font-semibold">
          <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-neutral-900 bg-clip-text text-transparent dark:from-white dark:via-blue-300 dark:to-white">
            I'm Shivaraj's digital twin
          </span>{' '}
          🤖
        </h2>
        <p className="text-muted-foreground mx-auto max-w-md">
          Ask me anything. Recruiter, dev, or just curious — I've got you.
        </p>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        className="w-full max-w-md space-y-3"
        variants={containerVariants}
      >
        {suggestedQuestions.map((question, index) => (
          <motion.button
            key={index}
            className="group bg-accent hover:bg-accent/80 relative flex w-full items-center justify-between overflow-hidden rounded-lg border border-transparent px-4 py-3 transition-colors hover:border-blue-400/40"
            onClick={() => submitQuery(question.text)}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center">
              <span className="bg-background mr-3 rounded-full p-2 text-blue-600 dark:text-blue-300">
                {question.icon}
              </span>
              <span className="text-left">{question.text}</span>
            </span>
            <span className="ml-3 hidden font-mono text-[10px] tracking-wider text-neutral-500 uppercase sm:inline dark:text-neutral-400">
              {question.hint}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* footer hint */}
      <motion.div
        variants={itemVariants}
        className="text-muted-foreground mt-8 flex items-center gap-2 text-xs"
      >
        <Sparkles className="h-3 w-3" />
        Powered by Mistral · Tool-calling enabled
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;
