import { useState } from "react";
import { FiCalendar, FiPhoneCall, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2
        bg-white text-black px-6 py-3 rounded-full shadow-lg border"
      >
        {open ? <FiX size={20} /> : <FiCalendar size={18} />}
        {open ? "Close" : "Let’s chat"}
      </button>

      {/* CHAT POPUP */}
      {open && !showCalendar && (
        <div className="fixed bottom-20 left-6 z-50 w-72 bg-white rounded-xl shadow-2xl border p-4 space-y-3">
          <a
            href="tel:+917079578207"
            className="flex justify-center gap-2 bg-gray-100 py-2 rounded-lg"
          >
            <FiPhoneCall /> Call Us
          </a>

          <a
            href="https://wa.me/917079578207"
            target="_blank"
            className="flex justify-center gap-2 bg-green-500 text-white py-2 rounded-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <button
            onClick={() => setShowCalendar(true)}
            className="w-full flex justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg"
          >
            <FiCalendar /> Schedule Meeting
          </button>
        </div>
      )}

      {/* FULL CALENDLY PAGE (CODYCO STYLE) */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowCalendar(false)}
            className="absolute top-4 right-4 text-black"
          >
            <FiX size={28} />
          </button>

          {/* CALENDLY INLINE */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/your-anilkumarsingh/meeting"
            style={{ minWidth: "100%", height: "100vh" }}
          ></div>
        </div>
      )}
    </>
  );
}
