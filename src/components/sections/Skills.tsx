import React, { useState } from 'react';
import { Terminal, Database, Cpu, Cloud, Sparkles, Check, Search } from 'lucide-react';
import { skillCategories } from '../../data/resumeData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const categoryIcons: Record<string, React.ElementType> = {
    'Languages & Databases': Terminal,
    'ML / Data': Database,
    'Agentic AI / GenAI': Sparkles,
    'Deployment & Tooling': Cloud,
  };

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ name: s, category: cat.category }))
  );

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          04 // TECHNICAL TAXONOMY
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="text-gradient-white">ENGINEERED</span>{' '}
            <span className="text-gradient-blue">CAPABILITIES.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Strictly classified according to verified resume competencies across full-stack intelligent systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-white/[0.05] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Visual Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {skillCategories
          .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
          .map((cat) => {
            const Icon = categoryIcons[cat.category] || Terminal;
            return (
              <div
                key={cat.category}
                className="group p-8 rounded-3xl bg-[#0a0a12]/80 border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      {cat.skills.length} Items
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => {
                      const isHovered = hoveredSkill === skill;
                      return (
                        <div
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group/badge cursor-default px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                            isHovered
                              ? 'bg-sky-500/20 border-sky-400 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)] scale-105'
                              : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <span className="mr-1.5 text-sky-400 opacity-60 group-hover/badge:opacity-100">#</span>
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>RESUME VERIFIED</span>
                  <span className="text-sky-400/80">Single Source of Truth</span>
                </div>
              </div>
            );
          })}
      </div>

      {/* Interactive Constellation / Node Network Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-950/20 via-black/40 to-violet-950/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
          <span className="text-xs font-mono text-neutral-300">
            Systems Architecture: Python ⇄ Scikit-learn ⇄ FastAPI ⇄ Docker ⇄ AWS EC2/S3 ⇄ ChromaDB Agentic RAG
          </span>
        </div>
        <div className="text-xs font-mono text-sky-400 font-semibold shrink-0">
          ALL 21 RESUME SKILLS ACTIVE
        </div>
      </div>
    </section>
  );
};
