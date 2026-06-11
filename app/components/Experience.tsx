export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* FREELANCER */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Freelancer – Data Analyst & Developer
          </h3>
          <p className="text-gray-600 mt-2">
            Built JSR Job Status Management System for workflow tracking,
            dashboards, and KPI monitoring. Worked on automation tools,
            data pipelines, and analytics solutions for real-world use cases.
          </p>
        </div>

        {/* NSIC */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">
            Web Development Intern – NSIC Chennai
          </h3>
          <p className="text-gray-600 mt-2">
            Developed responsive websites using HTML, CSS, JavaScript, PHP,
            and MySQL. Managed deployment, server maintenance, and backend
            integration for business applications.
          </p>
        </div>

      </div>
    </section>
  );
}