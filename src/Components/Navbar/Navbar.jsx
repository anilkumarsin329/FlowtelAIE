import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
        >
          <img 
            src="/logo.jpeg" 
            alt="Flowtel Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold text-white tracking-tight">
            Flowtel
          </span>
        </NavLink>

        {/* Desktop Menu & CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Why Flowtel
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Careers
            </NavLink>
          </nav>

          <NavLink
            to="/getdemo"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-6 py-2.5 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            Book a Demo
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-800">
          <div className="px-6 py-6 space-y-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white font-medium transition-colors"
            >
              Why Flowtel
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white font-medium transition-colors"
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white font-medium transition-colors"
            >
              Careers
            </NavLink>

            <NavLink
              to="/getdemo"
              onClick={() => setOpen(false)}
              className="block text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg mt-4"
            >
              Get Demo
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
