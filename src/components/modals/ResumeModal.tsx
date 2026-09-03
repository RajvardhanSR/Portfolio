import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';
import { LinkedinIcon } from '../ui/LinkedinIcon';
import { personalInfo, education, experience, projects, skillCategories, certifications } from '../../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity print:hidden"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0c14] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto z-10 text-neutral-200 print:max-h-none print:w-full print:border-none print:rounded-none print:bg-white print:text-black">
        {/* Sticky Actions Bar */}
        <div className="sticky top-0 z-20 bg-[#0c0c14]/95 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-white/10 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-neutral-300">
              OFFICIAL RESUME • SINGLE SOURCE OF TRUTH
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-8 sm:p-12 space-y-8 font-sans print:p-6">
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10 print:border-neutral-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black mb-2">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400 print:text-neutral-600 font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-sky-400 hover:underline print:text-blue-600">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline print:text-blue-600">
                {personalInfo.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-2 print:text-blue-800">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-3 print:text-blue-800">
              EDUCATION
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-white print:text-black">
                    {education[0].degree}
                  </div>
                  <div className="text-neutral-400 print:text-neutral-700">
                    {education[0].institution}, {education[0].location}
                  </div>
                  <div className="text-neutral-400 print:text-neutral-700 text-xs mt-0.5">
                    CGPA: {education[0].cgpa}
                  </div>
                </div>
                <div className="font-mono text-neutral-400 print:text-neutral-700 text-right">
                  {education[0].year}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-white print:text-black">
                    {education[1].degree}
                  </div>
                  <div className="text-neutral-400 print:text-neutral-700">
                    {education[1].institution}, {education[1].location}
                  </div>
                </div>
                <div className="font-mono text-neutral-400 print:text-neutral-700">
                  {education[1].year}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-3 print:text-blue-800">
              EXPERIENCE
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white print:text-black">{experience[0].role}</span>,{' '}
                  <span className="text-neutral-300 print:text-neutral-800">{experience[0].company}</span>,{' '}
                  <span className="text-neutral-400 print:text-neutral-600">{experience[0].location}</span>
                </div>
                <div className="font-mono text-neutral-400 print:text-neutral-700 text-right">
                  {experience[0].period}
                </div>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-neutral-300 print:text-neutral-800 text-xs leading-relaxed">
                {experience[0].details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-3 print:text-blue-800">
              PROJECTS
            </h2>
            <div className="space-y-5 text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-white print:text-black">
                      {proj.title} <span className="font-normal text-neutral-400 print:text-neutral-600">— {proj.subtitle}</span>
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-sky-300 print:text-blue-700">
                    {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-300 print:text-neutral-800 text-xs leading-relaxed">
                    {proj.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-3 print:text-blue-800">
              SKILLS
            </h2>
            <div className="space-y-2 text-xs">
              {skillCategories.map((sc) => (
                <div key={sc.category} className="text-neutral-300 print:text-neutral-800 leading-relaxed">
                  <strong className="text-white print:text-black font-semibold">• {sc.category}:</strong>{' '}
                  {sc.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-3 print:text-blue-800">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-300 print:text-neutral-800">
              {certifications.map((c, i) => (
                <li key={i}>
                  {c.inProgress ? (
                    <span>
                      <strong>In progress:</strong> {c.title}
                    </span>
                  ) : (
                    <span>
                      {c.title} {c.issuer ? `— ${c.issuer}` : ''} {c.period ? `(${c.period})` : ''}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-black/40 border-t border-white/10 flex items-center justify-between print:hidden">
          <span className="text-[11px] font-mono text-neutral-500">
            Source document: Rajvardhan_Resume.pdf
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
