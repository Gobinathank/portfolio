import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsSlider from "./components/ProjectsSlider";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <ProjectsSlider />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}