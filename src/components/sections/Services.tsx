import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import residential from "@/assets/service-residential.jpg";
import floor from "@/assets/service-floor.jpg";
import housekeeping from "@/assets/about-team.jpg";

const servicesData = [
  {
    title: "Residential Cleaning",
    badgeColor: "bg-emerald text-white",
    image: residential,
    items: [
      "Full Home Deep Cleaning",
      "Kitchen Deep Cleaning",
      "Interior Deep Cleaning",
      "Sofa Shampooing",
      "Pest Control",
      "Move-In / Move-Out Cleaning",
    ],
  },
  {
    title: "Commercial Cleaning",
    badgeColor: "bg-royal text-white",
    image: floor,
    items: [
      "Office Deep Cleaning",
      "Post-Construction Cleaning",
      "Glass & Facade Cleaning",
      "Tile & Floor Scrubbing",
      "Dust & Debris Removal",
      "Machine-Based Cleaning Solutions",
    ],
  },
  {
    title: "House keeping",
    badgeColor: "bg-emerald text-white",
    image: housekeeping,
    items: [
      "Daily Housekeeping Staff",
      "Apartment & Community Maintenance",
      "Office Cleaning & Maintenance",
      "Man Power Supply",
      "Retail & Commercial Space Maintenance",
      "All Facility Support Services",
    ],
  },
];

const bookingServiceMap: Record<string, string> = {
  "Full Home Deep Cleaning": "Residential Deep Cleaning",
  "Kitchen Deep Cleaning": "Kitchen Deep Cleaning",
  "Interior Deep Cleaning": "Residential Deep Cleaning",
  "Sofa Shampooing": "Sofa Cleaning",
  "Pest Control": "Residential Deep Cleaning",
  "Move-In / Move-Out Cleaning": "Residential Deep Cleaning",
  "Office Deep Cleaning": "Commercial Cleaning",
  "Post-Construction Cleaning": "Post Construction",
  "Glass & Facade Cleaning": "Commercial Cleaning",
  "Tile & Floor Scrubbing": "Floor Scrubbing",
  "Dust & Debris Removal": "Commercial Cleaning",
  "Machine-Based Cleaning Solutions": "Floor Scrubbing",
  "Daily Housekeeping Staff": "Commercial Cleaning",
  "Man Power Supply": "Commercial Cleaning",
  "Apartment & Community Maintenance": "Residential Deep Cleaning",
  "Retail & Commercial Space Maintenance": "Commercial Cleaning",
  "Office Cleaning & Maintenance": "Commercial Cleaning",
  "All Facility Support Services": "Commercial Cleaning",
};

export function Services() {
  const handleItemClick = (itemName: string) => {
    const bookingVal = bookingServiceMap[itemName] || "Residential Deep Cleaning";
    window.dispatchEvent(new CustomEvent("selectService", { detail: bookingVal }));
  };

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
            Our Services
          </div>
          <h2 className="mt-6 text-5xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-white">
            Professional <span className="text-gradient-brand">cleaning</span>.<br />
            Exceptional results.
          </h2>
        </motion.div>

        {/* 3 Columns Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image Container with Absolute Capsule Header */}
              <div className="h-56 relative overflow-hidden shrink-0">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Visual Label Capsule */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className={`text-center text-base font-black tracking-wide py-2.5 rounded-2xl shadow-glow ${s.badgeColor}`}>
                    {s.title}
                  </div>
                </div>
              </div>

              {/* Bullet list */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-4">
                  {s.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleItemClick(item)}
                        className="flex items-center gap-3.5 w-full text-left text-white/80 hover:text-emerald transition-colors group/item cursor-pointer"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald shrink-0" strokeWidth={2.5} />
                        <span className="text-sm font-semibold tracking-wide">{item}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all ml-auto" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
