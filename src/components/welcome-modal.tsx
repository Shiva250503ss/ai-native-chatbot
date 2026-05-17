'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Bot, Cpu, MessagesSquare, Sparkles, X, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

const capabilities = [
  {
    icon: <Bot className="h-4 w-4" />,
    title: 'Digital Twin',
    body: 'I am Shiva. Ask anything — projects, internships, hobbies — the avatar answers in real time.',
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    title: 'Tool-Calling AI',
    body: 'Mistral + Vercel AI SDK with custom tools that surface my resume, projects, contact and presentation.',
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: 'Recruiter-Tuned',
    body: 'Concise, technical answers if you are screening, casual chat if you are just exploring.',
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: 'Live Stack',
    body: 'Next.js 16 · TypeScript · Tailwind · Framer Motion · streaming responses on Vercel.',
  },
];

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo-ssr.svg"
        width={100}
        height={100}
        alt="Logo"
        className="w-6 md:w-8"
      />
      <span className="sr-only">About Shivaraj</span>
    </Button>
  );

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 font-mono text-[11px] tracking-wider text-blue-700 uppercase dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  System Online · v2026.5
                </div>
                <DialogTitle className="flex items-center gap-2 text-3xl font-bold tracking-tight md:text-4xl">
                  <span className="bg-gradient-to-r from-neutral-900 via-blue-600 to-neutral-900 bg-clip-text text-transparent dark:from-white dark:via-blue-300 dark:to-white">
                    Welcome to Shivaraj's AI Portfolio
                  </span>{' '}
                  🚀
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  Not a static page. An interactive digital twin powered by an
                  LLM with tool-calling.
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              {/* Hi-tech intro */}
              <section className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-[#F5F5F7] via-white to-[#EEF4FF] p-8 dark:border-neutral-800 dark:from-[#0E1320] dark:via-[#0B0F1A] dark:to-[#0E1320]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.20]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(99,102,241,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.18) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    maskImage:
                      'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
                  }}
                />

                <div className="relative space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                      <MessagesSquare className="h-5 w-5" />
                      What's this?
                    </h3>
                    <p className="text-accent-foreground text-base leading-relaxed">
                      This isn't your typical portfolio — it's an{' '}
                      <strong>AI-powered chatbot that IS me</strong>. Whether
                      you're a recruiter, a fellow developer, or just curious
                      about my work, ask anything. The avatar answers like the
                      real Shivaraj would, but it never sleeps.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                      <Sparkles className="h-5 w-5" />
                      Why an AI Portfolio?
                    </h3>
                    <p className="text-accent-foreground text-base leading-relaxed">
                      Traditional portfolios are static and one-size-fits-all.
                      Mine adapts to <strong>you</strong>. Ask about skills,
                      projects, internships, even hobbies — get exactly what
                      you're looking for, no scrolling required.
                    </p>
                  </div>

                  {/* capability grid */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {capabilities.map((c) => (
                      <div
                        key={c.title}
                        className="group rounded-xl border border-neutral-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400/60 dark:border-neutral-800 dark:bg-neutral-900/70"
                      >
                        <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-300">
                          {c.icon}
                          <span className="text-[11px] font-semibold tracking-wider uppercase">
                            {c.title}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {c.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                Let's Chat! 🎉
              </Button>
              <div className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm">
                <p className="text-muted-foreground">
                  Love it? Let me know! Feedback always welcome.
                </p>
                <div
                  className="flex cursor-pointer items-center text-blue-500 hover:underline"
                  onClick={handleContactMe}
                >
                  Contact me.
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
