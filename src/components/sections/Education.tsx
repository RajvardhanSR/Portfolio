import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Building2 } from 'lucide-react';
import { education } from '../../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          05 // ACADEMIC FOUNDATIONS
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-gradient-white">EDUCATION &</span>{' '}
          <span className="text-gradient-blue">ACADEMICS.</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-light">
          Formal training in Computer Science, Data Science, and Quantitative Reasoning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main University Card */}
        <div className="md:col-span-7 p-8 rounded-3xl bg-[#0a0a13]/80 border border-white/[0.08] hover:border-sky-500/30 transition-all backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-sky-400">
                <GraduationCap className="w-4 h-4" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-mono">
                {education[0].year}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              {education[0].degree}
            </h3>
            <div className="text-lg text-neutral-300 font-medium mb-4 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-neutral-400" />
              <span>{education[0].institution}</span>
            </div>

            <div className="flex items-center space-x-2 text-xs text-neutral-400 mb-6">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{education[0].location}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono text-neutral-400">CUMULATIVE GPA</span>
            </div>
            <span className="text-xl font-bold font-mono text-white bg-white/10 px-3 py-1 rounded-xl border border-white/10">
              {education[0].cgpa}
            </span>
          </div>
        </div>

        {/* High School Card */}
        <div className="md:col-span-5 p-8 rounded-3xl bg-[#0a0a13]/80 border border-white/[0.08] hover:border-white/20 transition-all backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                <GraduationCap className="w-4 h-4" />
                <span>SECONDARY EDUCATION</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono">
                {education[1].year}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              {education[1].degree}
            </h3>
            <div className="text-base text-neutral-300 font-medium mb-4 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-neutral-400" />
              <span>{education[1].institution}</span>
            </div>

            <div className="flex items-center space-x-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{education[1].location}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500">DISCIPLINE</span>
            <span className="text-xs font-mono text-neutral-300">
              Physics, Chemistry, Math
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
