export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Open Source Contributions", value: "5+" },
    { label: "Experience", value: "1+ Year" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#111827] p-5 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition"
        >
          <h2 className="text-2xl font-bold text-purple-500">
            {stat.value}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}