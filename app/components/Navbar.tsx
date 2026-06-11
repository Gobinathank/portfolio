export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <a
          href="#home"
          className="font-bold text-2xl text-cyan-400 hover:text-cyan-300 transition"
        >
          GK
        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#services" className="text-slate-300 hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-3">

          {/* HIRE ME FIRST */}
          <a
            href="#contact"
            className="px-5 py-2 bg-cyan-400 text-black rounded-full text-sm font-semibold hover:bg-cyan-300 transition"
          >
            Hire Me
          </a>

          {/* RESUME NEXT */}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>

        </div>

      </div>
    </nav>
  );
}