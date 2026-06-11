export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
      <div className="flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <div className="font-bold text-xl">
          GK
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="px-4 py-2 bg-black text-white rounded-full text-sm"
        >
          Hire Me
        </a>

      </div>
    </nav>
  );
}