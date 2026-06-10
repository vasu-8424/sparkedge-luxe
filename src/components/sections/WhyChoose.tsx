import { motion } from "framer-motion";
import { Shield, Sparkles, FlaskConical, Clock, Eye, Heart } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Professional Team", desc: "Vetted, trained, and certified specialists on every job." },
  { icon: Sparkles, title: "Advanced Equipment", desc: "Industrial-grade machinery for unmatched results." },
  { icon: FlaskConical, title: "Premium Chemicals", desc: "Eco-friendly, safe, and surface-specific formulas." },
  { icon: Clock, title: "Reliable Service", desc: "On-time arrival. Predictable delivery. Every time." },
  { icon: Eye, title: "Visible Transformation", desc: "Dramatic before-and-after, every single visit." },
  { icon: Heart, title: "Customer Satisfaction", desc: "98% rating across 500+ delivered projects." },
];

export function WhyChoose() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <div className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            Why SparkEdge
          </div>
          <h2 className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white">
            The standard, <span className="text-gradient-brand">elevated</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.4),oklch(0.72_0.19_152/0.4))] -z-10 blur-xl" />
              <div className="h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.2),oklch(0.72_0.19_152/0.2))] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <r.icon className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">{r.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
