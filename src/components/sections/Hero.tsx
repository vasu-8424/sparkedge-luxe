import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "100+", label: "Professional Staff" },
];

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const },
  }),
};

const headline = [
  ["CLEAN", "SPACES."],
  ["HEALTHIER", "LIVING."],
  ["BETTER", "IMPRESSIONS."],
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury interior being professionally cleaned by SparkEdge team"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.04_0.02_258/0.7)_80%)]" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Light rays */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
        <div className="absolute -top-1/2 left-1/4 h-[150%] w-[2px] rotate-12 bg-gradient-to-b from-transparent via-electric to-transparent blur-sm" />
        <div className="absolute -top-1/2 right-1/3 h-[150%] w-[2px] -rotate-12 bg-gradient-to-b from-transparent via-emerald to-transparent blur-sm" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 pt-32 pb-12 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-widest uppercase text-white/80"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald" />
          Professional Deep Cleaning & Housekeeping
        </motion.div>

        {/* Headline */}
        <div className="mt-12 w-full lg:max-w-[80%]">
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[7.5vw] font-bold leading-[0.95] tracking-[-0.04em] text-white">
            {headline.map((line, li) => (
              <div key={li} className="overflow-hidden">
                <div className="flex flex-wrap gap-x-[0.25em]">
                  {line.map((w, wi) => (
                    <motion.span
                      key={wi}
                      variants={word}
                      initial="hidden"
                      animate="visible"
                      custom={li * 2 + wi}
                      className={`inline-block ${li === 2 ? "text-gradient" : ""}`}
                    >
                      {w}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            SparkEdge engineers spotless environments for the world's most discerning homes,
            offices and facilities — backed by certified teams and precision equipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto justify-center text-base"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Service
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto justify-center text-base"
              onClick={() => window.open("https://wa.me/918555877790", "_blank")}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              WhatsApp Now
            </Button>
          </motion.div>
        </div>

        {/* Floating metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              whileHover={{ y: -6, rotateX: 8, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-strong rounded-2xl p-5 lg:p-6 animate-float"
            >
              <div
                className="text-3xl lg:text-4xl font-bold tracking-tight text-gradient"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {m.value}
              </div>
              <div className="mt-1 text-xs lg:text-sm text-white/60 uppercase tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/50"
      >
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}
