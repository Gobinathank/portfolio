export default function TechStack() {
  const tech = [
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Excel",
    "Tableau",
    "OpenCV",
    "Deep Learning",
  ];

  return (
    <section className="py-8 bg-slate-950">
      <div className="flex flex-wrap justify-center gap-4">
        {tech.map((item) => (
          <div
            key={item}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}