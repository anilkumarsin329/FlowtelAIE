import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-t-[3px] border-white/20">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src="/Hero/simple vedio.mp4" type="video/mp4" />
        {/* Fallback gradient if video doesn't load */}
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
        {/* Left Side - Content */}
        <div className="text-left mt-16 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Answer every call.
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Unlock more revenue.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
            AI voice agents handle guest requests 24/7 while your team focuses on creating unforgettable experiences
          </p>

          <NavLink
            to="/getdemo"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </NavLink>
        </div>
        
        {/* Right Side - Empty for video focus */}
        <div></div>
      </div>
    </section>
  );
}