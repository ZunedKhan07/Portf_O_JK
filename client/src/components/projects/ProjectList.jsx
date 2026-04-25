import { useEffect, useState } from "react";
import { getProject } from "../../services/projects.service";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProject();
      setProjects(res.data);
    };
    fetchData();
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#020617] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-2xl mb-6 font-semibold text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}