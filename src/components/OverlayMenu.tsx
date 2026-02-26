import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

type OverlayMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Projetos", id: "projects" },
    { label: "Experiência", id: "experience" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-white text-3xl cursor-pointer"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-[#f97316] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
