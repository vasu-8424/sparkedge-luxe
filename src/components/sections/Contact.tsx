import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70"
            >
              Contact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1]"
            >
              Let's talk <span className="text-gradient-brand">clean</span>.
            </motion.h2>
            <p className="mt-6 text-lg text-white/70 max-w-md">
              Reach out for a free on-site inspection. We respond within 2 hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Call us", value: "85558 77790", href: "tel:8555877790" },
                { icon: Mail, label: "Email", value: "info@sparkedge.in", href: "mailto:info@sparkedge.in" },
                { icon: MapPin, label: "Visit", value: "Visakhapatnam, AP", href: "#map" },
              ].map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.2),oklch(0.72_0.19_152/0.2))] border border-white/10 flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-white/50">{c.label}</div>
                    <div className="text-lg font-medium text-white">{c.value}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Interactive map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden glass-strong shadow-elegant"
            id="map"
          >
            {/* Stylized map */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.16_0.04_258)_0%,oklch(0.04_0.02_258)_100%)]">
              <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 400">
                <defs>
                  <pattern id="grid-map" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.7 0.2 258)" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid-map)" />
                <path d="M 50 200 Q 150 100 250 200 T 400 180" stroke="oklch(0.58 0.24 258)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 0 250 Q 100 220 200 280 T 400 260" stroke="oklch(0.72 0.19 152)" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 100 0 Q 120 150 100 300 T 80 400" stroke="oklch(0.58 0.24 258)" strokeWidth="1.5" fill="none" opacity="0.4" />
              </svg>
            </div>

            {/* Animated marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-emerald"
                />
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-electric"
                />
                <div className="relative h-6 w-6 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-glow" />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-emerald mb-1">Headquarters</div>
              <div className="text-xl font-bold text-white">Visakhapatnam, Andhra Pradesh</div>
              <div className="text-sm text-white/60 mt-1">Serving the entire coastal region</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
