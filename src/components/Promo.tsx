import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/e7653b1b-7c28-4614-a111-bd2cc5f16844/files/cb3ef488-16da-4533-95fa-e62315fcc09d.jpg"
            alt="Эстетика Lady&Gentleman"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-amber-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-[0.2em]">
        Философия красоты
      </h3>

      <p className="absolute bottom-12 right-6 text-white font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Мы создаём не просто образ — мы раскрываем вашу индивидуальность,
        подчёркивая естественную красоту в каждой детали.
      </p>
    </div>
  );
}