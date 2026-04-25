import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-[#0b0f19] text-white border-b border-gray-800 sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-purple-500">
        &lt;/&gt; Juned Khan
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="bg-purple-600 px-4 py-1.5 rounded-xl text-sm hover:opacity-90">
          <a href="#chatBox">
            Talk with AI
          </a>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0b0f19] border-t border-gray-800 flex flex-col items-center py-4 gap-4 md:hidden">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}