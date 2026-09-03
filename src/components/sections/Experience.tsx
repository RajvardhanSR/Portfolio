import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, BarChart3, Database } from 'lucide-react';
import { experience } from '../../data/resumeData';

export const Experience: React.FC = () => {
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState<number>(1);
  const exp = experience[0];

  const workflowExplanations = [
    {
      stage: "RAW DATA",
      summary: "Defined Problem Statement",
      detail: "Took a predictive modelling project from an initial business problem statement to structured data ingestion requirements."
    },
    {
      stage: "CLEANING",
      summary: "Pandas Data Wrangling",
      detail: "Cleaned and prepped structured datasets in Python (Pandas), identifying and fixing missing and inconsistent values before they could bias downstream models."
    },
    {
      stage: "EDA",
      summary: "Exploratory Pattern Discovery",
      detail: "Conducted rigorous exploratory data analysis to find hidden patterns, correlation structures, and feature distributions across the dataset."
    },
    {
      stage: "FEATURES",
      summary: "Feature Engineering & Selection",
      detail: "Used exploratory insights to isolate and select high-impact predictive features that directly shaped the input vectors for the final model."
    },
    {
      stage: "MODEL TRAINING",
      summary: "Scikit-learn Model Comparison",
      detail: "Trained and systematically compared multiple candidate algorithms in Scikit-learn to identify optimal model architectures."
    },
    {
      stage: "EVALUATION",
      summary: "Held-Out Test Set Validation",
      detail: "Validated candidates against an isolated held-out test set, selecting the highest-performing model based on generalization performance."
    },
    {
      stage: "PRESENTATION",
      summary: "Findings & Visualization",
      detail: "Synthesized executive findings and model evaluation metrics with clear charts, presenting actionable insights back to the team."
    }
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          03 // PROFESSIONAL EXPERIENCE
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          <span className="text-gradient-white">INDUSTRY</span>{' '}
          <span className="text-gradient-blue">EXPERIENCE.</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Executing rigorous predictive modeling from data hygiene to executive presentation.
        </p>
      </div>

      {/* Main Experience Card */}
      <div className="rounded-3xl bg-[#0b0b13]/80 border border-white/[0.08] p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
        {/* Role Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>INTERNSHIP TIMELINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {exp.role}
            </h3>
            <div className="text-lg text-neutral-300 font-medium mt-1">
              {exp.company}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-300">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Workflow */}
        <div className="my-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              INTERACTIVE END-TO-END MODELING WORKFLOW (CLICK STAGES)
            </span>
            <span className="text-[11px] font-mono text-sky-400">
              STAGE {activeWorkflowIdx + 1} OF {workflowExplanations.length}
            </span>
          </div>

          {/* Workflow Stepper Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {workflowExplanations.map((w, idx) => {
              const isActive = activeWorkflowIdx === idx;
              return (
                <button
                  key={w.stage}
                  onClick={() => setActiveWorkflowIdx(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-sky-500/20 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-sky-400 font-bold block mb-1">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold tracking-tight">
                    {w.stage}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Workflow Inspector */}
          <div className="mt-4 p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-sky-400 uppercase mb-1">
                {workflowExplanations[activeWorkflowIdx].stage} // {workflowExplanations[activeWorkflowIdx].summary}
              </div>
              <p className="text-sm text-neutral-200 font-light">
                {workflowExplanations[activeWorkflowIdx].detail}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Verified In Resume</span>
              <span className="text-xs font-mono text-emerald-400 font-medium">Production Tested</span>
            </div>
          </div>
        </div>

        {/* Detailed Resume Responsibilities List */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6">
            RESUME-VERIFIED CONTRIBUTIONS & OUTCOMES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exp.details.map((point, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
