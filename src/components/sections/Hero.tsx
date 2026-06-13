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
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.067 5.248 5.303 0 11.771 0c3.133.001 6.077 1.221 8.291 3.437 2.213 2.216 3.431 5.159 3.43 8.293-.005 6.485-5.24 11.733-11.71 11.733-2.002-.001-3.973-.513-5.729-1.488L0 24zm6.47-4.249c1.657.982 3.279 1.5 5.234 1.501 5.374 0 9.743-4.321 9.746-9.63.001-2.572-1.002-4.99-2.825-6.814C16.858 2.984 14.444 1.981 11.85 1.98 6.48 1.98 2.11 6.301 2.107 11.613c0 1.906.496 3.768 1.439 5.413l-.994 3.633 3.505-.929zM17.5 15.352c-.314-.157-1.856-.916-2.144-1.021-.288-.105-.499-.157-.708.157-.21.314-.812 1.021-.994 1.23-.183.21-.365.236-.679.079-1.4-.7-2.42-1.221-3.41-2.918-.26-.445.26-.413.74-.1.431.815.115 1.378.115 1.378-.115-.288-.916-2.202-.916-2.202-.314-.755-.633-.654-.868-.667-.226-.013-.485-.015-.744-.015s-.679.097-1.034.482c-.354.386-1.353 1.325-1.353 3.228s1.381 3.738 1.574 3.998c.193.26 2.717 4.15 6.582 5.822.92.398 1.638.636 2.198.813.924.293 1.765.252 2.43.153.741-.11 2.263-.926 2.58-1.82.317-.894.317-1.66.223-1.82-.095-.16-.35-.257-.665-.415z"/>
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
