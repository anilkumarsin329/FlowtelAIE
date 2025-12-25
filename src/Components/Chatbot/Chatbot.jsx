import { useState, useRef, useEffect } from "react";
import { FiCalendar, FiPhoneCall, FiX, FiSend, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm FlowtelAI assistant. How can I help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToGemini = async (message) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful AI assistant for FlowtelAI. Answer the user's question directly and helpfully. If asked about FlowtelAI, mention it's a hotel management platform. Keep responses concise.

User question: ${message}`
            }]
          }]
        })
      });
      
      if (!response.ok) {
        return "I'm having trouble right now. Please try calling us at +91 7079578207.";
      }

      const data = await response.json();
      
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "I couldn't understand that. Can you ask differently?";
      }
    } catch (error) {
      return "I'm having connection issues. Please call +91 7079578207 or schedule a meeting.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    const botResponse = await sendToGemini(inputMessage);
    
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot"
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2
        bg-white text-black px-6 py-3 rounded-full shadow-lg border hover:shadow-xl transition-all"
      >
        {open ? <FiX size={20} /> : <FiMessageCircle size={18} />}
        {open ? "Close" : "Let's chat"}
      </button>

      {/* MAIN POPUP */}
      {open && !showChat && (
        <div className="fixed bottom-20 left-6 z-50 w-80 bg-white rounded-xl shadow-2xl border p-4 space-y-3">
          <div className="text-center mb-4">
            <h3 className="font-semibold text-gray-800">How can we help you?</h3>
          </div>

          <button
            onClick={() => setShowChat(true)}
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaRobot /> Chat with AI Assistant
          </button>

          <a
            href="tel:+917079578207"
            className="w-full flex justify-center items-center gap-2 bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiPhoneCall /> Call Us
          </a>

          <a
            href="https://wa.me/917079578207"
            target="_blank"
            className="w-full flex justify-center items-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="/meeting"
            className="w-full flex justify-center items-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FiCalendar /> Schedule Meeting
          </a>
        </div>
      )}

      {/* CHAT INTERFACE */}
      {showChat && (
        <div className="fixed bottom-20 left-6 z-50 w-96 h-96 bg-white rounded-xl shadow-2xl border flex flex-col">
          {/* CHAT HEADER */}
          <div className="flex justify-between items-center p-4 border-b bg-blue-600 text-white rounded-t-xl">
            <div className="flex items-center gap-2">
              <FaRobot />
              <span className="font-semibold">FlowtelAI Assistant</span>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="hover:bg-blue-700 p-1 rounded"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}