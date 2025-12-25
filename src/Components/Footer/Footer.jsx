import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedin,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Successfully subscribed to newsletter! 🎉");
        setEmail(""); // Clear input
      } else {
        toast.error(result.error || "Subscription failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 mt-auto min-h-[50vh] h-auto flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">

          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Flowtel Logo" 
                className="h-8 w-auto"
              />
              <h2 className="text-xl font-bold text-white">Flowtel</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4 max-w-xs">
              AI-powered hospitality solutions for seamless guest experiences.
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhone className="w-3 h-3 text-purple-400" />
                <span>+1 (991) 830-9983</span>
              </div>
              <div className="flex items-center gap-2 break-all">
                <FaEnvelope className="w-3 h-3 text-purple-400" />
                <span>anilkumarsingh43425@gamil.com</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><NavLink to="/about" className="hover:text-purple-300 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-purple-300 transition-colors">Careers</NavLink></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-purple-300 transition-colors">AI Concierge</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Guest Messaging</a></li>
              <li><NavLink to="/getdemo" className="hover:text-purple-300 transition-colors">Book Demo</NavLink></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a className="w-9 h-9 bg-purple-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><FaFacebook /></a>
              <a className="w-9 h-9 bg-purple-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><FaTwitter /></a>
              <a className="w-9 h-9 bg-purple-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><FaInstagram /></a>
              <a className="w-9 h-9 bg-purple-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><FaYoutube /></a>
              <a className="w-9 h-9 bg-purple-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"><FaLinkedin /></a>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={isLoading}
                className="w-full px-3 py-2 text-sm rounded bg-slate-800 text-white border border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-500 disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 pt-4 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <p className="text-xs text-gray-400">© 2024 Flowtel AI. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-purple-300">Privacy</a>
              <a href="#" className="hover:text-purple-300">Terms</a>
              <a href="#" className="hover:text-purple-300">Security</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
