import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectLink?: string;
  children: ReactNode;
};

export default function Dialog({
  isOpen,
  onClose,
  projectTitle,
  projectLink,
  children,
}: DialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-5"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div
              className="relative w-full max-w-3xl lg:max-w-[70vw] max-h-[90vh] bg-[#090f28] text-white rounded-xl shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3">
                <div className="flex gap-3">
                  <h1 className="text-3xl sm:text-4xl bg-clip-text font-bold text-transparent bg-linear-to-r from-[#f97316] to-[#e9bc40]">
                    {projectTitle}
                  </h1>

                  {projectLink && (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer text-white font-semibold p-3 hover:bg-[#181d33] transition"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center text-white text-xl font-bold cursor-pointer rounded-full p-3 hover:bg-[#181d33] transition"
                >
                  <FiX className="w-5 h-5" />{" "}
                </button>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-3 flex-1 min-h-0 overflow-y-auto dialog-content">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
