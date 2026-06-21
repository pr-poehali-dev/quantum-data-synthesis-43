import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e7653b1b-7c28-4614-a111-bd2cc5f16844/files/f2df3ab4-020c-458f-845f-e0010b3f1f49.jpg"
          alt="Салон красоты Lady&Gentleman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-6">
          Салон красоты премиум-класса
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
          Lady<span className="text-amber-400">&</span>Gentleman
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
          Искусство красоты для тех, кто ценит безупречность и заботу о себе
        </p>
      </div>
    </div>
  );
}