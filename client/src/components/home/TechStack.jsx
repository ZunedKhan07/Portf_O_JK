export default function TechStack() {
  const techs = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "Socket.IO",
    "JWT",
    "BullMQ",
    "Redis",
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-3">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="bg-[#111827] border border-gray-700 px-4 py-2 rounded-xl text-sm text-gray-300 hover:border-purple-500 hover:text-white transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}