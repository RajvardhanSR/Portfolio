import React from 'react';
import { Award, CheckCircle2, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/resumeData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          06 // CREDENTIALS & INDUSTRY CERTIFICATIONS
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-gradient-white">VERIFIED</span>{' '}
          <span className="text-gradient-blue">CREDENTIALS.</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-light">
          Targeted industry qualifications across Big Data, Machine Learning, Time Series, and Cloud AI.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
              cert.inProgress
                ? 'bg-sky-950/20 border-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.15)] relative overflow-hidden'
                : 'bg-[#0a0a12]/80 border-white/[0.08] hover:border-white/20'
            }`}
          >
            {cert.inProgress && (
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/20 rounded-full blur-xl pointer-events-none" />
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    cert.inProgress
                      ? 'bg-sky-500/20 text-sky-300'
                      : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>

                {cert.inProgress ? (
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/50 text-sky-300 text-[10px] font-mono font-bold tracking-wider animate-pulse">
                    <Clock className="w-3 h-3" />
                    <span>IN PROGRESS</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>COMPLETED</span>
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-2">
                {cert.title}
              </h3>

              {cert.issuer && (
                <div className="text-xs text-neutral-400 font-medium">
                  {cert.issuer}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>{cert.period || 'Resume Verified'}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
