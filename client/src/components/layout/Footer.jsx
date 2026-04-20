export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400 mt-20 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <h2 className="text-white text-lg font-semibold">
              Let's Work Together 🚀
            </h2>
            <p className="text-sm mt-2">
              I'm always open to opportunities and exciting projects.
            </p>
          </div>

          <button className="bg-purple-600 px-5 py-2 rounded-xl text-white hover:opacity-90">
            Get In Touch
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          <p>© {new Date().getFullYear()} Juned Khan. All rights reserved.</p>

          <div className="flex gap-4">
           <a 
              href="https://github.com/ZunedKhan07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/juned-khan-062785290" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a 
              href="/contact" 
              className="hover:text-white"
            >
              Contact
            </a>

            <a 
              href="mailto:zunedkhan107@gmail.com" 
              className="hover:text-white"
            >
              Email
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}