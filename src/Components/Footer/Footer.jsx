import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/logo.jpeg" 
              alt="Flowtel Logo" 
              className="h-8 w-auto"
            />
            <h2 className="text-xl font-semibold text-white">Flowtel</h2>
          </div>
          <img 
            src="/YCombinator.png" 
            alt="Y Combinator" 
            className="h-6 w-auto"
          />
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <NavLink to="/about" className="hover:text-purple-300 hover:translate-x-1 transition-all duration-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-purple-300 hover:translate-x-1 transition-all duration-300">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Follow Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-purple-300 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Site Map
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <NavLink to="/" className="hover:text-purple-300 hover:translate-x-1 transition-all duration-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-purple-300 hover:translate-x-1 transition-all duration-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-purple-300 hover:translate-x-1 transition-all duration-300">
                Book a Demo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p className="text-sm text-gray-400">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
