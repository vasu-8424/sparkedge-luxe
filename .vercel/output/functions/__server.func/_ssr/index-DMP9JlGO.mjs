import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useMotionValue, a as useSpring, m as motion, b as useScroll, c as useTransform, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, S as Sparkles, A as ArrowRight, a as Award, b as Shield, c as Settings, C as CircleCheckBig, d as CircleCheck, F as FlaskConical, E as Eye, e as Clock, Q as Quote, f as Star, g as Check, h as ArrowLeft, I as Instagram, P as Phone, i as Mail, j as MapPin, k as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "btn-magnetic text-white font-semibold tracking-tight rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-elegant hover:shadow-glow",
        glass: "btn-magnetic glass text-white font-medium rounded-full hover:bg-white/10",
        ghostLine: "btn-magnetic border border-white/20 text-white rounded-full hover:bg-white/5"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-14 px-9 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logoImg = "/assets/logo-CZrWGmNl.png";
function SparkEdgeLogo({
  showSubtitle = true,
  className = "h-10 w-auto",
  lightText = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: logoImg,
      alt: "SparkEdge Logo",
      className,
      style: { objectFit: "contain" }
    }
  );
}
const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
      className: `fixed left-1/2 top-4 z-50 w-[min(1400px,calc(100%-2rem))] -translate-x-1/2 rounded-full transition-all duration-500 ${scrolled ? "glass-strong" : "glass"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center justify-between px-5 py-3 lg:px-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SparkEdgeLogo, { showSubtitle: false, className: "h-12 md:h-14 w-auto", lightText: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "relative rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white",
              children: l.label
            }
          ) }, l.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "hero",
                size: "default",
                className: "hidden sm:inline-flex rounded-full h-10 px-5 text-sm",
                onClick: () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }),
                children: "Book Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(!open),
                className: "lg:hidden text-white p-2",
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.ul,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            className: "lg:hidden border-t border-white/10 p-4 flex flex-col gap-1",
            children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5",
                children: l.label
              }
            ) }, l.label))
          }
        )
      ]
    }
  );
}
const heroImg = "/assets/hero-Dix7DFGu.jpg";
const metrics = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "100+", label: "Professional Staff" }
];
const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }
  })
};
const headline = [
  ["CLEAN", "SPACES."],
  ["HEALTHIER", "LIVING."],
  ["BETTER", "IMPRESSIONS."]
];
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { scale, y }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "Luxury interior being professionally cleaned by SparkEdge team",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover",
          fetchPriority: "high"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.04_0.02_258/0.7)_80%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute h-1 w-1 rounded-full bg-white/70",
        style: {
          left: `${i * 53 % 100}%`,
          top: `${i * 37 % 100}%`
        },
        animate: {
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2]
        },
        transition: {
          duration: 4 + i % 5,
          repeat: Infinity,
          delay: i * 0.2
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none mix-blend-screen opacity-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1/2 left-1/4 h-[150%] w-[2px] rotate-12 bg-gradient-to-b from-transparent via-electric to-transparent blur-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1/2 right-1/3 h-[150%] w-[2px] -rotate-12 bg-gradient-to-b from-transparent via-emerald to-transparent blur-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { opacity }, className: "relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 pt-32 pb-12 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-widest uppercase text-white/80",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-emerald" }),
            "Professional Deep Cleaning & Housekeeping"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 max-w-[80%]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[12vw] sm:text-[10vw] lg:text-[7.5vw] font-bold leading-[0.95] tracking-[-0.04em] text-white", children: headline.map((line, li) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-[0.25em]", children: line.map((w, wi) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            variants: word,
            initial: "hidden",
            animate: "visible",
            custom: li * 2 + wi,
            className: `inline-block ${li === 2 ? "text-gradient" : ""}`,
            children: w
          },
          wi
        )) }) }, li)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.2, duration: 0.8 },
            className: "mt-8 max-w-xl text-lg text-white/70 leading-relaxed",
            children: "SparkEdge engineers spotless environments for the world's most discerning homes, offices and facilities — backed by certified teams and precision equipment."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.4, duration: 0.8 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "hero",
                  size: "xl",
                  onClick: () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }),
                  children: [
                    "Book Free Inspection",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "glass",
                  size: "xl",
                  onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
                  children: "Explore Services"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.6, duration: 1 },
          className: "mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
          children: metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { y: -6, rotateX: 8, rotateY: -4 },
              style: { transformStyle: "preserve-3d", perspective: 1e3 },
              className: "glass-strong rounded-2xl p-5 lg:p-6 animate-float",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-3xl lg:text-4xl font-bold tracking-tight text-gradient",
                    style: { animationDelay: `${i * 0.4}s` },
                    children: m.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs lg:text-sm text-white/60 uppercase tracking-wider", children: m.label })
              ]
            },
            m.label
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 2 },
        className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/50",
        children: "SCROLL TO EXPLORE"
      }
    )
  ] });
}
const housekeeping = "/assets/about-team-D2GCw23a.jpg";
const formulaOutcomes = [
  "Superior Cleaning Quality",
  "Enhanced Hygiene Standards",
  "Faster Service Execution",
  "Complete Customer Satisfaction"
];
const pillars = [
  {
    title: "MAN",
    icon: Shield,
    desc: "Trained, certified, and vetted professionals dedicated to pristine results.",
    color: "from-emerald/20 to-emerald/5",
    iconColor: "text-emerald"
  },
  {
    title: "MACHINERY",
    icon: Settings,
    desc: "Industrial-grade, advanced machinery engineered for deep cleaning restoration.",
    color: "from-electric/20 to-electric/5",
    iconColor: "text-electric"
  },
  {
    title: "METHOD",
    icon: CircleCheckBig,
    desc: "Systematic, scientific cleaning methods ensuring maximum hygiene and surface care.",
    color: "from-purple/20 to-purple/5",
    iconColor: "text-purple-400"
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-32 lg:py-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70",
            children: "About SparkEdge"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.9 },
            className: "mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white",
            children: [
              "Trusted professional ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "cleaning & housekeeping" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { delay: 0.2, duration: 0.8 },
            className: "mt-8 space-y-6 text-lg text-white/70 leading-relaxed max-w-2xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "SparkEdge Cleaning is a trusted professional cleaning and housekeeping company based in Visakhapatnam, dedicated to delivering exceptional cleaning solutions for residential, commercial, and institutional spaces." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "With a combination of trained manpower, advanced machinery, premium cleaning chemicals, and systematic cleaning methods, we ensure every project is completed to the highest standards of cleanliness and hygiene." })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] },
          className: "lg:col-span-5 relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant border border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: housekeeping,
                  alt: "SparkEdge professional cleaning team at work",
                  width: 1024,
                  height: 1280,
                  loading: "lazy",
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 5, repeat: Infinity },
                className: "absolute -top-6 -left-4 glass-strong rounded-2xl p-4 shadow-card max-w-[200px]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-emerald/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-emerald" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white", children: "ISO Certified" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/60", children: "Quality Standards" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32 pt-20 border-t border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-emerald",
            children: "Man × Machinery × Method"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-4xl lg:text-5xl font-bold text-white tracking-tight", children: "Our proven formula helps us deliver excellence" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-16", children: pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: `glass rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -inset-px rounded-3xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: `h-6 w-6 ${p.iconColor}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-black text-white tracking-wider", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/70 leading-relaxed text-sm", children: p.desc })
          ]
        },
        p.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4 lg:gap-8 max-w-4xl mx-auto", children: formulaOutcomes.map((outcome, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "flex items-center gap-3 glass px-6 py-4 rounded-2xl border border-white/5 hover:border-emerald/30 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-emerald/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-emerald" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-white/95", children: outcome })
          ]
        },
        outcome
      )) })
    ] })
  ] }) });
}
const residential = "/assets/service-residential-8JG-Bcyp.jpg";
const floor = "/assets/service-floor-BuSh0HP4.jpg";
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
      "Move-In / Move-Out Cleaning"
    ]
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
      "Machine-Based Cleaning Solutions"
    ]
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
      "All Facility Support Services"
    ]
  }
];
const bookingServiceMap = {
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
  "All Facility Support Services": "Commercial Cleaning"
};
function Services() {
  const handleItemClick = (itemName) => {
    const bookingVal = bookingServiceMap[itemName] || "Residential Deep Cleaning";
    window.dispatchEvent(new CustomEvent("selectService", { detail: bookingVal }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-32 lg:py-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-3xl mb-16 lg:mb-24",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70", children: "Our Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-5xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-white", children: [
            "Professional ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "cleaning" }),
            ".",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Exceptional results."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: servicesData.map((s, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1, duration: 0.6 },
        className: "glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 group flex flex-col h-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-56 relative overflow-hidden shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: s.image,
                alt: s.title,
                loading: "lazy",
                className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-center text-base font-black tracking-wide py-2.5 rounded-2xl shadow-glow ${s.badgeColor}`, children: s.title }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 flex-1 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: s.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleItemClick(item),
              className: "flex items-center gap-3.5 w-full text-left text-white/80 hover:text-emerald transition-colors group/item cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4.5 w-4.5 text-emerald shrink-0", strokeWidth: 2.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-wide", children: item }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all ml-auto" })
              ]
            }
          ) }, item)) }) })
        ]
      },
      s.title
    )) })
  ] }) });
}
const reasons = [
  { icon: Shield, title: "Trained & Professional Team", desc: "Vetted, background-checked, and extensively trained specialists on every project." },
  { icon: Sparkles, title: "Advanced Cleaning Equipment", desc: "Industrial-grade machinery and precision tools for superior deep cleaning." },
  { icon: FlaskConical, title: "Premium Cleaning Chemicals", desc: "Eco-friendly, surface-safe, and highly effective professional-grade formulas." },
  { icon: Eye, title: "Visible Transformation", desc: "Dramatic, satisfying, and visible before-and-after differences with every service." },
  { icon: Clock, title: "Reliable Service", desc: "On-time arrival, systematic execution, and consistent premium quality every single time." }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 lg:py-48 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-3xl mb-20 text-center mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70", children: "Why Choose SparkEdge?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white", children: [
              "The standard, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "elevated" }),
              "."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-5", children: reasons.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          whileHover: { y: -8 },
          className: "group relative glass rounded-3xl p-6 overflow-hidden flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.4),oklch(0.72_0.19_152/0.4))] -z-10 blur-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.2),oklch(0.72_0.19_152/0.2))] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-6 w-6 text-emerald" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white tracking-tight leading-snug", children: r.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/60 text-sm leading-relaxed", children: r.desc })
            ] })
          ]
        },
        r.title
      )) })
    ] })
  ] });
}
const MKLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-7 w-auto", viewBox: "0 0 120 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 25h6v10H5zM12 15h8v20h-8zM21 20h6v15h-6z", fill: "#10B981" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 10v25h6V20l8 10 8-10v15h6V10h-8l-6 8-6-8h-8z", fill: "white" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M75 10h6v12l10-12h8l-10 11 11 14h-8l-8-11v11h-6V10z", fill: "white" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-[#10B981]", children: "BUILDERS &" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-medium tracking-widest text-white/70", children: "DEVELOPERS" })
  ] })
] });
const CitadelLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-8 w-auto text-[#D4AF37]", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 25V12l4-4v4h4V8l4 4v-4h4V8l4 4v13H5zm6-6h8v6h-8v-6z", fill: "currentColor", stroke: "currentColor", strokeWidth: "1.5" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black tracking-widest text-white", children: "CITADEL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] tracking-[0.2em] text-[#D4AF37]", children: "DAWN OF LUXURY" })
  ] })
] });
const GconLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#EAB308] text-black font-black italic px-2.5 py-1 rounded text-lg tracking-tighter", children: "G CON" }) });
const KrystalLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-8 w-auto text-[#A855F7]", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 5 L35 25 L20 35 L5 25 Z", fill: "currentColor", fillOpacity: "0.2", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 5 L20 35 M5 25 L35 25", stroke: "currentColor", strokeWidth: "1.5" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-widest text-white", children: "KRYSTAL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-[#A855F7] tracking-wider uppercase", children: "Your Shining Abode" })
  ] })
] });
const InorbitLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-7 w-7 rounded-full bg-[#2563EB] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-5 w-5 rounded-full border-2 border-[#EAB308] border-t-transparent animate-spin-slow" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-black tracking-tight text-white flex items-center", children: [
    "In",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#2563EB]", children: "orbit" })
  ] })
] });
const FluentgridLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-7 w-auto text-[#06B6D4]", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 10 C 20 5, 25 35, 35 30", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 20 C 15 15, 20 35, 30 30", stroke: "#10B981", strokeWidth: "4", strokeLinecap: "round" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-black tracking-tighter text-white", children: "FLUENTGRID" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-white/50 tracking-wider", children: "seamless digital transformation" })
  ] })
] });
const MahathiLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-8 w-auto text-[#EF4444]", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 2 L23 15 L36 12 L26 22 L36 32 L23 29 L20 40 L17 29 L4 32 L14 22 L4 12 L17 15 Z", fill: "currentColor" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black tracking-widest text-white", children: "MAHATHI" })
] });
const VprLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-7 w-auto", viewBox: "0 0 60 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 30 C 20 10, 30 10, 40 30", stroke: "#F97316", strokeWidth: "3", fill: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 30 C 28 15, 38 15, 48 30", stroke: "#0EA5E9", strokeWidth: "3", fill: "none" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black tracking-tight text-white", children: "VPR" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-bold text-white/60 uppercase", children: "Builders" })
  ] })
] });
const PanoramaHillsLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-emerald-900/40 border border-emerald-500/30 rounded px-2.5 py-1 flex flex-col items-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] text-[#EAB308] font-bold uppercase tracking-widest", children: "Shriram" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black text-white tracking-wide uppercase", children: "Panorama Hills" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[6px] text-white/80 italic font-light leading-none", children: "Life as it should be" })
] }) });
const clientLogosList = [
  { name: "MK Builders", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(MKLogo, {}) },
  { name: "Citadel", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(CitadelLogo, {}) },
  { name: "GCON", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(GconLogo, {}) },
  { name: "Krystal", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(KrystalLogo, {}) },
  { name: "Inorbit", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(InorbitLogo, {}) },
  { name: "Fluentgrid", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(FluentgridLogo, {}) },
  { name: "Mahathi", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(MahathiLogo, {}) },
  { name: "VPR Builders", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(VprLogo, {}) },
  { name: "Panorama Hills", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(PanoramaHillsLogo, {}) }
];
const industryBullets = [
  "Apartments, Villas & Gated Communities",
  "Offices & Commercial Buildings",
  "Hospitals & Clinics",
  "Educational Institutions",
  "Retail Stores & Showrooms",
  "Construction & Interior Projects"
];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "industries", className: "relative py-32 lg:py-48 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12 mb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70",
              children: "Industries We Serve"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white max-w-2xl",
              children: [
                "Trusted across ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "every sector" }),
                "."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4 pt-4", children: industryBullets.map((bullet, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "flex items-center gap-3.5 glass p-4.5 rounded-2xl border border-white/5 hover:border-emerald/20 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-glow shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/85 font-semibold text-sm tracking-wide leading-relaxed", children: bullet })
            ]
          },
          bullet
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          className: "glass bg-[#10B981]/10 border-emerald/20 rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center relative overflow-hidden h-full min-h-[420px] group shadow-elegant",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald/15 to-transparent -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-emerald/30 blur-2xl group-hover:bg-emerald/40 transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-emerald font-black mb-5", children: "// Scan to explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4.5 rounded-[2rem] shadow-glow mb-6 group-hover:scale-105 transition-transform duration-500 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-32 w-32 text-black", viewBox: "0 0 100 100", fill: "currentColor", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "0", width: "25", height: "25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "19", height: "19", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "6", width: "13", height: "13" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "75", y: "0", width: "25", height: "25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "78", y: "3", width: "19", height: "19", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "81", y: "6", width: "13", height: "13" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "75", width: "25", height: "25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "78", width: "19", height: "19", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "81", width: "13", height: "13" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "35", y: "5", width: "5", height: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "0", width: "10", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "20", width: "15", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "60", y: "10", width: "5", height: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5", y: "35", width: "15", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "25", y: "30", width: "5", height: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "15", y: "50", width: "20", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "60", width: "5", height: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "30", y: "45", width: "5", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "30", width: "10", height: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "60", y: "35", width: "5", height: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "35", y: "60", width: "10", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "50", y: "55", width: "5", height: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "60", y: "65", width: "15", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "80", width: "15", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "30", y: "90", width: "20", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "65", y: "80", width: "5", height: "15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "80", y: "35", width: "15", height: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "90", y: "45", width: "10", height: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "80", y: "60", width: "5", height: "10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "90", y: "80", width: "10", height: "5" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-3xl font-black text-white leading-tight tracking-tight mb-2", children: "Book Your Service Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald/80 text-sm font-semibold tracking-wide", children: "Quick on-site inspection booking" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                onClick: () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }),
                animate: { y: [0, 6, 0] },
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                className: "mt-6 h-12 w-12 rounded-full bg-emerald text-white flex items-center justify-center cursor-pointer shadow-glow hover:scale-110 transition-all shrink-0 border-0 outline-none",
                "aria-label": "Scroll to booking",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) })
              }
            )
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-28 border-t border-white/5 pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12 mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-white/50 mb-3", children: "Our Clients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl lg:text-4xl font-bold text-white tracking-tight", children: [
          "Brands that demand ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "precision" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative overflow-hidden w-full py-4",
          style: {
            maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-10 w-max items-center hover:[animation-play-state:paused]",
              style: { animation: "marquee 35s linear infinite" },
              children: [...clientLogosList, ...clientLogosList, ...clientLogosList].map((client, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "glass-strong rounded-2xl px-8 py-5 shrink-0 hover:shadow-glow hover:bg-white/5 transition-all duration-500 flex items-center justify-center min-w-[200px] h-20",
                  children: client.logo
                },
                i
              ))
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "rounded-3xl bg-[linear-gradient(135deg,oklch(0.42_0.22_263),oklch(0.58_0.24_258))] border border-electric/30 py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent -z-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-5 w-5 text-emerald", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold tracking-wide", children: "Vizag, Andhra Pradesh" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:8555877790",
              className: "flex items-center gap-3.5 text-white hover:text-emerald transition-colors group cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-emerald", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold tracking-wide", children: "85558 77790" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
