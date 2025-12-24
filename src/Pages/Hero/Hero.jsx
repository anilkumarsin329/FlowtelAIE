import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-t-[3px] border-white/20">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Hero/simple vedio.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen pt-20">

          {/* Left Content (⬆ adjusted up) */}
          <div className="relative -translate-y-8 sm:-translate-y-12">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Answer every call.
            </h1>

            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Unlock more revenue.
            </h2>

            <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed mb-7 max-w-xl">
              AI voice agents handle guest requests 24/7 while your team focuses on creating unforgettable experiences.
            </p>

            <NavLink
              to="/getdemo"
              className="inline-flex items-center justify-center 
              bg-gradient-to-r from-purple-600 to-blue-600 text-white 
              px-6 sm:px-8 py-3 rounded-full 
              text-sm sm:text-base font-semibold 
              hover:from-purple-700 hover:to-blue-700 
              transition-all duration-300 shadow-lg 
              hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </NavLink>
          </div>

          {/* Right side empty */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
