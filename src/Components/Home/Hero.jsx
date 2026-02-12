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
        px-4 lg:px-6
        pt-28
        bg-[radial-gradient(circle_at_center_55%,#1a1a1a_0%,#0a0a0a_45%,#000000_80%)]
      "
    >
      {/* ===== Studio Lighting Layer ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c1ff72]/6 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* ===== HERO TEXT CONTENT ===== */}
      <div className="relative z-10 -translate-y-16 lg:-translate-y-24">

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-neon font-playlist text-center text-3xl lg:text-5xl mb-1"
        >
          Engineering Intelligent Systems
        </motion.h2>

        {/* Name + Paragraph Wrapper */}
        <div className="inline-block">

{/* Name */}
<motion.h1
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="
    font-poppins font-extrabold
    text-[12vw] sm:text-[13vw] lg:text-[13vw]
    leading-[0.9]
    text-gray-200
  "
>
  MADHUMITHA
</motion.h1>

{/* Roles — directly attached */}
<p className="
  hidden lg:block
  font-poppins
  text-sm
  text-gray-300
  mt-2
">
  <span>AI Engineer</span>
  <span className="text-neon mx-[6px]">•</span>
  <span>Web Developer</span>
  <span className="text-neon mx-[6px]">•</span>
  <span>Artist</span>
  <span className="text-neon mx-[6px]">•</span>
  <span>Musician</span>
</p>


          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              font-poppins
              mt-2 lg:mt-1
              text-xs lg:text-sm
              text-gray-300
              max-w-[85%] sm:max-w-[80%] lg:max-w-lg
              leading-relaxed
              text-center lg:text-left
              mx-auto lg:mx-0
            "
          >
            I am an AI engineer and software developer passionate about building
            intelligent systems that solve real-world problems through machine
            learning, research, and scalable software design.
          </motion.p>

          {/* ===== BUTTONS (ONLY ADDITION) ===== */}
          <div className="mt-5 flex gap-4 justify-center lg:justify-start">
            
            <button className="
              bg-[#c1ff72]
              text-black
              font-poppins
              px-6 py-2.5
              rounded-full
              font-semibold
              text-sm
              hover:scale-105
              transition
            ">
              Know More
            </button>

            <button className="
              border border-white/40
              text-white
              font-poppins
              px-6 py-2.5
              rounded-full
              text-sm
              hover:bg-white/10
              transition
            ">
              Contact
            </button>

          </div>

        </div>
      </div>
      {/* ===== RIGHT SIDE ROLE TEXT (Desktop Only) ===== */}





      {/* ===== HERO IMAGE (Hidden on Mobile) ===== */}
      <motion.img
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="/madhumitha_hero.svg"
        alt="Madhumitha"
        className="
          hidden lg:block
          absolute
          top-[35%]
          left-[40%]
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          object-contain
          z-20
          brightness-85
          contrast-100
          saturate-70
        "
      />

      {/* ===== SOCIAL ICONS ===== */}
      <div className="absolute bottom-10 left-6 lg:left-10 flex gap-5 text-neon text-xl z-30">
        <FaInstagram className="cursor-pointer hover:scale-125 transition" />
        <FaLinkedin className="cursor-pointer hover:scale-125 transition" />
        <FaGithub className="cursor-pointer hover:scale-125 transition" />
      </div>

      {/* ===== FOOTER LINK ===== */}
      <p className="absolute bottom-10 right-6 lg:right-10 font-poppins text-xs lg:text-sm text-gray-400 z-30">
        github.com/madhumithadasarathy
      </p>
    </section>
  );
}
