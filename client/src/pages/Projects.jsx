import { useEffect, useState } from "react";
import { getProject } from "../services/projects.service";
import ProjectCard from "../components/projects/ProjectCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProject();
      setProjects(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#0b0f19] text-white min-h-screen px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">All Projects</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}