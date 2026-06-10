import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const industries = [
  { name: "Apartments", emoji: "🏢" },
  { name: "Villas", emoji: "🏡" },
  { name: "Gated Communities", emoji: "🏘️" },
  { name: "Offices", emoji: "💼" },
  { name: "Hospitals", emoji: "🏥" },
  { name: "Educational Institutions", emoji: "🎓" },
  { name: "Retail Stores", emoji: "🛍️" },
  { name: "Commercial Buildings", emoji: "🏬" },
  { name: "Construction Projects", emoji: "🏗️" },
];

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section id="industries" ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70"
        >
          Industries We Serve
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white max-w-3xl"
        >
          Trusted across <span className="text-gradient-brand">every sector</span>.
        </motion.h2>
      </div>

      <motion.div style={{ x }} className="flex gap-6 will-change-transform">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className="relative shrink-0 w-[420px] h-[520px] rounded-3xl overflow-hidden glass-strong group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.15),oklch(0.72_0.19_152/0.15))] group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative h-full flex flex-col justify-between p-10">
              <div className="text-7xl filter drop-shadow-[0_0_30px_oklch(0.58_0.24_258/0.5)]">
                {ind.emoji}
              </div>
              <div>
                <div className="text-xs text-white/50 mb-2">/ {String(i + 1).padStart(2, "0")}</div>
                <div className="text-4xl font-bold text-white tracking-tight">{ind.name}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
