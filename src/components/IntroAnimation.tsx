import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type IntroAnimationProps = {
  onFinish: () => void;
};

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const controls = useAnimation();
  const [startExit, setStartExit] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // ENTRADA (sobe + fade in)
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // PAUSA
      await new Promise((resolve) => setTimeout(resolve, 800));

      // SAÍDA (desce + fade out)
      await controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3, ease: "easeIn" },
      });

      // Inicia slide da tela
      setStartExit(true);
    };

    sequence();
  }, [controls]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
          initial={{ y: 0 }}
          animate={startExit ? { y: "-100%" } : { y: 0 }}
          transition={{
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            if (startExit) setVisible(false);
          }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f97316] to-[#e9bc40]"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            Welcome!
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
