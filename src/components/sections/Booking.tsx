import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
  { label: "Service", options: ["Residential Deep Cleaning", "Commercial Cleaning", "Floor Scrubbing", "Sofa Cleaning", "Kitchen Deep Cleaning", "Post Construction"] },
  { label: "Property Type", options: ["Apartment", "Villa", "Office", "Retail", "Industrial", "Other"] },
  { label: "Location", input: "city" },
  { label: "Date", input: "date" },
  { label: "Contact", input: "contact" },
];

export function Booking() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});

  const current = steps[step];
  const progress = ((step + (done ? 1 : 0)) / steps.length) * 100;

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  };

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            Book SparkEdge
          </div>
          <h2 className="mt-6 text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1]">
            Five steps to <span className="text-gradient-brand">spotless</span>.
          </h2>
        </motion.div>

        <div className="glass-strong rounded-3xl p-8 lg:p-12 shadow-elegant">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-white/60 mb-3">
              <span>Step {Math.min(step + 1, steps.length)} of {steps.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="h-full bg-[linear-gradient(90deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto h-20 w-20 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] flex items-center justify-center shadow-glow"
                >
                  <Check className="h-10 w-10 text-white" strokeWidth={3} />
                </motion.div>
                <h3 className="mt-8 text-4xl font-bold text-white tracking-tight">
                  Inspection Booked
                </h3>
                <p className="mt-3 text-white/70">
                  Our team will reach out within 2 hours to confirm.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-sm text-electric font-medium mb-2">/ {String(step + 1).padStart(2, "0")}</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-8">
                  Choose your {current.label.toLowerCase()}
                </h3>

                {current.options ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {current.options.map((opt) => {
                      const active = data[current.label] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => setData({ ...data, [current.label]: opt })}
                          className={`text-left p-5 rounded-2xl border transition-all ${
                            active
                              ? "border-electric bg-electric/10 shadow-glow"
                              : "border-white/10 hover:border-white/30 hover:bg-white/5"
                          }`}
                        >
                          <span className="text-white font-medium">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : current.input === "date" ? (
                  <input
                    type="date"
                    onChange={(e) => setData({ ...data, [current.label]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg focus:border-electric outline-none"
                  />
                ) : current.input === "city" ? (
                  <input
                    type="text"
                    placeholder="Visakhapatnam, AP"
                    onChange={(e) => setData({ ...data, [current.label]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none"
                  />
                ) : (
                  <div className="grid gap-4">
                    <input type="text" placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none" />
                    <input type="tel" placeholder="Phone number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none" />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none" />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!done && (
            <div className="mt-8 flex justify-between items-center">
              <Button
                variant="ghostLine"
                onClick={() => setStep(Math.max(0, step - 1))}
                className="h-12 px-5"
                disabled={step === 0}
              >
                <ArrowLeft /> Back
              </Button>
              <Button variant="hero" size="xl" onClick={next}>
                {step === steps.length - 1 ? "Confirm Booking" : "Continue"}
                <ArrowRight />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
