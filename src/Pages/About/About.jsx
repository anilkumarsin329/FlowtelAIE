export default function AboutHero() {
  const founders = [
    {
      name: "Eylon Mizrahi",
      role: "Co-Founder, CEO",
      image: "/About/founder1.avif",
      bio: "Seasoned tech entrepreneur and Y Combinator alumnus with expertise in scaling SaaS companies."
    },
    {
      name: "Ryan Lane",
      role: "Co-Founder",
      image: "/About/founder2.avif",
      bio: "Expert in hospitality technology and operations, focused on seamless guest experiences."
    },
    {
      name: "Sam Smith",
      role: "Co-Founder",
      image: "/About/founder1.avif",
      bio: "AI and machine learning specialist driving technical innovation at Flowtel."
    },
  ];

  const investors = [
    {
      name: "Zeev Ventures",
      logo: "/About/AB.jpg",
      description:
        "Known for backing bold founders early, Zeev Ventures helped build breakout companies like Houzz, TripIt, and Next Insurance — guiding startups from vision to industry leadership.",
    },
    {
      name: "Y Combinator",
      logo: "/About/combinator.png",
      description:
        "Y Combinator is the world's leading startup accelerator, behind global successes like Airbnb, Stripe, DoorDash, and Coinbase — giving founders credibility, capital, and a powerful network from day one.",
    },
  ];

  return (
    <>
      <section className="relative h-[90vh] w-full overflow-hidden text-white pt-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/About/about.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* LEFT BIG TEXT */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We create the <br />
                flow between <br />
                guests, staff and <br />
                systems
              </h1>
            </div>

            {/* RIGHT PARAGRAPH */}
            <div>
              <p className="text-gray-200 text-xl leading-relaxed">
                Flowtel connects the human warmth of hospitality with the
                intelligence of AI. We create the flow between guests, staff,
                and systems — transforming scattered interactions into one
                continuous rhythm of service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-6">
                When everything moves in harmony, hospitality feels effortless,
                and every stay becomes something to remember.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0B0F14] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-32">

          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed font-normal text-gray-200">

            Flowtel&apos;s mission is to make hospitality{" "}
            <span className="bg-white/10 px-2 py-0.5 rounded-md text-white">
              flow
            </span>{" "}
            effortlessly. We connect guests, staff, and systems through{" "}
            <span className="bg-white/10 px-2 py-0.5 rounded-md text-white">
              AI
            </span>{" "}
            that listens, learns, and acts — creating seamless service,
            smarter operations, and more human experiences.

          </p>

        </div>
      </section>

      <section className="bg-[#0B0F14] text-white py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Founders
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-16">
            We&apos;re obsessed with guest experience and operational clarity.
          </p>

          {/* FOUNDERS GRID */}
          <div className="flex flex-col items-center gap-16">

            {/* Top Founder */}
            <div className="relative group">
              <img
                src={founders[0].image}
                alt={founders[0].name}
                className="w-[28rem] h-[28rem] object-cover rounded-md mx-auto
                           grayscale border border-white/10 transition-all duration-300
                           group-hover:grayscale-0"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center p-4">
                <p className="text-white text-base text-center leading-relaxed">
                  {founders[0].bio}
                </p>
              </div>
              <p className="mt-6 text-xl font-bold">{founders[0].name}</p>
              <p className="text-lg text-gray-400">{founders[0].role}</p>
            </div>

            {/* Bottom Two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.slice(1).map((f, i) => (
                <div key={i} className="relative group">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-96 h-96 object-cover rounded-md mx-auto
                               grayscale border border-white/10 transition-all duration-300
                               group-hover:grayscale-0"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center p-4">
                    <p className="text-white text-base text-center leading-relaxed">
                      {f.bio}
                    </p>
                  </div>
                  <p className="mt-6 text-lg font-bold">{f.name}</p>
                  <p className="text-base text-gray-400">{f.role}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0B0F14] text-white py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

            {/* LEFT BIG TEXT */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              We&apos;re backed <br />
              by incredible <br />
              investors
            </h2>

            {/* RIGHT INVESTORS */}
            <div className="space-y-14">

              {investors.map((inv, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={inv.logo}
                      alt={inv.name}
                      className="h-24 opacity-90"
                    />
                  </div>

                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    {inv.description}
                  </p>

                  {i === 0 && (
                    <div className="mt-10 border-b border-white/10" />
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-[#0B0F14] text-white py-32 overflow-hidden border-t border-white/10 border-b-[3px] border-white/20">
        
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

          <button
            className="inline-flex items-center px-6 py-2.5
                       rounded-full border border-white/30
                       text-sm font-medium
                       hover:bg-white hover:text-black
                       transition"
          >
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}
