import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SparkEdge transformed our 40-floor tower's daily upkeep. The consistency is unreal.",
    name: "Aravind Reddy",
    role: "Facility Director, Crescent Towers",
    rating: 5,
  },
  {
    quote: "We've worked with three vendors. None come close to SparkEdge's attention to detail.",
    name: "Priya Menon",
    role: "Operations Head, Meridian Hospitals",
    rating: 5,
  },
  {
    quote: "Post-construction handover used to take a week. Now it's 36 hours, every time.",
    name: "Rohit Sharma",
    role: "Project Manager, Vega Realty",
    rating: 5,
  },
];

export function Clients() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">Testimonials</div>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white tracking-tight">
            What our clients <span className="text-gradient-brand">say</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-electric/20 group-hover:text-electric/40 transition-colors" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-emerald text-emerald" />
                ))}
              </div>
              <p className="text-lg text-white leading-relaxed">"{t.quote}"</p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-white/60">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
