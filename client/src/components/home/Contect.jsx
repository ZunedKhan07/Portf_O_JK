export default function Contact() {
  return (
    <section id="contact" className="bg-[#020617] py-20 px-6">
      
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out 🚀
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <a
            href="mailto:zunedkhan107@gmail.com"
            className="bg-[#111827] p-5 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition"
          >
            <p className="text-purple-500 font-semibold">Email</p>
            <p className="text-gray-400 text-sm mt-1">Send a message</p>
          </a>

          <a
            href="https://wa.me/917023400518"
            target="_blank"
            className="bg-[#111827] p-5 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition"
          >
            <p className="text-purple-500 font-semibold">WhatsApp</p>
            <p className="text-gray-400 text-sm mt-1">Quick chat</p>
          </a>

          <a
            href="https://github.com/ZunedKhan07"
            target="_blank"
            className="bg-[#111827] p-5 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition"
          >
            <p className="text-purple-500 font-semibold">GitHub</p>
            <p className="text-gray-400 text-sm mt-1">View code</p>
          </a>

          <a
            href="https://www.linkedin.com/in/junedkhan-062785290"
            target="_blank"
            className="bg-[#111827] p-5 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition"
          >
            <p className="text-purple-500 font-semibold">LinkedIn</p>
            <p className="text-gray-400 text-sm mt-1">Connect</p>
          </a>

        </div>
      </div>
    </section>
  );
}