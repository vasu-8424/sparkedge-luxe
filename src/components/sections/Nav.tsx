import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1400px,calc(100%-2rem))] -translate-x-1/2 rounded-full transition-all duration-500 ${
        scrolled ? "glass-strong" : "glass"
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-3 lg:px-7">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]" />
            <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] blur-md opacity-70 animate-pulse-glow" />
            <div className="absolute inset-[6px] rounded-[5px] bg-background" />
            <div className="absolute inset-[8px] rounded-[3px] bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]" />
          </div>
          <span className="font-bold tracking-tight text-lg text-white">
            Spark<span className="text-gradient-brand">Edge</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="hero" size="default" className="hidden sm:inline-flex rounded-full h-10 px-5 text-sm">
            Book Now
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-white/10 p-4 flex flex-col gap-1"
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
