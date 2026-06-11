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
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {skillGroups.map((group, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">

            <h3 className="font-semibold mb-4 text-lg">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
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