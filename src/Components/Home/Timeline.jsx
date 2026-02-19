import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const modules = [
  { version: "2019", label: "10th Grade", year: "St. Ursula's Anglo Indian Higher Secondary School" },
  { version: "2021", label: "12th Grade", year: "St. Ursula's Anglo Indian Higher Secondary School" },
  { version: "2022", label: "Fresher", year: "Sri Sairam Engineering College" },
  { version: "2023", label: "AI Internship", year: "Plasmid Technologies" },
  { version: "2024", label: "Software Dev Internship", year: "Genik Technologies Pvt Ltd" },
  { version: "2026", label: "Graduated", year: "Sri Sairam Engineering College" }
];

export default function Timeline() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [status, setStatus] = useState("INITIALIZING...");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < modules.length) {
        setVisibleCount(prev => prev + 1);
        index++;
      } else {
        setStatus("SYSTEM STABLE");
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#c1ff72_1px,transparent_1px),linear-gradient(90deg,#c1ff72_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Subtle Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(193,255,114,0.08),transparent_70%)]"
      />

      <div className="relative z-10 grid grid-cols-2 h-full">

        {/* LEFT IMAGE */}
        <div className="h-full flex items-start justify-center pt-36">
          <motion.img
            src="/timeline_image.jpg"
            alt="Timeline Visual"
            className="w-[75%] h-[60%] object-cover rounded-2xl border border-[#c1ff72]/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </div>

        {/* RIGHT CONSOLE */}
        <div className="h-full flex flex-col justify-start pt-28 px-14">

          {/* TITLE */}
          <h2 className="text-[#c1ff72] text-2xl font-semibold tracking-widest mb-2">
            TIMELINE
          </h2>

          {/* STATUS */}
          <div className="text-[#c1ff72] text-xs mb-6 tracking-wide">
            STATUS: <span className="text-white">{status}</span>
          </div>

          {/* TIMELINE WRAPPER */}
          <div className="relative h-[60%]">

            {/* Vertical Line */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-[#c1ff72]/30" />

            {/* Pulse */}
            <motion.div
              animate={{
                top: `${(visibleCount / modules.length) * 100}%`
              }}
              transition={{ duration: 0.4 }}
              className="absolute left-2 w-[6px] h-6 bg-[#c1ff72] rounded-full shadow-[0_0_15px_#c1ff72] -translate-y-1/2"
            />

            {/* Modules */}
            <div className="space-y-4 pl-10">
              {modules.slice(0, visibleCount).map((mod, i) => (
                <Module key={i} data={mod} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* ================= MODULE ================= */

function Module({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <div className="absolute -left-[28px] top-1.5 w-3 h-3 bg-[#c1ff72] rounded-full shadow-[0_0_10px_#c1ff72]" />

      <div className="bg-[#0b0b0b] border border-white/10 rounded-lg p-3">
        <h3 className="text-[#c1ff72] font-medium text-sm">
          {data.version} — {data.label}
        </h3>
        <p className="text-gray-400 text-xs mt-1 leading-tight">
          {data.year}
        </p>
        <p className="text-[#c1ff72] text-[10px] mt-1">
          ✓ VERIFIED
        </p>
      </div>
    </motion.div>
  );
}
