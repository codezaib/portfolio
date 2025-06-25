import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "bout" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#26081c_25%,_#150811_70%,_#02020a)] text-white font-sans px-8 flex flex-col justify-between">
      <Header />
      <div className="">
        <Navigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <main className="max-w-4xl mt-10 md:mt-6 mx-auto h-auto flex justify-center [@media(min-height:1100px)]:mt-[50px]">
          {activeTab === "about" && <About />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "services" && <Services />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "contact" && <Contact />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
