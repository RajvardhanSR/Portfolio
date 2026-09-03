import React from 'react';
import { Cpu, Database, Network, Cloud, RefreshCw, CheckCircle2, Layers } from 'lucide-react';
import { personalInfo } from '../../data/resumeData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Network,
      title: "Agentic AI & Self-Correcting RAG",
      description:
        "Designing autonomous multi-step pipelines with sufficiency checks, dynamic query reformulation, groundedness scoring, and capped retries to eliminate hallucinations."
    },
    {
      icon: Cpu,
      title: "Machine Learning & Explainability",
      description:
        "Training and benchmarking Scikit-learn predictive models paired with natural language explanation layers (GPT-2) so non-technical stakeholders understand predictions."
    },
    {
      icon: Database,
      title: "Data Science & Stream Analytics",
      description:
        "Executing systematic data cleaning in Pandas, exploratory feature analysis, and real-time streaming anomaly detection using statistical thresholding."
    },
    {
      icon: Cloud,
      title: "Backend, Cloud & MLOps",
      description:
        "Serving real-time inferences with FastAPI microservices, containerizing reproducible environments via Docker, and deploying on AWS EC2 with S3 artifact storage."
    }
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow label */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          01 // PHILOSOPHY & ARCHITECTURE
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      {/* Heroic Apple-style Headline */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
          <span className="text-gradient-white">I BUILD</span>{' '}
          <span className="text-gradient-blue">INTELLIGENT SYSTEMS.</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
          From raw, unstructured data and model experimentation to resilient API endpoints and self-correcting agentic architectures deployed on the cloud.
        </p>
      </div>

      {/* Storytelling Narrative Paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            As a final-year B.Tech CSE (Data Science) student at <strong className="text-white font-semibold">Bennett University</strong>, my engineering practice focuses on closing the gap between raw data processing and production-ready machine learning.
          </p>
          <p>
            Rather than stopping at static notebooks, I build full-stack ML workflows: cleaning structured datasets in <span className="text-sky-300 font-mono text-sm">Pandas</span>, isolating predictive features through rigorous EDA, and packaging models into sub-second <span className="text-sky-300 font-mono text-sm">FastAPI</span> microservices containerized with <span className="text-sky-300 font-mono text-sm">Docker</span> and deployed on <span className="text-sky-300 font-mono text-sm">AWS</span>.
          </p>
          <p>
            Recently, my work has pushed beyond standard single-pass retrieval into <strong className="text-white font-medium">Agentic RAG</strong> — architecting self-evaluating loops that benchmark retrieval sufficiency, reformulate ambiguous queries across dense regulatory circulars, and enforce graceful fallbacks against hallucination.
          </p>
        </div>

        {/* Quick Highlights Card */}
        <div className="md:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 tracking-wider mb-4">
              <Layers className="w-4 h-4" />
              <span>CORE SPECIALIZATIONS</span>
            </div>
            <div className="space-y-3">
              {[
                "Self-Correcting Agentic RAG Systems",
                "Full-Lifecycle Machine Learning (Scikit-learn)",
                "Explainable AI (GPT-2 Rationale Generation)",
                "Stream Telemetry & Statistical Thresholding",
                "Production Microservices (FastAPI + Docker)",
                "Cloud Storage & Compute (AWS EC2 & S3)"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span>Bennett University • CGPA {personalInfo.cgpa}</span>
            <span className="text-emerald-400 font-mono">Expected 2027</span>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-[#0b0b12]/70 border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 hover:bg-[#10101a] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:border-sky-500/40 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-2 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                <RefreshCw className="w-3 h-3 text-neutral-500" />
                <span>Verified in production projects</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
