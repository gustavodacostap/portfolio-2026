import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [forceVisible, setForceVisible] = useState<boolean>(false);

  const lastScrollY = useRef<number>(0);
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    const homeSection = document.querySelector<HTMLElement>("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 },
    );
    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setVisible(true);
        return;
      }

      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);

        if (timerId.current) clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible, menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center space-x-2">
          <img src="/logo-g.dev.svg" alt="logo" className="h-12" />
        </div>

        <div className="block">
          <button
            onClick={() => {
              setMenuOpen(true);
            }}
            className="text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
      />
    </>
  );
}
