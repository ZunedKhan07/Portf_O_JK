import ReactMarkdown from "react-markdown";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs text-sm leading-relaxed ${
          isUser
            ? "bg-purple-600 text-white"
            : "bg-gray-800 text-gray-200 border border-gray-700"
        }`}
      >
        <ReactMarkdown>
          {message.text}
        </ReactMarkdown>
      </div>

    </div>
  );
}