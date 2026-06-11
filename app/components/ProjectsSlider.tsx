"use client";

import { useRef, useState } from "react";

const projects = [
  {
    title: "JSR Job Status Management System",
    tech: "Google Sheets • KPI Monitoring • Workflow Automation",
    desc: "Built a complete job tracking system with status monitoring, overdue tracking, dashboards and KPI reporting.",
    img: "/projects/jsr.png",
    github: "#",
    featured: true
  },
  {
    title: "IPL Performance Analytics Dashboard",
    tech: "Power BI • Python • Playwright • BeautifulSoup",
    desc: "Analyzed 75+ IPL matches and 10k+ records to generate player and team performance insights.",
    img: "/projects/ipl.png",
    github: "https://github.com/Gobinathank/End-To-End-IPL-2025-Data-Analytics-Project-"
  },
  {
    title: "IntelliWaste",
    tech: "Django • Python • CNN • ResNet50",
    desc: "AI-powered waste classification system trained on 25,000+ images for real-time waste detection.",
    img: "/projects/waste.png",
    github: "https://github.com/Gobinathank/Waste-Management-Classifier-Web-App"
  },
  {
    title: "AI Food Ordering Chatbot",
    tech: "Dialogflow • FastAPI • MySQL",
    desc: "Chatbot for automated food ordering and order tracking using NLP intent recognition.",
    img: "/projects/chatbot.png",
    github: "https://github.com/Gobinathank/AI-Chatbot-for-Food-Ordering-and-Tracking"
  },
  {
    title: "Dehazing & Human Detection",
    tech: "OpenCV • Python • Deep Learning",
    desc: "Computer vision system for fog removal and human detection in low-visibility environments.",
    img: "/projects/dehaze.png",
    github: "https://github.com/Gobinathank/Dehazing_and_Human_Detection"
  }
];

export default function ProjectsSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      {/* ARROWS */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => scroll("left")}
          className="px-3 py-1 border rounded"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="px-3 py-1 border rounded"
        >
          →
        </button>
      </div>

      {/* SLIDER */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 min-w-[380px] min-h-[280px] flex flex-col hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white">
              {p.title}
            </h3>

            <p className="text-cyan-400 text-sm mt-3">
              {p.tech}
            </p>

            <p className="text-slate-400 text-sm mt-4 flex-grow leading-6">
              {p.desc}
            </p>

            <a
              href={p.github}
              target="_blank"
              className="mt-5 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white p-6 rounded-xl max-w-md">
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <p className="mt-2 text-gray-600">{selected.desc}</p>

            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}