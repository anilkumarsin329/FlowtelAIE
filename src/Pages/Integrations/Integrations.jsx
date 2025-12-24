export default function Integrations() {
  const integrations = [
    { name: "Avajs", logo: "/Integration/avajs.svg", color: "from-red-500 to-pink-500" },
    { name: "Cisco", logo: "/Integration/cisco.svg", color: "from-blue-500 to-cyan-500" },
    { name: "Decentraland", logo: "/Integration/decentraland.svg", color: "from-green-500 to-emerald-500" },
    { name: "General Electric", logo: "/Integration/generalelectric.svg", color: "from-purple-500 to-violet-500" },
    { name: "Gradle", logo: "/Integration/gradleplaypublisher.svg", color: "from-orange-500 to-yellow-500" },
    { name: "Muo", logo: "/Integration/muo.svg", color: "from-teal-500 to-cyan-500" },
    { name: "Picxy", logo: "/Integration/picxy.svg", color: "from-indigo-500 to-blue-500" },
    { name: "Quasar", logo: "/Integration/quasar.svg", color: "from-pink-500 to-rose-500" },

    { name: "SingleStore", logo: "/Integration/singlestore.svg", color: "from-amber-500 to-orange-500" },
    { name: "Trilium", logo: "/Integration/trilium.svg", color: "from-lime-500 to-green-500" },
    { name: "Twinmotion", logo: "/Integration/twinmotion.svg", color: "from-sky-500 to-blue-500" },
    { name: "Zendesk", logo: "/Integration/zendesk.svg", color: "from-violet-500 to-purple-500" },
    { name: "Slack", logo: "/Integration/slack.svg", color: "from-emerald-500 to-teal-500" },
    { name: "Microsoft", logo: "/Integration/microsoft.svg", color: "from-blue-600 to-indigo-600" },
    { name: "Salesforce", logo: "/Integration/salesforce.svg", color: "from-cyan-500 to-blue-500" },
    { name: "HubSpot", logo: "/Integration/hubspot.svg", color: "from-orange-600 to-red-500" },
  ];

  return (
    <section className="bg-[#0B0F14] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Integrates with the tools you love
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-white/10">
          {integrations.map((tool, i) => (
            <div
              key={i}
              className="
                group relative aspect-square
                bg-[#0B0F14] rounded-xl
                flex items-center justify-center
                transition
                hover:bg-[#111827]
              "
            >
              {/* GRADIENT BACKGROUND */}
              <div 
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              
              {/* ICON */}
              <div 
                className={`h-10 w-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="
                    h-6 w-6
                    opacity-90
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:scale-110
                    brightness-0 invert
                  "
                />
              </div>

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0
                  flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  bg-black/40
                  backdrop-blur-[1px]
                "
              >
                <p className="text-base font-semibold">{tool.name}</p>
              </div>

              {/* SOFT GLOW */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition
                  pointer-events-none
                "
                style={{
                  boxShadow: `0 0 30px ${tool.color.includes('red') ? 'rgba(239,68,68,0.3)' : 
                             tool.color.includes('blue') ? 'rgba(59,130,246,0.3)' :
                             tool.color.includes('green') ? 'rgba(34,197,94,0.3)' :
                             tool.color.includes('purple') ? 'rgba(147,51,234,0.3)' :
                             tool.color.includes('orange') ? 'rgba(249,115,22,0.3)' :
                             tool.color.includes('teal') ? 'rgba(20,184,166,0.3)' :
                             tool.color.includes('indigo') ? 'rgba(99,102,241,0.3)' :
                             tool.color.includes('pink') ? 'rgba(236,72,153,0.3)' :
                             'rgba(59,130,246,0.3)'}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
