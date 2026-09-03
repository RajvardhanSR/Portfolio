import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { LinkedinIcon } from '../ui/LinkedinIcon';
import { personalInfo } from '../../data/resumeData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" className="relative py-32 sm:py-44 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
          07 // COLLABORATION & RECRUITMENT
        </span>
        <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-4xl mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[0.95] mb-8">
          <span className="block text-gradient-white">LET&apos;S BUILD</span>
          <span className="block text-gradient-blue">SOMETHING</span>
          <span className="block text-neutral-400/90 font-light">INTELLIGENT.</span>
        </h2>
        <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
          Open to full-time engineering and research roles across Machine Learning, Data Science, and Agentic AI systems.
        </p>
      </div>

      {/* Main Dramatic CTA & Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        {/* Big CTA Card */}
        <div className="md:col-span-7 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12121e] to-[#07070d] border border-sky-500/30 flex flex-col justify-between shadow-[0_0_60px_-15px_rgba(56,189,248,0.2)]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT INQUIRY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Initiate a Technical Discussion
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Whether you are hiring for full-time roles, evaluating agentic RAG architectures, or reviewing production ML deployments, I would love to connect.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}?subject=Technical Inquiry - Rajvardhan Singh Rathore`}
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="inline-flex items-center space-x-2 px-5 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all"
            >
              {copied === 'email' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Coordinates Cards */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-4">
          {/* Email */}
          <div className="p-6 rounded-2xl bg-[#090910]/80 border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">EMAIL</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email_card')}
              className="p-2 text-neutral-400 hover:text-white"
              title="Copy Email"
            >
              {copied === 'email_card' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn */}
          <div className="p-6 rounded-2xl bg-[#090910]/80 border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">LINKEDIN</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 transition-colors truncate max-w-[200px] block"
                >
                  rajvardhan-singh-rathore
                </a>
              </div>
            </div>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white"
              title="Visit LinkedIn"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-[#090910]/80 border border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">PHONE</span>
                <span className="text-xs sm:text-sm font-mono text-white">
                  {personalInfo.phone}
                </span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-2 text-neutral-400 hover:text-white"
              title="Copy Phone"
            >
              {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-400 font-mono">
              {personalInfo.location} • Bennett University
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
