export default function Services() {
  type Service = {
    title: string;
    description: string;
  };

  const services: Service[] = [
    {
      title: "Power BI Dashboards",
      description:
        "Interactive dashboards with KPIs, filters, drill-downs, and business insights for decision-making.",
    },
    {
      title: "Data Analysis (Python / SQL)",
      description:
        "Data cleaning, EDA, visualization, and actionable insight generation using Python, SQL, and analytics tools.",
    },
    {
      title: "Machine Learning Models",
      description:
        "Predictive models for classification, detection, forecasting, and real-world AI applications.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-24 px-6 md:px-20 bg-slate-950 text-white"
    >
      {/* Divider */}
      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6
                         hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                         hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400 mb-4"></div>

              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}