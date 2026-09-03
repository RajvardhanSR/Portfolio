import React, { useState, useEffect, useRef } from 'react';
import { Activity, AlertTriangle, CheckCircle, Database, Server, ArrowRight } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface AnomalyShowcaseProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const AnomalyShowcase: React.FC<AnomalyShowcaseProps> = ({ project, onOpenCaseStudy }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSpikeCount, setActiveSpikeCount] = useState<number>(3);
  const [filterMode, setFilterMode] = useState<'statistical' | 'ruleBased'>('statistical');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dataPoints: number[] = Array.from({ length: 40 }, () => 35 + Math.random() * 15);

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new data point every 6 frames
      if (frame % 6 === 0) {
        // Occasional spike
        const isSpike = Math.random() < 0.08;
        const val = isSpike ? 80 + Math.random() * 18 : 30 + Math.random() * 20;
        dataPoints.shift();
        dataPoints.push(val);
      }

      const w = canvas.width;
      const h = canvas.height;
      const step = w / (dataPoints.length - 1);

      // Draw threshold line
      const thresholdY = h * (1 - 70 / 100);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, thresholdY);
      ctx.lineTo(w, thresholdY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw gradient area under curve
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let i = 0; i < dataPoints.length; i++) {
        const x = i * step;
        const y = h - (dataPoints[i] / 100) * (h * 0.85);
        if (i === 0) ctx.lineTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw primary waveform line
      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      for (let i = 0; i < dataPoints.length; i++) {
        const x = i * step;
        const y = h - (dataPoints[i] / 100) * (h * 0.85);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw point markers, highlighting anomalies
      for (let i = 0; i < dataPoints.length; i++) {
        const x = i * step;
        const y = h - (dataPoints[i] / 100) * (h * 0.85);
        if (dataPoints[i] > 70) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(x, y, 4.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, 9, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0b0c14] via-[#08080f] to-[#040407] border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PROJECT // 03</span>
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

      {/* Real-time Streaming Visualizer */}
      <div className="my-8 p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-neutral-300">
            <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>REAL-TIME TELEMETRY STREAM VISUALIZER</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFilterMode('statistical')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filterMode === 'statistical'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              Statistical Thresholding (Low False Positives)
            </button>
            <button
              onClick={() => setFilterMode('ruleBased')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filterMode === 'ruleBased'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              Simple Rule-Based
            </button>
          </div>
        </div>

        {/* Live Canvas Waveform */}
        <div className="relative w-full h-44 rounded-xl bg-[#06060c] border border-white/5 overflow-hidden flex items-center">
          <canvas
            ref={canvasRef}
            width={700}
            height={176}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 flex items-center space-x-2 px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[10px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
            <span>Threshold: &gt; 3σ Spike Marker</span>
          </div>
        </div>

        {/* Pipeline Architecture Row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <Server className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Node.js Stream Ingestion</div>
              <div className="text-neutral-400 text-[11px] mt-1">
                Continuous socket event processing with low latency buffer
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Pandas & NumPy Computation</div>
              <div className="text-neutral-400 text-[11px] mt-1">
                Statistical thresholding over rolling windows to eliminate noise
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <Database className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">MySQL Analytics Layer</div>
              <div className="text-neutral-400 text-[11px] mt-1">
                Tuned queries & indexing for high-throughput continuous flow
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-neutral-400">
          Engineered with <span className="text-white font-medium">Python, Pandas, NumPy, Seaborn, Node.js & MySQL</span>
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
