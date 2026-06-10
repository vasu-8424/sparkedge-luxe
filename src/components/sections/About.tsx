import { motion } from "framer-motion";
import { Shield, Settings, CheckCircle, Sparkles, Award } from "lucide-react";
import about from "@/assets/about-team.jpg";

const formulaOutcomes = [
  "Superior Cleaning Quality",
  "Enhanced Hygiene Standards",
  "Faster Service Execution",
  "Complete Customer Satisfaction",
];

const pillars = [
  {
    title: "MAN",
    icon: Shield,
    desc: "Trained, certified, and vetted professionals dedicated to pristine results.",
    color: "from-emerald/20 to-emerald/5",
    iconColor: "text-emerald",
  },
  {
    title: "MACHINERY",
    icon: Settings,
    desc: "Industrial-grade, advanced machinery engineered for deep cleaning restoration.",
    color: "from-electric/20 to-electric/5",
    iconColor: "text-electric",
  },
  {
    title: "METHOD",
    icon: CheckCircle,
    desc: "Systematic, scientific cleaning methods ensuring maximum hygiene and surface care.",
    color: "from-purple/20 to-purple/5",
    iconColor: "text-purple-400",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* Top Split Layout: About SparkEdge */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: story */}
          <div className="lg:col-span-7">
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
              Trusted professional <span className="text-gradient-brand">cleaning & housekeeping</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed max-w-2xl"
            >
              <p>
                SparkEdge Cleaning is a trusted professional cleaning and housekeeping company based in Visakhapatnam,
                dedicated to delivering exceptional cleaning solutions for residential, commercial, and institutional spaces.
              </p>
              <p>
                With a combination of trained manpower, advanced machinery, premium cleaning chemicals, and systematic
                cleaning methods, we ensure every project is completed to the highest standards of cleanliness and hygiene.
              </p>
            </motion.div>
          </div>

          {/* Right: asymmetrical image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant border border-white/10">
              <img
                src={about}
                alt="SparkEdge professional cleaning team at work"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>

            {/* Floating ISO Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -left-4 glass-strong rounded-2xl p-4 shadow-card max-w-[200px]"
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
          </motion.div>
        </div>

        {/* Bottom Section: Man x Machinery x Method Formula */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-emerald"
            >
              Man × Machinery × Method
            </motion.div>
            <h3 className="mt-6 text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our proven formula helps us deliver excellence
            </h3>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500`}
              >
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl`} />
                <div className={`h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <p.icon className={`h-6 w-6 ${p.iconColor}`} />
                </div>
                <h4 className="text-2xl font-black text-white tracking-wider">{p.title}</h4>
                <p className="mt-3 text-white/70 leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes checklist */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
            {formulaOutcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 glass px-6 py-4 rounded-2xl border border-white/5 hover:border-emerald/30 transition-all duration-300"
              >
                <div className="h-5 w-5 rounded-full bg-emerald/10 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-emerald" />
                </div>
                <span className="text-sm font-semibold text-white/95">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
