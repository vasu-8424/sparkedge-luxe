import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import residential from "@/assets/service-residential.jpg";
import commercial from "@/assets/service-commercial.jpg";
import floor from "@/assets/service-floor.jpg";
import kitchen from "@/assets/service-kitchen.jpg";
import sofa from "@/assets/service-sofa.jpg";
import construction from "@/assets/service-construction.jpg";

const services = [
  { title: "Residential Deep Cleaning", desc: "Top-to-bottom transformations for luxury homes.", img: residential, span: "lg:col-span-4 lg:row-span-2" },
  { title: "Commercial Cleaning", desc: "Daily upkeep for offices that perform.", img: commercial, span: "lg:col-span-5" },
  { title: "Floor Scrubbing", desc: "Industrial-grade machine cleaning.", img: floor, span: "lg:col-span-3" },
  { title: "Kitchen Deep Cleaning", desc: "Restoration-level kitchen detailing.", img: kitchen, span: "lg:col-span-3" },
  { title: "Sofa Cleaning", desc: "Upholstery care that restores texture.", img: sofa, span: "lg:col-span-3" },
  { title: "Post Construction", desc: "From debris to ready-to-move-in.", img: construction, span: "lg:col-span-2" },
];

const more = ["Housekeeping Services", "Facility Management", "Office Maintenance"];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            Services
          </div>
          <h2 className="mt-6 text-5xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-white">
            Every <span className="text-gradient-brand">surface</span>.<br />
            Every space.
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            A complete suite of professional cleaning services, engineered for any environment
            and delivered with consistency.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 auto-rows-[280px] gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-3xl ${s.span}`}
            >
              <motion.img
                src={s.img}
                alt={s.title}
                loading="lazy"
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.3),oklch(0.72_0.19_152/0.3))]" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500">
                  {s.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {more.map((m) => (
            <span key={m} className="glass rounded-full px-5 py-2.5 text-sm text-white/80">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
