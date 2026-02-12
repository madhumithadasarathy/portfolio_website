import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative 
        min-h-screen 
        flex flex-col 
        justify-center 
        items-center 
        overflow-hidden 
        px-6 
        pt-28
        bg-[radial-gradient(circle_at_center_55%,#1a1a1a_0%,#0a0a0a_45%,#000000_80%)]
      "
    >
      {/* ===== Studio Lighting Layer ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Subject Spotlight */}
        <div
          className="
            absolute 
            top-[40%] 
            left-1/2 
            -translate-x-1/2 
            w-[800px] 
            h-[500px] 
            bg-[#c1ff72]/6 
            blur-[160px] 
            rounded-full
          "
        />

        {/* Vignette Depth */}
        <div
          className="
            absolute 
            inset-0 
            bg-gradient-to-b 
            from-black/40 
            via-transparent 
            to-black/80
          "
        />
      </div>

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

      {/* ===== HERO IMAGE (NOW ABOVE TEXT) ===== */}
      <motion.img
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="/madhumitha_hero.svg"
        alt="Madhumitha"
        className="
          absolute
          top-[35%]
          left-[40%]
          -translate-x-1/2
          -translate-y-1/2
          w-[190px] md:w-[300px]
          object-contain
          z-20
          brightness-85
          contrast-100
          saturate-70
        "
      />

      {/* ===== SOCIAL ICONS ===== */}
      <div className="absolute bottom-10 left-10 flex gap-5 text-neon text-xl z-30">
        <FaInstagram className="cursor-pointer hover:scale-125 transition" />
        <FaLinkedin className="cursor-pointer hover:scale-125 transition" />
        <FaGithub className="cursor-pointer hover:scale-125 transition" />
      </div>

      {/* ===== FOOTER LINK ===== */}
      <p className="absolute bottom-10 right-10 font-poppins text-sm text-gray-400 z-30">
        github.com/madhumithadasarathy
      </p>

    </section>
  );
}
