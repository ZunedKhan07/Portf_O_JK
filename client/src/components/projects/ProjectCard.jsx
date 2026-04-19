export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#111827] p-5 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      
      <h3 className="text-lg font-bold text-white">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-2 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {project.techStack?.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-700/70 text-gray-300 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm transition"
          >
            Live Demo
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-gray-400 px-3 py-1.5 rounded-lg text-sm transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}