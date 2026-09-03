import React from 'react';
import { ArrowDown, ArrowRight, FileText, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Top Status Pill */}
      <div className="pt-4 sm:pt-8 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[11px] text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="font-mono text-sky-300">BENNETT UNIVERSITY</span>
          <span className="text-neutral-500">•</span>
          <span>B.Tech CSE (Data Science) &apos;27</span>
        </div>

        <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] text-neutral-400">
          <MapPin className="w-3 h-3 text-neutral-500" />
          <span>{personalInfo.location}</span>
        </div>
      </div>

      {/* Main Headline Block */}
      <div className="my-auto py-12 md:py-20">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-sky-400 uppercase mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{personalInfo.title}</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-[0.95] mb-6 sm:mb-8">
          <span className="block text-gradient-white">RAJVARDHAN</span>
          <span className="block text-neutral-400/90 font-light">SINGH RATHORE</span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300/80 font-normal leading-relaxed mb-10">
          Final-year B.Tech CSE (Data Science) student at <span className="text-white font-medium">Bennett University</span> building and deploying intelligent systems — from data cleaning and model training through to production deployment with <span className="text-white font-medium">FastAPI, Docker, and AWS</span>.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <a
            href="#projects"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center space-x-2.5 px-7 py-4 rounded-full bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>View Resume</span>
          </button>
        </div>
      </div>

      {/* Bottom Information Row & Scroll Indicator */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-neutral-400">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
            <span>CGPA: 7.14</span>
          </div>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-400">AWS AI Practitioner (In Progress)</span>
        </div>

        <a
          href="#about"
          className="group flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
