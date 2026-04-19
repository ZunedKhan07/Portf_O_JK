import { useState } from "react";
import { addProject } from "../services/projects.service";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...form,
        techStack: form.techStack.split(",").map((t) => t.trim()),
      };

      const res = await addProject(payload);

      if (res.success) {
        setMsg("✅ Project added successfully!");
        setForm({
          title: "",
          description: "",
          techStack: "",
          githubLink: "",
          liveLink: "",
        });
      }
    } catch (err) {
      setMsg("❌ Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#0b0f19] text-white min-h-screen px-6 py-10 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] p-6 rounded-2xl border border-gray-700 w-full max-w-xl"
        >
          <h2 className="text-2xl mb-6 font-semibold">Add Project</h2>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600"
            required
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600"
            required
          />

          <input
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            placeholder="Tech Stack (comma separated)"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600"
          />

          <input
            name="githubLink"
            value={form.githubLink}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600"
          />

          <input
            name="liveLink"
            value={form.liveLink}
            onChange={handleChange}
            placeholder="Live Link"
            className="w-full mb-4 p-2 rounded bg-black border border-gray-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 w-full py-2 rounded-xl hover:bg-purple-700 transition"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>

          {msg && <p className="mt-4 text-sm text-center">{msg}</p>}
        </form>
      </div>

      <Footer />
    </>
  );
}