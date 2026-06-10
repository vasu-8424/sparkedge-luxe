import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { SparkEdgeLogo } from "@/components/SparkEdgeLogo";

export function Footer() {
  return (
    <footer className="relative pt-32 lg:pt-48 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.58_0.24_258/0.3),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-emerald/60"
            style={{ left: `${(i * 71) % 100}%`, top: `${(i * 43) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl lg:text-9xl font-bold text-white tracking-[-0.04em] leading-[0.9]">
            Ready for a <br />
            <span className="text-gradient-brand">cleaner</span> space?
          </h2>
          <div className="mt-12 flex justify-center">
            <Button
              variant="hero"
              size="xl"
              className="text-lg h-16 px-10"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Free Inspection
              <ArrowUpRight />
            </Button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-32 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-center">
                <SparkEdgeLogo showSubtitle={true} className="h-16 w-auto" lightText={true} />
              </div>
              <p className="mt-4 text-sm text-white/60 max-w-xs">
                Professional deep cleaning & housekeeping services for homes, offices, and facilities.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Services</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Residential Deep Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Facility Management</li>
                <li>Floor Scrubbing</li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Reach us</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="tel:8555877790" className="hover:text-white">85558 77790</a></li>
                <li><a href="mailto:info@sparkedge.in" className="hover:text-white">info@sparkedge.in</a></li>
                <li>Visakhapatnam, AP</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
            <div>© {new Date().getFullYear()} SparkEdge. All rights reserved.</div>
            <div>Crafted with precision.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
