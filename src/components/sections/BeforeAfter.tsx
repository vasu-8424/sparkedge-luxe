import { motion } from "framer-motion";
import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="work" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            Before / After
          </div>
          <h2 className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white">
            Watch the <span className="text-gradient-brand">transformation</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          ref={ref}
          onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant cursor-ew-resize select-none touch-none"
          onPointerDown={(e) => onMove(e.clientX)}
        >
          <img src={afterImg} alt="After cleaning" width={1280} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img src={beforeImg} alt="Before cleaning" width={1280} height={800} loading="lazy" className="h-full w-full object-cover" />
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 glass-strong rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white">
            Before
          </div>
          <div className="absolute top-6 right-6 glass-strong rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white">
            After
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-glow"
            style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white text-slate-ink flex items-center justify-center shadow-elegant">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 6L2 12L8 18M16 6L22 12L16 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
