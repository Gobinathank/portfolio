export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-slate-950 text-white"
    >
      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>

        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Turning Data Into Decisions
            </h3>

            <p className="text-slate-300 leading-8">
              I am an aspiring Data Scientist and Data Analyst with hands-on
              experience in Python, SQL, Machine Learning, Power BI and Data
              Visualization.
            </p>

            <br />

            <p className="text-slate-300 leading-8">
              My work focuses on transforming raw datasets into meaningful
              business insights through ETL pipelines, dashboards, predictive
              models and automation solutions.
            </p>

            <br />

            <p className="text-slate-300 leading-8">
              From IPL analytics and AI chatbots to computer vision systems and
              workflow automation platforms, I enjoy building solutions that
              solve real-world problems.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
              <p className="text-slate-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400 mt-2">Technologies</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
              <p className="text-slate-400 mt-2">Certifications</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">2026</h3>
              <p className="text-slate-400 mt-2">Graduate</p>
            </div>

          </div>

        </div>
      
    </section>
  );
}