import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotel: "",
    rooms: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, hotel, rooms, phone } = formData;

    // 🔴 Validation
    if (!name || !email || !hotel || !rooms || !phone) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Demo request submitted successfully 🚀");
        // Reset form
        setFormData({
          name: "",
          email: "",
          hotel: "",
          rooms: "",
          phone: "",
        });
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-[#0B0F14] text-white">
      <ToastContainer position="top-right" theme="dark" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <form onSubmit={handleSubmit} className="max-w-3xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full h-12 bg-transparent border border-white/20 rounded-md px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full h-12 bg-transparent border border-white/20 rounded-md px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm text-gray-300 mb-3">
              Hotel Name
            </label>
            <input
              type="text"
              name="hotel"
              value={formData.hotel}
              onChange={handleChange}
              placeholder="Enter your hotel name"
              className="w-full h-12 bg-transparent border border-white/20 rounded-md px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Number of Rooms
              </label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                placeholder="Enter number of rooms"
                className="w-full h-12 bg-transparent border border-white/20 rounded-md px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full h-12 bg-transparent border border-white/20 rounded-md px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:opacity-100 opacity-90 transition"
          >
            Submit Request
          </button>

        </form>
      </div>
    </section>
  );
}
