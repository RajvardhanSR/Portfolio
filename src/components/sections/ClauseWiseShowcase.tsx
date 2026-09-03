import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle, FileSpreadsheet, ArrowRight, ExternalLink, Cpu, Layers } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ClauseWiseShowcaseProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ClauseWiseShowcase: React.FC<ClauseWiseShowcaseProps> = ({ project, onOpenCaseStudy }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'pipeline' | 'benchmark' | 'demo'>('pipeline');

  const steps = [
    {
      name: "USER QUERY",
      tag: "INPUT",
      description: "Regulatory compliance question requiring cross-document synthesis",
      details: "Query: 'What are the disclosure norms for liquidity risk in NBFCs across circular amendments?'"
    },
    {
      name: "RETRIEVAL",
      tag: "CHROMA DB",
      description: "First-pass vector retrieval across 242 regulatory chunks",
      details: "Retrieved 3 chunks from 2022 circular; cross-reference to 2024 amendment missing."
    },
    {
      name: "SUFFICIENCY CHECK",
      tag: "AGENT EVAL",
      description: "Evaluates if retrieved context answers query completely",
      details: "Status: INSUFFICIENT. Missing operational amendment reference from subsequent circular."
    },
    {
      name: "QUERY REFORMULATION",
      tag: "ORCHESTRATION",
      description: "Generates targeted query with extracted circular reference IDs",
      details: "Reformulated: 'NBFC liquidity risk disclosure amendments circular 2024 clause 14.2'"
    },
    {
      name: "RETRIEVAL (PASS 2)",
      tag: "TARGETED SEARCH",
      description: "Multi-hop retrieval fetches specific linked cross-document clauses",
      details: "Fetched target amendment chunk from document 3. Sufficiency threshold met."
    },
    {
      name: "GROUNDED ANSWER",
      tag: "VERIFIED OUTPUT",
      description: "Synthesizes answer with groundedness scoring & zero hallucination",
      details: "Groundedness Score: 0.96 • Hallucination Flag: Clean • Citations: 4 Verified Clauses"
    }
  ];

  // Auto-play pipeline steps
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0e0e18] via-[#090910] to-[#06060a] border border-sky-500/25 p-6 sm:p-10 lg:p-12 shadow-[0_0_80px_-20px_rgba(56,189,248,0.18)] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>HERO PROJECT // 01</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
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

      {/* Mode switcher tabs */}
      <div className="relative z-10 flex items-center space-x-2 my-6">
        <button
          onClick={() => setSelectedTab('pipeline')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            selectedTab === 'pipeline'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
              : 'bg-white/[0.05] text-neutral-400 hover:text-white'
          }`}
        >
          Interactive RAG Pipeline
        </button>
        <button
          onClick={() => setSelectedTab('benchmark')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            selectedTab === 'benchmark'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
              : 'bg-white/[0.05] text-neutral-400 hover:text-white'
          }`}
        >
          RBI Circular Benchmark (242 Chunks)
        </button>
        <button
          onClick={() => setSelectedTab('demo')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            selectedTab === 'demo'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
              : 'bg-white/[0.05] text-neutral-400 hover:text-white'
          }`}
        >
          Streamlit App Comparison
        </button>
      </div>

      {/* TAB CONTENT: INTERACTIVE PIPELINE */}
      {selectedTab === 'pipeline' && (
        <div className="relative z-10 my-6">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono text-neutral-400">
              CLICK A STAGE OR RUN SIMULATION
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs border border-sky-500/30 font-medium transition-colors"
              >
                {isPlaying ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    <span>Running Trace...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Simulate Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stepper Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep(idx);
                  }}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                    isActive
                      ? 'bg-sky-950/60 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.3)] scale-[1.02]'
                      : isPast
                      ? 'bg-white/[0.04] border-white/15 opacity-85'
                      : 'bg-white/[0.02] border-white/5 opacity-50 hover:opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-sky-400 font-bold">
                        0{idx + 1}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">
                        {step.tag}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      {step.name}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/10 text-[10px] text-neutral-400">
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Step Inspector Box */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2 text-sky-400">
                <Cpu className="w-4 h-4" />
                <span>ACTIVE STAGE: {steps[activeStep].name}</span>
              </div>
              <span className="text-neutral-500 font-mono">
                STAGE {activeStep + 1} OF {steps.length}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8">
                <div className="text-xs text-neutral-400 uppercase font-mono mb-1">
                  Engineered Execution Logic
                </div>
                <p className="text-sm sm:text-base text-neutral-200 font-mono leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  &gt; {steps[activeStep].details}
                </p>
              </div>

              <div className="md:col-span-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs space-y-2">
                <div className="text-neutral-400 font-mono">Self-Correction Safeguard:</div>
                <div className="text-emerald-400 font-mono flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Retry Capping: Max 3 Passes</span>
                </div>
                <div className="text-sky-400 font-mono flex items-center space-x-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Graceful Decline Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: RBI CIRCULAR BENCHMARK */}
      {selectedTab === 'benchmark' && (
        <div className="relative z-10 my-6 p-6 rounded-2xl bg-black/60 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-3xl font-extrabold text-white font-mono mb-1">242</div>
              <div className="text-xs font-mono text-sky-400 uppercase">Total Chunks Indexed</div>
              <p className="text-xs text-neutral-400 mt-2">
                Processed across 3 official Reserve Bank of India (RBI) regulatory circulars with complex cross-references.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-1">3 Documents</div>
              <div className="text-xs font-mono text-emerald-400 uppercase">Cross-Doc Dependencies</div>
              <p className="text-xs text-neutral-400 mt-2">
                Surfaced genuine multi-hop cases where amendments modified previous statutory thresholds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-3xl font-extrabold text-sky-400 font-mono mb-1">Measurable</div>
              <div className="text-xs font-mono text-sky-400 uppercase">Advantage Over Single-Pass</div>
              <p className="text-xs text-neutral-400 mt-2">
                Single-pass baseline suffered context starvation; self-correcting agent retrieved missing circular clauses.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 font-mono leading-relaxed">
            <span className="text-sky-400 font-semibold">Resume Proof:</span> &quot;Benchmarked the agentic pipeline against a single-pass baseline on real RBI regulatory circulars (242 chunks across 3 documents), surfacing genuine multi-hop and cross-document dependency cases where self-correction showed a measurable advantage.&quot;
          </div>
        </div>
      )}

      {/* TAB CONTENT: STREAMLIT APP COMPARISON */}
      {selectedTab === 'demo' && (
        <div className="relative z-10 my-6 p-6 rounded-2xl bg-black/60 border border-white/10">
          <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-4">
            <FileSpreadsheet className="w-4 h-4" />
            <span>STREAMLIT MULTI-PAGE APPLICATION ARCHITECTURE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-red-400">Baseline Single-Pass RAG</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300">Standard</span>
              </div>
              <p className="text-xs text-neutral-300 mb-4">
                Executes one static vector query. If relevant statutory amendment is not in the top-k chunks, context is incomplete.
              </p>
              <div className="space-y-2 text-xs font-mono text-neutral-400">
                <div className="text-red-300">✕ Hallucination Risk: Elevated</div>
                <div className="text-red-300">✕ Multi-Hop Dependencies: Missed</div>
                <div className="text-red-300">✕ Groundedness Score: Unverified</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-sky-300">ClauseWise Agentic Pipeline</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/30 text-sky-200">Self-Correcting</span>
              </div>
              <p className="text-xs text-neutral-300 mb-4">
                Sufficiency evaluator inspects context completeness. Dynamically reformulates search strings until sufficiency passes.
              </p>
              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="text-emerald-400">✓ Groundedness Scoring Engine</div>
                <div className="text-emerald-400">✓ Hallucination Flags Enabled</div>
                <div className="text-emerald-400">✓ Expandable Self-Correction Trace</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Action Row */}
      <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-neutral-400">
          Built with <span className="text-white font-medium">Python, OpenAI API, ChromaDB & Streamlit</span>
        </div>

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all hover:scale-[1.02]"
        >
          <span>Deep Dive: Full Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
