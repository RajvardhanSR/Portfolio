import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, Layers, Cpu, Database, Cloud, Terminal } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090910] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto z-10 animate-in zoom-in-95 duration-200 text-neutral-200">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#090910]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">
              SYSTEM DEEP DIVE // PROJECT {project.number}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Subtitle & Tech Stack */}
          <div className="pb-8 border-b border-white/10">
            <p className="text-base sm:text-lg text-neutral-300 font-light mb-4">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 01 — PROBLEM */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 tracking-wider">
              <span>01 // THE CHALLENGE & PROBLEM STATEMENT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Why Existing Solutions Failed
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light bg-white/[0.02] p-5 rounded-2xl border border-white/5">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* 02 — APPROACH */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 tracking-wider">
              <span>02 // ENGINEERING APPROACH & STRATEGY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Architectural Concept
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light bg-sky-950/20 p-5 rounded-2xl border border-sky-500/20">
              {project.caseStudy.approach}
            </p>
          </div>

          {/* 03 — ARCHITECTURE */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 tracking-wider">
              <span>03 // ARCHITECTURAL SUBSYSTEMS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Module Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3 text-xs sm:text-sm text-neutral-300"
                >
                  <Layers className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 04 — IMPLEMENTATION */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 tracking-wider">
              <span>04 // IMPLEMENTATION STACK</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Production Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.implementation.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-neutral-200 flex items-center space-x-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — RESULTS & BENCHMARKS */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 tracking-wider">
              <span>05 // VERIFIED OUTCOMES & BENCHMARKS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Resume-Documented Impact
            </h3>
            <div className="space-y-3">
              {project.caseStudy.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-mono">
                    {res}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-neutral-500">
            Data verified strictly against uploaded resume.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
