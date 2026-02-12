export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-transparent">

      {/* Logo / Name */}
      <h1 className="font-anton text-xl tracking-wide text-neon">
        MADHUMITHA DASARATHY
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-10 font-poppins text-sm">

        <a href="#home" className="hover:text-neon transition">
          Home
        </a>

        <a href="#projects" className="hover:text-neon transition">
          Projects
        </a>

        <a href="#achievements" className="hover:text-neon transition">
          Achievements
        </a>

        <a href="#certifications" className="hover:text-neon transition">
          Certifications
        </a>

        <a href="#extra" className="hover:text-neon transition">
          Extra Curriculars
        </a>

      </nav>

      {/* Contact Button */}
      <button className="bg-neon text-black px-6 py-2 rounded-full font-poppins font-medium hover:scale-105 transition">
        Contact
      </button>

    </header>
  );
}
