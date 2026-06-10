import { motion } from "framer-motion";
import { Shield, Sparkles, FlaskConical, Eye, Clock } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Trained & Professional Team", desc: "Vetted, background-checked, and extensively trained specialists on every project." },
  { icon: Sparkles, title: "Advanced Cleaning Equipment", desc: "Industrial-grade machinery and precision tools for superior deep cleaning." },
  { icon: FlaskConical, title: "Premium Cleaning Chemicals", desc: "Eco-friendly, surface-safe, and highly effective professional-grade formulas." },
  { icon: Eye, title: "Visible Transformation", desc: "Dramatic, satisfying, and visible before-and-after differences with every service." },
  { icon: Clock, title: "Reliable Service", desc: "On-time arrival, systematic execution, and consistent premium quality every single time." },
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
            Why Choose SparkEdge?
          </div>
          <h2 className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white">
            The standard, <span className="text-gradient-brand">elevated</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.4),oklch(0.72_0.19_152/0.4))] -z-10 blur-xl" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.2),oklch(0.72_0.19_152/0.2))] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <r.icon className="h-6 w-6 text-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">{r.title}</h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
