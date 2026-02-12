import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-28"
    >
      {/* ===== HERO TEXT CONTENT ===== */}
      <div className="text-center relative z-10">

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-neon font-playlist text-3xl md:text-5xl mb-6"
        >
          Engineering Intelligent Systems
        </motion.h2>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-poppins font-extrabold text-[15vw] md:text-[11vw] leading-none text-gray-200"
        >
          MADHUMITHA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-poppins mt-6 text-base md:text-lg"
        >
          AI Engineer <span className="text-neon">•</span> Software Developer{" "}
          <span className="text-neon">•</span> ML Researcher
        </motion.p>

      </div>

      {/* ===== HERO IMAGE ===== */}
<motion.img
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  src="/madhumitha_hero.svg"
  alt="Madhumitha"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 
             w-[220px] md:w-[320px] 
             object-contain z-0"
/>


      {/* ===== SOCIAL ICONS ===== */}
      <div className="absolute bottom-10 left-10 flex gap-5 text-neon text-xl">
        <FaInstagram className="cursor-pointer hover:scale-125 transition" />
        <FaLinkedin className="cursor-pointer hover:scale-125 transition" />
        <FaGithub className="cursor-pointer hover:scale-125 transition" />
      </div>

      {/* ===== FOOTER LINK ===== */}
      <p className="absolute bottom-10 right-10 font-poppins text-sm text-gray-400">
        github.com/madhumithadasarathy
      </p>

    </section>
  );
}
