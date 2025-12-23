import { NavLink } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 mt-auto h-[50vh] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-8 flex-1 flex flex-col">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1">

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
            <p className="text-gray-300 text-sm mb-4">
              AI-powered hospitality solutions for seamless guest experiences.
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <FaPhone className="w-3 h-3 text-purple-400" />
                <span>+1 (991) 830-9983</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-3 h-3 text-purple-400" />
                <span>anilkumarsingh43425@gamil.com</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <NavLink to="/about" className="hover:text-purple-300 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="hover:text-purple-300 transition-colors">
                  Careers
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  AI Concierge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Guest Messaging
                </a>
              </li>
              <li>
                <NavLink to="/getdemo" className="hover:text-purple-300 transition-colors">
                  Book Demo
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-4">
              <a 
                href="https://facebook.com/flowtel" 
                className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/flowtel" 
                className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white hover:bg-blue-400 hover:scale-110 transition-all duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/flowtel" 
                className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/flowtel" 
                className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/flowtel" 
                className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm rounded bg-slate-800 text-white border border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 pt-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-400">
              © 2024 Flowtel AI. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-purple-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}