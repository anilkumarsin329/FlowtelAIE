import { NavLink } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0B0F14] text-white py-32 overflow-hidden border-b-[3px] border-white/20">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          Make your hotel flow
        </h2>

        
        <NavLink  to="/getdemo"
          className="inline-flex items-center px-6 py-2.5
                     rounded-full border border-white/30
                     text-sm font-medium
                     hover:bg-white hover:text-black
                     transition"
        >
          Sign Up
        </NavLink>
      </div>
    </section>
  );
}
