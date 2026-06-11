export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">

      {/* NAME */}
      <h1 className="text-5xl md:text-6xl font-bold">
        Gobinathan K
      </h1>

      {/* ROLE */}
      <p className="mt-4 text-gray-600 text-lg">
        Data Science • AI • Machine Learning • Data Analyst
      </p>

      {/* TAGLINE */}
      <p className="mt-4 max-w-xl text-gray-500">
        Transforming raw data into meaningful insights using Python, SQL,
        Power BI, and Machine Learning models.
      </p>

      {/* BUTTONS */}
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-full"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border rounded-full"
          download
        >
          Download Resume
        </a>
      </div>

    </section>
  );
}