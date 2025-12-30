import { useState, useRef, useEffect } from "react";
import { FiCalendar, FiPhoneCall, FiX, FiSend, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm FlowtelAI assistant. I can help you with information about our hotel management platform, check meeting availability, or answer any questions about our services. How can I help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Get meeting slots availability
  const getMeetingSlots = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/meetings/today`);
      
      if (!response.ok) {
        // Fallback to mock data if API fails
        const today = new Date().toLocaleDateString();
        const meetings = [
          { id: 1, time: '10:00 AM', clientName: '', status: 'available' },
          { id: 2, time: '2:00 PM', clientName: 'Jane Smith', status: 'booked' },
          { id: 3, time: '4:00 PM', clientName: '', status: 'available' },
          { id: 4, time: '6:00 PM', clientName: 'Mike Johnson', status: 'booked' },
        ];
        
        const availableSlots = meetings.filter(m => m.status === 'available');
        const bookedSlots = meetings.filter(m => m.status === 'booked');
        
        return {
          today,
          available: availableSlots,
          booked: bookedSlots,
          total: meetings.length
        };
      }
      
      const data = await response.json();
      const meetings = data.data || [];
      const today = new Date().toLocaleDateString();
      
      const availableSlots = meetings.filter(m => m.status === 'available');
      const bookedSlots = meetings.filter(m => m.status === 'booked');
      
      return {
        today,
        available: availableSlots,
        booked: bookedSlots,
        total: meetings.length
      };
    } catch (error) {
      console.error('Error fetching meeting slots:', error);
      // Return mock data as fallback
      const today = new Date().toLocaleDateString();
      return {
        today,
        available: [{ time: '10:00 AM' }, { time: '4:00 PM' }],
        booked: [{ time: '2:00 PM' }, { time: '6:00 PM' }],
        total: 4
      };
    }
  };

  const sendToGemini = async (message) => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        console.error('Gemini API key not found');
        return "I'm having trouble right now. Please try calling us at +91 7079578207.";
      }

      // Check if user is asking about meeting slots
      const meetingKeywords = ['meeting', 'slot', 'available', 'book', 'schedule', 'appointment', 'time'];
      const isMeetingQuery = meetingKeywords.some(keyword => 
        message.toLowerCase().includes(keyword)
      );

      let meetingInfo = '';
      if (isMeetingQuery) {
        const slots = await getMeetingSlots();
        if (slots) {
          meetingInfo = `\n\nMeeting Slots for ${slots.today}:\n`;
          meetingInfo += `Available Slots: ${slots.available.map(s => s.time).join(', ')}\n`;
          meetingInfo += `Booked Slots: ${slots.booked.map(s => s.time).join(', ')}\n`;
          meetingInfo += `Total Available: ${slots.available.length}/${slots.total}`;
        }
      }

      const flowtelContext = `
You are FlowtelAI's customer support assistant. Here's what you need to know about FlowtelAI:

ABOUT FLOWTELAI:
- FlowtelAI is an advanced hotel management platform powered by AI
- We help hotels streamline operations, improve guest experience, and increase revenue
- Our platform includes room management, booking systems, guest services, and analytics
- We serve hotels of all sizes from boutique properties to large chains

SERVICES:
- AI-powered room allocation and pricing optimization
- Automated guest communication and support
- Real-time analytics and reporting
- Integration with major booking platforms
- 24/7 customer support
- Mobile app for hotel staff and guests

CONTACT INFO:
- Phone: +91 7079578207
- Website: FlowtelAI.com
- Demo available at: /getdemo
- Meeting scheduling: /meeting

KEY FEATURES:
- Never miss a booking with AI-powered alerts
- Seamless integration with existing hotel systems
- Real-time occupancy tracking
- Automated guest check-in/check-out
- Revenue optimization through dynamic pricing
- Multi-language support

If asked about meeting availability, provide the current slot information.
Keep responses helpful, professional, and concise.
${meetingInfo}

User question: ${message}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: flowtelContext
            }]
          }]
        })
      });
      
      if (!response.ok) {
        console.error('Gemini API response not ok:', response.status, response.statusText);
        return "I'm having trouble right now. Please try calling us at +91 7079578207.";
      }

      const data = await response.json();
      
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error('Unexpected API response structure:', data);
        return "I couldn't understand that. Can you ask differently?";
      }
    } catch (error) {
      console.error('Gemini API error:', error);
      return "I'm having connection issues. Please call +91 7079578207 or schedule a meeting.";
    }
  };

  const handleSendMessage = async (messageText = null) => {
    const message = messageText || inputMessage;
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    setShowQuickActions(false);

    try {
      const botResponse = await sendToGemini(message);
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          sender: "bot"
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble responding. Please try again or contact us directly.",
          sender: "bot"
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
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
            {showQuickActions && messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-3">
                <button
                  onClick={() => handleSendMessage("What is FlowtelAI?")}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  What is FlowtelAI?
                </button>
                <button
                  onClick={() => handleSendMessage("Show available meeting slots")}
                  className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                >
                  Meeting Slots
                </button>
                <button
                  onClick={() => handleSendMessage("How can I get a demo?")}
                  className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
                >
                  Get Demo
                </button>
                <button
                  onClick={() => handleSendMessage("What are your key features?")}
                  className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
                >
                  Features
                </button>
              </div>
            )}
            
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