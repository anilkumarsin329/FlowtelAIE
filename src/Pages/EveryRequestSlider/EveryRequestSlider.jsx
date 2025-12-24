import { useEffect, useState } from 'react';

export default function EveryRequestSlider() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    "/slide1.jpeg",
    "/slide2.avif",
    "/slide3.jpg",
    "/slide4.webp",
  ];

  return (
    <section className="bg-[#0B0F14] text-white overflow-hidden border-b-[3px] border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Every request, fulfilled naturally
          </h2>
        </div>

        {/* Slider 1 (Left → Right) */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...images, ...images].map((img, i) => (
              <SlideImage key={`row1-${i}`} img={img} scrollY={scrollY} />
            ))}
          </div>
        </div>

        {/* Slider 2 (Right → Left) */}
        <div className="relative">
          <div className="flex animate-marquee-reverse">
            {[...[...images].reverse(), ...images].map((img, i) => (
              <SlideImage key={`row2-${i}`} img={img} scrollY={scrollY} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Image Card ---------- */
function SlideImage({ img, scrollY }) {
  const blackOverlay = Math.min(scrollY * 0.001, 0.7);

  return (
    <div className="min-w-[280px] sm:min-w-[320px] overflow-hidden border border-white/10 bg-[#111827] rounded-[4px] relative">
      <img
        src={img}
        alt="Flowtel feature"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: blackOverlay }}
      />
    </div>
  );
}
