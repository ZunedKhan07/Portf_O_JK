import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import TechStack from "../components/home/TechStack";

import ChatBox from "../components/ai/ChatBox";
import ProjectList from "../components/projects/ProjectList";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[#0b0f19] text-white min-h-screen px-6 py-10">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Hero />
            <Stats />
          </div>

          <ChatBox />
        </div>

        {/* Tech Stack */}
        <TechStack />

        {/* Projects */}
        <div className="mt-16">
          <ProjectList />
        </div>

      </div>

      <Footer />
    </>
  );
}