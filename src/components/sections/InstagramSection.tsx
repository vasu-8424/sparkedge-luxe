import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="glass-strong rounded-[2.5rem] overflow-hidden p-10 lg:p-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.24_258/0.25),transparent_60%)]" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
                <Instagram className="h-3.5 w-3.5" /> @sparkedge
              </div>
              <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1]">
                Follow the <span className="text-gradient-brand">transformation</span>.
              </h2>
              <p className="mt-6 text-lg text-white/70 max-w-md">
                Daily before-and-afters, behind-the-scenes, and client stories — straight from our crews.
              </p>
            </div>

            <div className="relative h-[480px]">
              {/* Floating Instagram mockup cards */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute glass-strong rounded-3xl overflow-hidden shadow-elegant"
                  style={{
                    width: 220,
                    height: 280,
                    top: `${i * 40}px`,
                    left: `${i * 80 + 40}px`,
                    zIndex: 3 - i,
                  }}
                >
                  <div className="h-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.4),oklch(0.72_0.19_152/0.4))] flex flex-col">
                    <div className="flex items-center gap-2 p-3 border-b border-white/10">
                      <div className="h-7 w-7 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]" />
                      <div className="text-xs font-semibold text-white">sparkedge</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-5xl">
                      {["✨", "🧽", "💎"][i]}
                    </div>
                    <div className="p-3 text-xs text-white/70">
                      {["Marble restoration", "Deep kitchen detail", "Spotless handover"][i]}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* QR-style decorative element */}
              <div className="absolute bottom-0 right-0 h-32 w-32 glass-strong rounded-2xl p-3 grid grid-cols-8 gap-[2px]">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-[1px] ${
                      [0, 1, 6, 7, 8, 15, 48, 55, 56, 57, 62, 63].includes(i) || Math.random() > 0.6
                        ? "bg-white"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
