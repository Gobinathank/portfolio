export default function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Freelance Data Analyst & Developer",
      description:
        "Designed and developed the JSR Job Status Management System featuring KPI dashboards, workflow automation, overdue tracking, reporting, and business process monitoring using Google Sheets and analytics-driven solutions.",
    },
    {
      year: "2024",
      title: "Web Development Intern – NSIC Chennai",
      description:
        "Developed responsive business websites using HTML, CSS, JavaScript, PHP, and MySQL. Managed deployment, hosting, database integration, SSL setup, and maintenance activities.",
    },
    {
      year: "2024 - 2025",
      title: "Microsoft Learn Certifications",
      description:
        "Completed certifications in Microsoft Excel, Power BI Dashboarding, ETL Processes, Data Analysis, and Business Intelligence reporting.",
    },
    {
      year: "2022 - Present",
      title: "AI & Data Science Journey",
      description:
        "Built real-world projects in Machine Learning, Computer Vision, Data Analytics, Web Scraping, Power BI, and AI-powered applications while pursuing B.Tech in Artificial Intelligence and Data Science.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-slate-950 text-white"
    >
      {/* Divider */}
      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Experience & Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-700"></div>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-14"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-cyan-400 border-4 border-slate-950"></div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-300">

                <span className="text-cyan-400 text-sm font-semibold">
                  {exp.year}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {exp.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  {exp.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}