const beforeImg = "/assets/before-FHtBWRSl.jpg";
const afterImg = "/assets/after-CKRmouOi.jpg";
function BeforeAfter() {
  const [pos, setPos] = reactExports.useState(50);
  const ref = reactExports.useRef(null);
  const onMove = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = (clientX - rect.left) / rect.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-32 lg:py-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-3xl mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70", children: "Before / After" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-5xl lg:text-7xl font-bold leading-[1] tracking-[-0.03em] text-white", children: [
            "Watch the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "transformation" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1 },
        ref,
        onMouseMove: (e) => e.buttons === 1 && onMove(e.clientX),
        onTouchMove: (e) => onMove(e.touches[0].clientX),
        className: "relative aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant cursor-ew-resize select-none touch-none",
        onPointerDown: (e) => onMove(e.clientX),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: afterImg, alt: "After cleaning", width: 1280, height: 800, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 overflow-hidden",
              style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beforeImg, alt: "Before cleaning", width: 1280, height: 800, loading: "lazy", className: "h-full w-full object-cover" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 glass-strong rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white", children: "Before" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 glass-strong rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white", children: "After" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 bottom-0 w-1 bg-white shadow-glow",
              style: { left: `${pos}%`, transform: "translateX(-50%)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white text-slate-ink flex items-center justify-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6L2 12L8 18M16 6L22 12L16 18", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            }
          )
        ]
      }
    )
  ] }) });
}
const testimonials = [
  {
    quote: "SparkEdge transformed our 40-floor tower's daily upkeep. The consistency is unreal.",
    name: "Aravind Reddy",
    role: "Facility Director, Crescent Towers",
    rating: 5
  },
  {
    quote: "We've worked with three vendors. None come close to SparkEdge's attention to detail.",
    name: "Priya Menon",
    role: "Operations Head, Meridian Hospitals",
    rating: 5
  },
  {
    quote: "Post-construction handover used to take a week. Now it's 36 hours, every time.",
    name: "Rohit Sharma",
    role: "Project Manager, Vega Realty",
    rating: 5
  }
];
function Clients() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-white/50", children: "Testimonials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl lg:text-5xl font-bold text-white tracking-tight", children: [
            "What our clients ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "say" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "glass rounded-3xl p-8 relative overflow-hidden group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 h-12 w-12 text-electric/20 group-hover:text-electric/40 transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-5", children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-emerald text-emerald" }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-white leading-relaxed", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/60", children: t.role })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
