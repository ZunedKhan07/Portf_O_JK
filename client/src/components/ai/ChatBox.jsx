import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../../services/chat.service";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      setLoading(true);

      const res = await sendMessage(input);

      const botMsg = {
        role: "ai",
        text: res.data,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Something went wrong 😅" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div id="chatBox" className="bg-[#111827] p-5 rounded-2xl border border-gray-700 shadow-lg flex flex-col h-[450px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">🤖 Talk with AI</h2>
        <span className="text-xs text-green-400">● Online</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm">
            Ask me about skills, projects, or experience...
          </p>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {loading && (
          <p className="text-gray-400 text-sm">Typing...</p>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 p-2 rounded-xl bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-purple-600 px-4 rounded-xl hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}