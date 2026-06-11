"use client";

import { useRef, useState } from "react";

const projects = [
  {
    title: "JSR System",
    img: "/projects/jsr.png",
    desc: "Job Status Management System with tracking dashboard"
  },
  {
    title: "IPL Dashboard",
    img: "/projects/ipl.png",
    desc: "Cricket analytics using Power BI & Python"
  },
  {
    title: "IntelliWaste AI",
    img: "/projects/waste.png",
    desc: "AI waste classification using CNN"
  },
  {
    title: "AI Chatbot",
    img: "/projects/chatbot.png",
    desc: "Dialogflow + FastAPI chatbot system"
  },
  {
    title: "Dehazing AI",
    img: "/projects/dehaze.png",
    desc: "Computer vision fog removal system"
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
    <section id="projects" className="py-20 px-6 md:px-20 bg-white">

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
            onClick={() => setSelected(p)}
            className="min-w-[320px] h-[260px] bg-gray-50 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >

            <img
              src={p.img}
              className="w-full h-36 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {p.desc}
              </p>
            </div>

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