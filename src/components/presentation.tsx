'use client';

import Image from 'next/image';
import React from 'react';

export function Presentation() {
  // Personal information
  const profile = {
    name: 'Shivaraj Senthil Rajan',
    age: '23 years old',
    location: 'Boulder, CO (Open to Relocate)',
    description:
      "Hey 👋\nI'm Shivaraj (call me Shiva!), a Data Science grad student at CU Boulder. I build AI-powered solutions that solve real problems - from RAG pipelines to end-to-end ML systems. When I'm not training models, I'm probably watching cricket, gaming, or cooking up something tasty! 🏏🎮👨‍🍳",
    src: '/profile-shivaraj.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <div className="h-full w-full animate-in zoom-in-95 fade-in duration-500">
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackSrc;
                }}
              />
            </div>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </div>

          <p className="text-foreground mt-6 leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
            {profile.description}
          </p>

          {/* Tags/Keywords */}
          <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in duration-500 delay-200">
            {['AI Engineer', 'Data Scientist', 'ML Enthusiast', 'Cricket Fan 🏏'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
