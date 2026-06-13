import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SparkEdgeLogo } from "@/components/SparkEdgeLogo";

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
        <a href="#" className="flex items-center">
          <SparkEdgeLogo showSubtitle={false} className="h-12 md:h-14 w-auto" lightText={true} />
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
          <Button
            variant="hero"
            size="default"
            className="hidden sm:inline-flex rounded-full h-10 px-5 text-sm"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Now
          </Button>
          <Button
            variant="whatsapp"
            size="default"
            className="hidden sm:inline-flex rounded-full h-10 px-5 text-sm gap-1.5"
            onClick={() => window.open("https://wa.me/918555877790", "_blank")}
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.067 5.248 5.303 0 11.771 0c3.133.001 6.077 1.221 8.291 3.437 2.213 2.216 3.431 5.159 3.43 8.293-.005 6.485-5.24 11.733-11.71 11.733-2.002-.001-3.973-.513-5.729-1.488L0 24zm6.47-4.249c1.657.982 3.279 1.5 5.234 1.501 5.374 0 9.743-4.321 9.746-9.63.001-2.572-1.002-4.99-2.825-6.814C16.858 2.984 14.444 1.981 11.85 1.98 6.48 1.98 2.11 6.301 2.107 11.613c0 1.906.496 3.768 1.439 5.413l-.994 3.633 3.505-.929zM17.5 15.352c-.314-.157-1.856-.916-2.144-1.021-.288-.105-.499-.157-.708.157-.21.314-.812 1.021-.994 1.23-.183.21-.365.236-.679.079-1.4-.7-2.42-1.221-3.41-2.918-.26-.445.26-.413.74-.1.431.815.115 1.378.115 1.378-.115-.288-.916-2.202-.916-2.202-.314-.755-.633-.654-.868-.667-.226-.013-.485-.015-.744-.015s-.679.097-1.034.482c-.354.386-1.353 1.325-1.353 3.228s1.381 3.738 1.574 3.998c.193.26 2.717 4.15 6.582 5.822.92.398 1.638.636 2.198.813.924.293 1.765.252 2.43.153.741-.11 2.263-.926 2.58-1.82.317-.894.317-1.66.223-1.82-.095-.16-.35-.257-.665-.415z"/>
            </svg>
            WhatsApp
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-white/10 p-4 flex flex-col gap-4 bg-background/95 rounded-b-[2rem] backdrop-blur-lg"
        >
          <ul className="flex flex-col gap-1">
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
          </ul>
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            <Button
              variant="hero"
              size="default"
              className="w-full rounded-full h-10 text-sm justify-center"
              onClick={() => {
                setOpen(false);
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Now
            </Button>
            <Button
              variant="whatsapp"
              size="default"
              className="w-full rounded-full h-10 text-sm justify-center gap-1.5"
              onClick={() => {
                setOpen(false);
                window.open("https://wa.me/918555877790", "_blank");
              }}
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.067 5.248 5.303 0 11.771 0c3.133.001 6.077 1.221 8.291 3.437 2.213 2.216 3.431 5.159 3.43 8.293-.005 6.485-5.24 11.733-11.71 11.733-2.002-.001-3.973-.513-5.729-1.488L0 24zm6.47-4.249c1.657.982 3.279 1.5 5.234 1.501 5.374 0 9.743-4.321 9.746-9.63.001-2.572-1.002-4.99-2.825-6.814C16.858 2.984 14.444 1.981 11.85 1.98 6.48 1.98 2.11 6.301 2.107 11.613c0 1.906.496 3.768 1.439 5.413l-.994 3.633 3.505-.929zM17.5 15.352c-.314-.157-1.856-.916-2.144-1.021-.288-.105-.499-.157-.708.157-.21.314-.812 1.021-.994 1.23-.183.21-.365.236-.679.079-1.4-.7-2.42-1.221-3.41-2.918-.26-.445.26-.413.74-.1.431.815.115 1.378.115 1.378-.115-.288-.916-2.202-.916-2.202-.314-.755-.633-.654-.868-.667-.226-.013-.485-.015-.744-.015s-.679.097-1.034.482c-.354.386-1.353 1.325-1.353 3.228s1.381 3.738 1.574 3.998c.193.26 2.717 4.15 6.582 5.822.92.398 1.638.636 2.198.813.924.293 1.765.252 2.43.153.741-.11 2.263-.926 2.58-1.82.317-.894.317-1.66.223-1.82-.095-.16-.35-.257-.665-.415z"/>
              </svg>
              WhatsApp Now
            </Button>
          </div>
        </motion.div>
      )}

    </motion.header>
  );
}
