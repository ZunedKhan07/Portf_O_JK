export default function Hero() {
  return (
    <div>
      <p className="text-green-400 mb-2">● Available for opportunities</p>

      <h1 className="text-5xl font-bold leading-tight">
        Hi, I'm <span className="text-purple-500">Juned Khan</span>
      </h1>

      <h2 className="mt-4 text-xl text-gray-300">
        Full Stack Developer & AI Enthusiast
      </h2>

      <p className="mt-4 text-gray-400 max-w-lg">
        I build scalable web applications and AI-powered tools that solve real-world problems.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-purple-600 px-6 py-2 rounded-xl hover:opacity-90">
          <a href="#projects">
            View My Work
          </a>
        </button>
        <button className="border px-6 py-2 rounded-xl hover:bg-gray-800">
          <a href="/JUNED_Port_Resume.pdf" download>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}