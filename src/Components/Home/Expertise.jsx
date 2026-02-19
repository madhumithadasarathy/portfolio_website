import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Expertise() {
  return (
    <motion.section
      className="w-full h-screen bg-black px-6 lg:px-24 py-14 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="max-w-[1800px] mx-auto h-full grid lg:grid-cols-4 gap-6">

        {/* ================= LEFT BENTO ================= */}
        <div className="lg:col-span-2 h-full grid grid-cols-2 grid-rows-6 gap-4">

          {/* ABOUT */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative col-span-2 row-span-2 bg-[#0b0b0b] rounded-2xl p-6 border border-white/10 transition-all duration-300 overflow-hidden"
          >
            <GlowLayer />
            <h3 className="text-[#c1ff72] font-playlist text-2xl mb-3 relative z-10">
              About Me
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              I am Madhumitha Dasarathy, a Computer Science and Engineering (AI & ML)
              student focused on intelligent system design and scalable software
              development. I build data-driven platforms that combine AI,
              backend architecture, and user-centered design.
            </p>
          </motion.div>

          <Card title="Core Skills">
            AI • ML • Web • System Design • Data Science • Python • Gen AI
          </Card>

          <Card title="Programming">
            Python • Java • C • C++ • SQL • R
          </Card>

          {/* CGPA */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#0b0b0b] rounded-2xl p-5 border border-white/10 flex flex-col justify-center transition-all duration-300 overflow-hidden"
          >
            <GlowLayer />
            <h4 className="text-gray-400 text-md relative z-10">CGPA</h4>
            <p className="text-[#c1ff72] text-3xl font-bold mt-1 relative z-10">
              8.59
            </p>
          </motion.div>

          {/* CURRENTLY EXPLORING */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-[#0b0b0b] rounded-2xl p-5 border border-white/10 transition-all duration-300 overflow-hidden"
          >
            <GlowLayer />
            <h4 className="text-[#c1ff72] text-lg mb-2 font-semibold relative z-10">
              Currently Exploring
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              LLMs • Agentic AI • MLOps • System Scalability • Distributed Systems
            </p>
          </motion.div>

          <Card title="Languages" colSpan>
            Tamil • English • French • Japanese • Hindi
          </Card>

          {/* FOCUS */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative col-span-2 row-span-2 bg-[#0b0b0b] rounded-2xl p-6 border border-white/10 transition-all duration-300 overflow-hidden"
          >
            <GlowLayer />
            <h4 className="text-[#c1ff72] text-lg mb-2 font-semibold relative z-10">
              Focus Areas
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Intelligent automation, scalable platforms and
              human-centered engineering solutions.
            </p>
          </motion.div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          className="lg:col-span-2 h-full rounded-2xl overflow-hidden border border-white/10 relative bg-gradient-to-b from-[#0f0f0f] to-[#050505]"
        >
          <img
            src="/bento_image.jpeg"
            alt="Madhumitha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

      </div>
    </motion.section>
  );
}


/* ================= REUSABLE CARD ================= */

function Card({ title, children, colSpan }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className={`group relative ${
        colSpan ? "col-span-2" : ""
      } bg-[#0b0b0b] rounded-2xl p-5 border border-white/10 transition-all duration-300 overflow-hidden`}
    >
      <GlowLayer />
      <h4 className="text-[#c1ff72] text-lg mb-2 font-semibold relative z-10">
        {title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed relative z-10">
        {children}
      </p>
    </motion.div>
  );
}


/* ================= GLOW EFFECT ================= */

function GlowLayer() {
  return (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_center,rgba(193,255,114,0.18),transparent_70%)]" />
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#c1ff72] transition duration-300" />
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_0px_0px_rgba(193,255,114,0)] group-hover:shadow-[0_0_25px_5px_rgba(193,255,114,0.35)] transition duration-300" />
    </>
  );
}
