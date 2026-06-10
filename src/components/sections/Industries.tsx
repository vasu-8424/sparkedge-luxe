import { motion } from "framer-motion";
import { clientLogosList } from "@/components/ClientLogos";

const industryBullets = [
  "Apartments, Villas & Gated Communities",
  "Offices & Commercial Buildings",
  "Hospitals & Clinics",
  "Educational Institutions",
  "Retail Stores & Showrooms",
  "Construction & Interior Projects"
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Top Split Layout: Industries list & QR Code booking card */}
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 6 Industry Bullet Points */}
          <div className="lg:col-span-7 space-y-8">
            <div>
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
                className="mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white max-w-2xl"
              >
                Trusted across <span className="text-gradient-brand">every sector</span>.
              </motion.h2>
            </div>

            {/* Bullet Points Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {industryBullets.map((bullet, i) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3.5 glass p-4.5 rounded-2xl border border-white/5 hover:border-emerald/20 transition-all duration-300"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-glow shrink-0" />
                  <span className="text-white/85 font-semibold text-sm tracking-wide leading-relaxed">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Green "Book Your Service Today..." Card with SVG QR code */}
          <div className="lg:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass bg-[#10B981]/10 border-emerald/20 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center relative overflow-hidden h-full min-h-[420px] group shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/15 to-transparent -z-10" />
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-emerald/30 blur-2xl group-hover:bg-emerald/40 transition-colors" />

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-[10px] uppercase tracking-[0.25em] text-emerald font-black mb-5">// Scan to explore</div>
                
                {/* SVG QR Code */}
                <div className="bg-white p-4.5 rounded-[2rem] shadow-glow mb-6 group-hover:scale-105 transition-transform duration-500 shrink-0">
                  <svg className="h-32 w-32 text-black" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="0" y="0" width="25" height="25" />
                    <rect x="3" y="3" width="19" height="19" fill="white" />
                    <rect x="6" y="6" width="13" height="13" />

                    <rect x="75" y="0" width="25" height="25" />
                    <rect x="78" y="3" width="19" height="19" fill="white" />
                    <rect x="81" y="6" width="13" height="13" />

                    <rect x="0" y="75" width="25" height="25" />
                    <rect x="3" y="78" width="19" height="19" fill="white" />
                    <rect x="6" y="81" width="13" height="13" />

                    <rect x="35" y="5" width="5" height="15" />
                    <rect x="45" y="0" width="10" height="5" />
                    <rect x="40" y="20" width="15" height="5" />
                    <rect x="60" y="10" width="5" height="10" />
                    <rect x="5" y="35" width="15" height="5" />
                    <rect x="25" y="30" width="5" height="15" />
                    <rect x="15" y="50" width="20" height="5" />
                    <rect x="0" y="60" width="5" height="10" />
                    <rect x="30" y="45" width="5" height="5" />
                    <rect x="45" y="30" width="10" height="10" />
                    <rect x="60" y="35" width="5" height="15" />
                    <rect x="35" y="60" width="10" height="5" />
                    <rect x="50" y="55" width="5" height="20" />
                    <rect x="60" y="65" width="15" height="5" />
                    <rect x="40" y="80" width="15" height="5" />
                    <rect x="30" y="90" width="20" height="5" />
                    <rect x="65" y="80" width="5" height="15" />
                    <rect x="80" y="35" width="15" height="5" />
                    <rect x="90" y="45" width="10" height="10" />
                    <rect x="80" y="60" width="5" height="10" />
                    <rect x="90" y="80" width="10" height="5" />
                  </svg>
                </div>

                <h4 className="text-3xl font-black text-white leading-tight tracking-tight mb-2">
                  Book Your Service Today
                </h4>
                <p className="text-emerald/80 text-sm font-semibold tracking-wide">
                  Quick on-site inspection booking
                </p>
              </div>

              {/* Scroll down trigger arrow */}
              <motion.button
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 h-12 w-12 rounded-full bg-emerald text-white flex items-center justify-center cursor-pointer shadow-glow hover:scale-110 transition-all shrink-0 border-0 outline-none"
                aria-label="Scroll to booking"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Brand Logos Train */}
      <div className="mt-28 border-t border-white/5 pt-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Our Clients</div>
          <h3 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
            Brands that demand <span className="text-gradient-brand">precision</span>
          </h3>
        </div>

        <div 
          className="relative overflow-hidden w-full py-4" 
          style={{ 
            maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div 
            className="flex gap-10 w-max items-center hover:[animation-play-state:paused]"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {[...clientLogosList, ...clientLogosList, ...clientLogosList].map((client, i) => (
              <div
                key={i}
                className="glass-strong rounded-2xl px-8 py-5 shrink-0 hover:shadow-glow hover:bg-white/5 transition-all duration-500 flex items-center justify-center min-w-[200px] h-20"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Footer Info Banner (Flyer Bottom Segment) */}
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[linear-gradient(135deg,oklch(0.42_0.22_263),oklch(0.58_0.24_258))] border border-electric/30 py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent -z-10" />
          
          {/* Location */}
          <div className="flex items-center gap-3.5 text-white">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <svg className="h-5 w-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-wide">Vizag, Andhra Pradesh</span>
          </div>

          {/* Phone Link */}
          <a 
            href="tel:8555877790" 
            className="flex items-center gap-3.5 text-white hover:text-emerald transition-colors group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
              <svg className="h-5 w-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-wide">85558 77790</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
