import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(window.matchMedia("(pointer: coarse)").matches);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (hide) return null;

  return (
    <motion.div
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-[100] h-[400px] w-[400px] rounded-full mix-blend-screen"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,oklch(0.58_0.24_258/0.18),transparent_60%)]" />
    </motion.div>
  );
}