const steps = [
  { label: "Service", options: ["Residential Deep Cleaning", "Commercial Cleaning", "Floor Scrubbing", "Sofa Cleaning", "Kitchen Deep Cleaning", "Post Construction"] },
  { label: "Property Type", options: ["Apartment", "Villa", "Office", "Retail", "Industrial", "Other"] },
  { label: "Location", input: "city" },
  { label: "Date", input: "date" },
  { label: "Contact", input: "contact" }
];
function Booking() {
  const [step, setStep] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [data, setData] = reactExports.useState({});
  reactExports.useEffect(() => {
    const handleSelectService = (e) => {
      const customEvent = e;
      setData((prev) => ({ ...prev, "Service": customEvent.detail }));
      setStep(1);
      setDone(false);
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    };
    const handleSelectProperty = (e) => {
      const customEvent = e;
      setData((prev) => ({ ...prev, "Property Type": customEvent.detail }));
      setStep(2);
      setDone(false);
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("selectService", handleSelectService);
    window.addEventListener("selectProperty", handleSelectProperty);
    return () => {
      window.removeEventListener("selectService", handleSelectService);
      window.removeEventListener("selectProperty", handleSelectProperty);
    };
  }, []);
  const current = steps[step];
  const progress = (step + (done ? 1 : 0)) / steps.length * 100;
  const confirmBooking = () => {
    if (!data.name || !data.phone) {
      alert("Please fill in your name and phone number to confirm booking.");
      return;
    }
    const message = `Hello SparkEdge! I would like to book a deep cleaning / housekeeping service:

🧹 *Service:* ${data.Service || "Not selected"}
🏡 *Property Type:* ${data["Property Type"] || "Not selected"}
📍 *Location:* ${data.Location || "Not entered"}
📅 *Preferred Date:* ${data.Date || "Not entered"}

👤 *Contact Name:* ${data.name}
📞 *Phone Number:* ${data.phone}
✉️ *Email:* ${data.email || "Not provided"}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918555877790?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setDone(true);
  };
  const next = () => {
    if (step < steps.length - 1) {
      if (step === 2 && !data.Location) {
        alert("Please enter your location.");
        return;
      }
      if (step === 3 && !data.Date) {
        alert("Please select a preferred date.");
        return;
      }
      setStep(step + 1);
    } else {
      confirmBooking();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "booking", className: "relative py-32 lg:py-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70", children: "Book SparkEdge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1]", children: [
            "Five steps to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "spotless" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-8 lg:p-12 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs uppercase tracking-widest text-white/60 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Step ",
            Math.min(step + 1, steps.length),
            " of ",
            steps.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            Math.round(progress),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { width: `${progress}%` },
            transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
            className: "h-full bg-[linear-gradient(90deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "text-center py-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1, rotate: 360 },
                transition: { type: "spring", stiffness: 200, damping: 15 },
                className: "mx-auto h-20 w-20 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] flex items-center justify-center shadow-glow",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-white", strokeWidth: 3 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-4xl font-bold text-white tracking-tight", children: "Redirected to WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/70", children: "If the WhatsApp window didn't open automatically, please check your browser block settings or click the submit button again." })
          ]
        },
        "done"
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -30 },
          transition: { duration: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-electric font-medium mb-2", children: [
              "/ ",
              String(step + 1).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl lg:text-4xl font-bold text-white tracking-tight mb-8", children: [
              "Choose your ",
              current.label.toLowerCase()
            ] }),
            current.options ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: current.options.map((opt) => {
              const active = data[current.label] === opt;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setData({ ...data, [current.label]: opt }),
                  className: `text-left p-5 rounded-2xl border transition-all ${active ? "border-electric bg-electric/10 shadow-glow" : "border-white/10 hover:border-white/30 hover:bg-white/5"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: opt })
                },
                opt
              );
            }) }) : current.input === "date" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: data["Date"] || "",
                onChange: (e) => setData({ ...data, "Date": e.target.value }),
                className: "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg focus:border-electric outline-none"
              }
            ) : current.input === "city" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Visakhapatnam, AP",
                value: data["Location"] || "",
                onChange: (e) => setData({ ...data, "Location": e.target.value }),
                className: "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Full name",
                  value: data.name || "",
                  onChange: (e) => setData({ ...data, name: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  placeholder: "Phone number",
                  value: data.phone || "",
                  onChange: (e) => setData({ ...data, phone: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Email",
                  value: data.email || "",
                  onChange: (e) => setData({ ...data, email: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder:text-white/30 focus:border-electric outline-none"
                }
              )
            ] })
          ]
        },
        step
      ) }),
      !done && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghostLine",
            onClick: () => setStep(Math.max(0, step - 1)),
            className: "h-12 px-5",
            disabled: step === 0,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {}),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", onClick: next, children: [
          step === steps.length - 1 ? "Confirm Booking" : "Continue",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {})
        ] })
      ] })
    ] })
  ] }) });
}
function InstagramSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-[2.5rem] overflow-hidden p-10 lg:p-16 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.24_258/0.25),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }),
          " @sparkedge"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-4xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1]", children: [
          "Follow the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "transformation" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/70 max-w-md", children: "Daily before-and-afters, behind-the-scenes, and client stories — straight from our crews." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[480px]", children: [
        [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -15, 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] },
            transition: { duration: 5 + i, repeat: Infinity, delay: i * 0.5 },
            className: "absolute glass-strong rounded-3xl overflow-hidden shadow-elegant",
            style: {
              width: 220,
              height: 280,
              top: `${i * 40}px`,
              left: `${i * 80 + 40}px`,
              zIndex: 3 - i
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.4),oklch(0.72_0.19_152/0.4))] flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 border-b border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-white", children: "sparkedge" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center text-5xl", children: ["✨", "🧽", "💎"][i] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-xs text-white/70", children: ["Marble restoration", "Deep kitchen detail", "Spotless handover"][i] })
            ] })
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 h-32 w-32 glass-strong rounded-2xl p-3 grid grid-cols-8 gap-[2px]", children: Array.from({ length: 64 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `rounded-[1px] ${[0, 1, 6, 7, 8, 15, 48, 55, 56, 57, 62, 63].includes(i) || Math.random() > 0.6 ? "bg-white" : "bg-transparent"}`
          },
          i
        )) })
      ] })
    ] })
  ] }) }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-32 lg:py-48 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1500px] px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "inline-flex items-center rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white/70",
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-6 text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1]",
          children: [
            "Let's talk ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "clean" }),
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/70 max-w-md", children: "Reach out for a free on-site inspection. We respond within 2 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: [
        { icon: Phone, label: "Call us", value: "85558 77790", href: "tel:8555877790" },
        { icon: Mail, label: "Email", value: "info@sparkedge.in", href: "mailto:info@sparkedge.in" },
        { icon: MapPin, label: "Visit", value: "Visakhapatnam, AP", href: "#map" }
      ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.a,
        {
          href: c.href,
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          whileHover: { x: 6 },
          className: "group flex items-center gap-4 glass rounded-2xl p-5 hover:shadow-glow transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.58_0.24_258/0.2),oklch(0.72_0.19_152/0.2))] border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-emerald" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/50", children: c.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium text-white", children: c.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" })
          ]
        },
        c.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "relative aspect-square rounded-3xl overflow-hidden glass-strong shadow-elegant",
        id: "map",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.16_0.04_258)_0%,oklch(0.04_0.02_258)_100%)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-40", viewBox: "0 0 400 400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid-map", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "oklch(0.7 0.2 258)", strokeWidth: "0.3" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "400", fill: "url(#grid-map)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50 200 Q 150 100 250 200 T 400 180", stroke: "oklch(0.58 0.24 258)", strokeWidth: "2", fill: "none", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 250 Q 100 220 200 280 T 400 260", stroke: "oklch(0.72 0.19 152)", strokeWidth: "2", fill: "none", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 100 0 Q 120 150 100 300 T 80 400", stroke: "oklch(0.58 0.24 258)", strokeWidth: "1.5", fill: "none", opacity: "0.4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 2, 1], opacity: [0.6, 0, 0.6] },
                transition: { duration: 2.5, repeat: Infinity },
                className: "absolute inset-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-emerald"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] },
                transition: { duration: 2.5, repeat: Infinity, delay: 0.5 },
                className: "absolute inset-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-electric"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-6 w-6 rounded-full bg-[linear-gradient(135deg,oklch(0.58_0.24_258),oklch(0.72_0.19_152))] shadow-glow" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-emerald mb-1", children: "Headquarters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-white", children: "Visakhapatnam, Andhra Pradesh" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/60 mt-1", children: "Serving the entire coastal region" })
          ] })
        ]
      }
    )
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative pt-32 lg:pt-48 pb-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.58_0.24_258/0.3),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute h-1 w-1 rounded-full bg-emerald/60",
        style: { left: `${i * 71 % 100}%`, top: `${i * 43 % 100}%` },
        animate: { y: [0, -40, 0], opacity: [0.2, 1, 0.2] },
        transition: { duration: 5 + i % 4, repeat: Infinity, delay: i * 0.3 }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1500px] px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-6xl lg:text-9xl font-bold text-white tracking-[-0.04em] leading-[0.9]", children: [
              "Ready for a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "cleaner" }),
              " space?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "hero",
                size: "xl",
                className: "text-lg h-16 px-10",
                onClick: () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }),
                children: [
                  "Book Free Inspection",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32 pt-12 border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SparkEdgeLogo, { showSubtitle: true, className: "h-16 w-auto", lightText: true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/60 max-w-xs", children: "Professional deep cleaning & housekeeping services for homes, offices, and facilities." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/50 mb-4", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Residential Deep Cleaning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Commercial Cleaning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Facility Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Floor Scrubbing" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/50 mb-4", children: "Reach us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:8555877790", className: "hover:text-white", children: "85558 77790" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@sparkedge.in", className: "hover:text-white", children: "info@sparkedge.in" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Visakhapatnam, AP" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " SparkEdge. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Crafted with precision." })
        ] })
      ] })
    ] })
  ] });
}
function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const [hide, setHide] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setHide(window.matchMedia("(pointer: coarse)").matches);
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  if (hide) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: {
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%"
      },
      className: "pointer-events-none fixed top-0 left-0 z-[100] h-[400px] w-[400px] rounded-full mix-blend-screen",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-full bg-[radial-gradient(circle,oklch(0.58_0.24_258/0.18),transparent_60%)]" })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clients, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Booking, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
