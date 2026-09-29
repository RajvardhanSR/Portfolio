import React from 'react';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030305] text-neutral-400 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white font-semibold tracking-wider text-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
            Final-year B.Tech CSE (Data Science) student at Bennett University. Building and deploying full-stack intelligent systems from data cleaning to production cloud infrastructure.
          </p>
          <div className="mt-4 flex items-center space-x-2 text-[11px] text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Verified single source of truth from uploaded resume</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-[11px]">
            <Terminal className="w-3 h-3 text-sky-400" />
            <span className="text-sky-300">AWS Certified AI Practitioner</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
        <div>
          © {new Date().getFullYear()} {personalInfo.name}. All systems engineered with precision.
        </div>
        <div className="flex space-x-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-neutral-300 transition-colors">
            Email
          </a>
          <span className="text-neutral-600">•</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </footer>
  );
};
