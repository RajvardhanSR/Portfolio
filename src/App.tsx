import React, { useState } from 'react';
import { NeuralScene } from './components/canvas/NeuralScene';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { Project } from './types/portfolio';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f5f5f7] overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-200">
      {/* 3D WebGL Neural Background Canvas */}
      <NeuralScene />

      {/* Foreground Site Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <FeaturedProjects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Full-Screen Project Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Complete Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
