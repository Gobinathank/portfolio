export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-white">

      <h2 className="text-3xl font-bold text-center mb-10">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="border p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-bold">Power BI Dashboards</h3>
          <p className="text-gray-600 mt-2">
            Interactive dashboards with KPIs, filters, and insights.
          </p>
        </div>

        <div className="border p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-bold">Data Analysis (Python / SQL)</h3>
          <p className="text-gray-600 mt-2">
            Data cleaning, EDA, and business insight generation.
          </p>
        </div>

        <div className="border p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-bold">Machine Learning Models</h3>
          <p className="text-gray-600 mt-2">
            Predictive models for classification, detection, and forecasting.
          </p>
        </div>

      </div>
    </section>
  );
}