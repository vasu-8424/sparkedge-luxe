import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Users, Building2, Calendar } from "lucide-react";
import about from "@/assets/about-team.jpg";

const stats = [
  { icon: Calendar, value: 12, suffix: "+", label: "Years of Experience" },
  { icon: Award, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Building2, value: 80, suffix: "+", label: "Corporate Clients" },
  { icon: Users, value: 100, suffix: "+", label: "Team Members" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = Math.max(1, Math.ceil(to / 60));
    const id = setInterval(() => {
      s += step;
      if (s >= to) {
        setN(to);
        clearInterval(id);
      } else setN(s);
    }, 25);
    return () => clearInterval(id);
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
}

const timeline = [
  { year: "2012", text: "SparkEdge founded in Visakhapatnam" },
  { year: "2016", text: "Expanded into corporate facility management" },
  { year: "2020", text: "Launched advanced floor scrubbing division" },
  { year: "2024", text: "100+ certified team members serving the coast" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: asymmetrical image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={about}
                alt="SparkEdge professional cleaning team"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating trust badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -right-4 lg:-right-12 glass-strong rounded-2xl p-4 shadow-card max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">ISO Certified</div>
                  <div className="text-xs text-white/60">Quality Standards</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-4 lg:-left-12 glass-strong rounded-2xl p-4 shadow-card"
            >
              <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Live</div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-sm font-semibold text-white">
                  12 teams on duty
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: story */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70"
            >
              About SparkEdge
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white"
            >
              Engineered for <span className="text-gradient-brand">spotless</span>.
              Designed for trust.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl"
            >
              We're not a cleaning company. We're a precision facility partner — combining
              certified teams, proprietary processes, and the most advanced equipment to
              deliver environments that look, feel, and perform at their best.
            </motion.p>

            {/* Animated counters */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <s.icon className="h-5 w-5 text-emerald mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    <Counter to={s.value} />
                    {s.suffix}
                  </div>
                  <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-12 relative pl-6 border-l border-white/10 space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-glow" />
                  <div className="text-sm font-semibold text-electric">{t.year}</div>
                  <div className="text-white/80">{t.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
