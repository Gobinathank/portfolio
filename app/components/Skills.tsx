export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "R", "HTML"]
    },
    {
      title: "Data Analysis",
      skills: ["Pandas", "NumPy", "Excel"]
    },
    {
      title: "Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"]
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "Deep Learning"]
    },
    {
      title: "Web Scraping",
      skills: ["BeautifulSoup", "Playwright"]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20 bg-slate-900 text-white"
    >
      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>

        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-5 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      
    </section>
  );
}