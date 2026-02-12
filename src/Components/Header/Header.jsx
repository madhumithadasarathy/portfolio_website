import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Experience", href: "#work" }, // Changed
    { name: "Extra Curriculars", href: "#extra" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300
      ${scrolled ? "py-2" : "py-5"}`}
    >
      <div
        className={`w-[88%] max-w-5xl flex justify-between items-center
        rounded-2xl backdrop-blur-xl transition-all duration-300
        ${scrolled ? "bg-black/70 shadow-lg" : "bg-black/50"}
        px-10`}
      >
        {/* New Logo */}
{/* Logo */}
<div
  className={`flex items-center justify-center rounded-full bg-[#c1ff72]
  ${scrolled ? "w-8 h-8" : "w-9 h-9"}
  transition-all duration-300`}
>
  <span
    className={`font-bold ${
      scrolled ? "text-sm" : "text-base"
    } text-black`}
  >
    M
  </span>
</div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 font-poppins text-xs text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`transition duration-300 ${
                active === link.href
                  ? "text-neon"
                  : "hover:text-neon"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className="ml-6 px-4 py-1.5 rounded-full bg-neon text-black font-semibold -mt-1 text-xs hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <CloseIcon sx={{ color: "#c1ff72" }} />
            ) : (
              <MenuIcon sx={{ color: "#c1ff72" }} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 w-[88%] max-w-5xl bg-black/90 backdrop-blur-xl rounded-2xl px-8 py-6 flex flex-col gap-6 font-poppins text-sm text-white shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`transition ${
                  active === link.href
                    ? "text-neon"
                    : "hover:text-neon"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => {
                setActive("#contact");
                setOpen(false);
              }}
              className="mt-2 px-4 py-2 rounded-full bg-neon text-black font-semibold text-center"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
