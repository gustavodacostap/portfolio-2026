import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    Icon: FaLinkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/perfil-gustavo-da-costa/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/gustavodacostap",
  },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 12px rgba(56, 189, 248, 0.8)) drop-shadow(0 0 20px rgba(249, 115, 22, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-[#f8fafc]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(249,115,22,0.20),transparent_70%)]" />

      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-semibold leading-none text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            textShadow: "0 2px 18px rgba(0, 0, 0, 0.45)",
          }}
        >
          Gustavo da Costa
        </h1>
        <div className="h-0.75 w-24 md:w-32 rounded-full bg-linear-to-r from-[#f97316] to-[#e9bc40]" />
        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              href={href}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 italic max-w-xl">
          "Success is when preparation meets oportunity"
        </p>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Gustavo da Costa. All rights
          reserved
        </p>
      </motion.div>
    </footer>
  );
}
