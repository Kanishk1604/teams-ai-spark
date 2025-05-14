
import React, { useRef, useState } from "react";
import { MessageSquare } from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

function getMockAIResponse(userText: string): string {
  // You can update this logic for more fun!
  if (userText.toLowerCase().includes("hello")) {
    return "Hello! How can I help you today?";
  }
  if (userText.toLowerCase().includes("time")) {
    return `The current time is ${new Date().toLocaleTimeString()}.`;
  }
  return "I'm your AI assistant. Ask me anything!";
}

const AiChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hi! 👋 I'm your Teams AI assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on message send
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: userMessage },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "ai", text: getMockAIResponse(userMessage) },
      ]);
    }, 800);
  };

  return (
    <div className="bg-blue-50/70 rounded-xl shadow-inner p-5 w-full max-w-lg mx-auto min-h-[340px] flex flex-col">
      <div className="flex-1 mb-4 overflow-y-auto space-y-3 max-h-[220px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-900 border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex gap-2 mt-auto">
        <input
          type="text"
          className="flex-1 rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-lg px-4 py-2 font-semibold flex items-center gap-1"
        >
          <MessageSquare size={18} />
          Send
        </button>
      </form>
    </div>
  );
};

export default AiChatDemo;
