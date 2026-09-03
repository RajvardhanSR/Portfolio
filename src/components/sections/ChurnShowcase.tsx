import React, { useState } from 'react';
import { Cloud, Server, Database, Brain, Sparkles, Check, ArrowRight, Activity, HardDrive } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ChurnShowcaseProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ChurnShowcase: React.FC<ChurnShowcaseProps> = ({ project, onOpenCaseStudy }) => {
  const [selectedProfile, setSelectedProfile] = useState<'risk' | 'safe'>('risk');

  const customerProfiles = {
    risk: {
      id: "CUST-94821",
      tenure: "4 months",
      contract: "Month-to-month",
      monthlyCharges: "$94.50",
      supportTickets: "6 open tickets",
      churnProb: "84.7%",
      status: "High Churn Risk",
      explanation:
        "The Scikit-learn classifier flagged this customer primarily due to a short 4-month tenure paired with an unusually high frequency of support tickets (6 in 30 days) and a month-to-month contract commitment."
    },
    safe: {
      id: "CUST-10394",
      tenure: "38 months",
      contract: "Two-year",
      monthlyCharges: "$64.20",
      supportTickets: "0 tickets",
      churnProb: "12.3%",
      status: "Low Churn Risk",
      explanation:
        "The customer exhibits strong loyalty indicators: long tenure of 38 months, two-year fixed contract commitment, and zero active support complaints, reducing churn probability to 12.3%."
    }
  };

  const current = customerProfiles[selectedProfile];

  const pipelineStages = [
    { name: "DATA", icon: Database, label: "Structured Preprocessing & Cleaning" },
    { name: "MODEL", icon: Brain, label: "Scikit-learn Classifier + Versioning" },
    { name: "API", icon: Activity, label: "FastAPI Real-Time Endpoint (<100ms)" },
    { name: "EXPLANATION", icon: Sparkles, label: "Hugging Face GPT-2 Plain-Language Layer" },
    { name: "AWS DEPLOYMENT", icon: Cloud, label: "AWS EC2 + S3 Artifacts + Docker" },
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0d0d16] via-[#090910] to-[#050508] border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>PROJECT // 02</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Progression Flow: DATA → MODEL → API → EXPLANATION → AWS DEPLOYMENT */}
      <div className="my-8">
        <div className="text-xs font-mono text-neutral-400 uppercase mb-4 tracking-wider">
          FULL-STACK ML DEPLOYMENT LIFECYCLE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {pipelineStages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.name}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-violet-400 font-bold">
                      0{i + 1}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {stage.name}
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 mt-3 pt-2 border-t border-white/5 leading-snug">
                  {stage.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Simulation Panel: Real-Time API Inference + GPT-2 Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
        {/* Left: Interactive Input & Prediction */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-mono text-neutral-300">
                FASTAPI REAL-TIME PREDICTION TEST
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedProfile('risk')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    selectedProfile === 'risk'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  Customer A (Risk)
                </button>
                <button
                  onClick={() => setSelectedProfile('safe')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    selectedProfile === 'safe'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  Customer B (Safe)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-4">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[10px]">CUSTOMER ID</span>
                <span className="text-white font-medium">{current.id}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[10px]">TENURE</span>
                <span className="text-white font-medium">{current.tenure}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[10px]">CONTRACT</span>
                <span className="text-white font-medium">{current.contract}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[10px]">SUPPORT TICKETS</span>
                <span className="text-white font-medium">{current.supportTickets}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                SCIKIT-LEARN MODEL INFERENCE
              </span>
              <span
                className={`text-2xl font-bold font-mono ${
                  selectedProfile === 'risk' ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {current.churnProb}
              </span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono ${
                selectedProfile === 'risk'
                  ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                  : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              {current.status}
            </span>
          </div>
        </div>

        {/* Right: GPT-2 Plain-Language Explanation & AWS MLOps Badge */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-4 border-b border-white/10 mb-4 text-xs font-mono text-violet-400">
              <Sparkles className="w-4 h-4" />
              <span>HUGGING FACE GPT-2 EXPLAINABILITY LAYER</span>
            </div>
            <div className="text-xs text-neutral-400 uppercase font-mono mb-2">
              Generated Plain-Language Reasoning
            </div>
            <p className="text-sm text-neutral-200 leading-relaxed font-mono bg-violet-950/20 p-4 rounded-xl border border-violet-500/20">
              &quot;{current.explanation}&quot;
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-neutral-500 block">ARTIFACTS</span>
              <span className="text-sky-300">AWS S3</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-neutral-500 block">CONTAINER</span>
              <span className="text-violet-300">Docker Image</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
              <span className="text-neutral-500 block">COMPUTE</span>
              <span className="text-emerald-300">AWS EC2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-neutral-400">
          Implemented with <span className="text-white font-medium">Scikit-learn, FastAPI, GPT-2, Docker, AWS EC2 & S3</span>
        </div>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all hover:scale-[1.02]"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
