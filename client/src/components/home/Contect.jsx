export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-20 px-6"
    >
      <div className="bg-[#111827] max-w-6xl mx-auto py-16 px-8 rounded-2xl shadow-lg">
        
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>

        <p className="text-gray-400 mb-6">
          Feel free to reach out 🚀
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="mailto:zunedkhan107@gmail.com" className="hover:text-purple-400">
            Email
          </a>

          <a href="https://wa.me/917023400518" target="_blank" className="hover:text-purple-400">
            WhatsApp
          </a>

          <a href="https://github.com/ZunedKhan07" target="_blank" className="hover:text-purple-400">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/junedkhan-062785290" target="_blank" className="hover:text-purple-400">
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}