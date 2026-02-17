import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <section className="w-full bg-black px-4 lg:px-16 py-24">
      {/* ===== MAIN LAYOUT ===== */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:w-1/2 grid grid-cols-2 auto-rows-[180px] gap-6">

          {/* ABOUT */}
          <motion.div
            className="col-span-2 bg-[#0b0b0b] rounded-2xl p-6 border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-neon font-playlist text-3xl mb-3">
              About Me
            </h3>

            <p className="text-gray-400 text-sm font-poppins leading-relaxed">
              I build intelligent systems combining AI, software engineering,
              and creative technology to create scalable and meaningful
              digital solutions.
            </p>
          </motion.div>

          {/* CORE SKILLS */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-poppins mb-2">Core Skills</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI • ML • Web Development • System Design • Data Science •
              Python Development • Generative AI • SAP
            </p>
          </div>

          {/* PROGRAMMING LANGUAGES */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-poppins mb-2">
              Programming Languages
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Python • Java • C • C++ • SQL • R
            </p>
          </div>

          {/* CGPA */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-poppins text-sm">CGPA</h4>
            <p className="text-neon text-3xl font-bold mt-2">8.59</p>
            <p className="text-gray-400 text-xs mt-1">
              B.E Computer Science & Engineering (AI & ML)
            </p>
          </div>

          {/* LANGUAGES KNOWN */}
          <div className="bg-[#0b0b0b] rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-poppins mb-2">
              Languages Known
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tamil • English • French • Japanese • Hindi
            </p>
          </div>

          {/* FOCUS */}
          <div className="col-span-2 bg-[#0b0b0b] rounded-2xl p-6 border border-white/5">
            <h4 className="text-white font-poppins mb-2">
              Focus Areas
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent automation, scalable platforms,
              and human-centered engineering solutions.
            </p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <motion.div
          className="
            lg:w-1/4
            bg-[#0b0b0b]
            rounded-2xl
            p-8
            border border-white/5
          "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-neon font-playlist text-2xl mb-8">
            Academic Timeline
          </h3>

          {/* Timeline */}
          <div className="relative pl-8 space-y-12">

            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10" />

            {/* ITEM */}
            <div className="relative">
              <div className="absolute -left-[10px] top-2 w-3.5 h-3.5 bg-[#c1ff72] rounded-full" />
              <h4 className="text-white font-semibold text-sm">
                10th Standard — 2019
              </h4>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                93.2% • St. Ursula's Anglo Indian Higher Secondary School
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[10px] top-2 w-3.5 h-3.5 bg-[#c1ff72] rounded-full" />
              <h4 className="text-white font-semibold text-sm">
                12th Standard — 2021
              </h4>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                95.6% • St. Ursula's Anglo Indian Higher Secondary School
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[10px] top-2 w-3.5 h-3.5 bg-[#c1ff72] rounded-full" />
              <h4 className="text-white font-semibold text-sm">
                Bachelor of Engineering — 2022 → 2026
              </h4>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                CGPA 8.59 • Sri Sairam Engineering College
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="
            lg:w-1/4
            rounded-2xl
            overflow-hidden
            border border-white/5
            relative
          "
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/bento_image.jpeg"
            alt="Madhumitha"
            className="w-full h-full object-contain bg-black"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
