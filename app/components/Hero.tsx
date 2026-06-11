export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      {/* NAME */}
      <h1 className="text-6xl md:text-8xl font-extrabold">
        Gobinathan K
      </h1>

      {/* ROLE */}
      <p className="mt-4 text-slate-300 text-lg">
        Data Analyst | Power BI Developer | AI & Machine Learning Enthusiast
      </p>

      {/* TAGLINE */}
      <p className="mt-4 max-w-xl text-slate-400">
        Transforming raw data into meaningful insights using Python, SQL,
        Power BI, and Machine Learning models.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex gap-10">
  <div>
    <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
    <p className="text-slate-400">Projects</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
    <p className="text-slate-400">Certifications</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-cyan-400">1</h3>
    <p className="text-slate-400">Internship</p>
  </div>
</div>

    </section>
  );
}