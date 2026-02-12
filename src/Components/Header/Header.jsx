export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-anton text-neon text-xl tracking-wide">
          MADHUMITHA DASARATHY
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-poppins text-white">
          <a href="#home" className="hover:text-neon transition">Home</a>
          <a href="#projects" className="hover:text-neon transition">Projects</a>
          <a href="#achievements" className="hover:text-neon transition">Achievements</a>
          <a href="#certifications" className="hover:text-neon transition">Certifications</a>
          <a href="#extra" className="hover:text-neon transition">Extra Curriculars</a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-neon text-black font-semibold hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
