import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { projects } from '../../data/resumeData';
import { Project } from '../../types/portfolio';
import { ClauseWiseShowcase } from './ClauseWiseShowcase';
import { ChurnShowcase } from './ChurnShowcase';
import { AnomalyShowcase } from './AnomalyShowcase';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenCaseStudy }) => {
  const clausewise = projects.find((p) => p.id === 'clausewise') || projects[0];
  const churn = projects.find((p) => p.id === 'customer-churn') || projects[1];
  const anomaly = projects.find((p) => p.id === 'network-anomaly') || projects[2];

  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          02 // FEATURED SYSTEMS
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          <span className="text-gradient-white">ENGINEERED FOR</span>{' '}
          <span className="text-gradient-blue">PRODUCTION.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-300/80 font-light leading-relaxed">
          Product-style architectural breakdowns of full-stack intelligent systems — from self-correcting agentic loops to containerized cloud deployments.
        </p>
      </div>

      {/* Projects Showcase Stack */}
      <div className="space-y-16 lg:space-y-24">
        {/* Project 01: Hero Project - ClauseWise */}
        <ClauseWiseShowcase project={clausewise} onOpenCaseStudy={onOpenCaseStudy} />

        {/* Project 02: Churn Prediction with Explainability */}
        <ChurnShowcase project={churn} onOpenCaseStudy={onOpenCaseStudy} />

        {/* Project 03: Real-Time Network Traffic Anomaly Detection */}
        <AnomalyShowcase project={anomaly} onOpenCaseStudy={onOpenCaseStudy} />
      </div>
    </section>
  );
};
