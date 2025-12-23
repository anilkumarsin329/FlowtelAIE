export default function Integrations() {
    const integrations = [
        { name: "Cisco", category: "VOIP / PBX", logo: "/Integration/cisco.svg", glow: "rgba(34,211,238,0.6)", color: "hue-rotate-[180deg] saturate-150 brightness-150" },
        { name: "Avaya", category: "VOIP / PBX", logo: "/Integration/avajs.svg", glow: "rgba(59,130,246,0.6)", color: "hue-rotate-[240deg] saturate-150 brightness-150" },
        { name: "Decentraland", category: "PLATFORM", logo: "/Integration/decentraland.svg", glow: "rgba(168,85,247,0.6)", color: "hue-rotate-[300deg] saturate-150 brightness-150" },
        { name: "General Electric", category: "ENTERPRISE", logo: "/Integration/generalelectric.svg", glow: "rgba(147,197,253,0.6)", color: "hue-rotate-[200deg] saturate-150 brightness-150" },
        { name: "Gradle Play", category: "DEV TOOLS", logo: "/Integration/gradleplaypublisher.svg", glow: "rgba(250,204,21,0.6)", color: "hue-rotate-[45deg] saturate-150 brightness-150" },
        { name: "MUO", category: "MEDIA", logo: "/Integration/muo.svg", glow: "rgba(248,113,113,0.6)", color: "hue-rotate-[0deg] saturate-150 brightness-150" },
        { name: "Picxy", category: "PLATFORM", logo: "/Integration/picxy.svg", glow: "rgba(56,189,248,0.6)", color: "hue-rotate-[270deg] saturate-150 brightness-150" },
        { name: "Quasar", category: "FRAMEWORK", logo: "/Integration/quasar.svg", glow: "rgba(34,197,94,0.6)", color: "hue-rotate-[90deg] saturate-150 brightness-150" },

        { name: "SingleStore", category: "DATABASE", logo: "/Integration/singlestore.svg", glow: "rgba(239,68,68,0.6)", color: "hue-rotate-[330deg] saturate-150 brightness-150" },
        { name: "Trilium", category: "KNOWLEDGE", logo: "/Integration/trilium.svg", glow: "rgba(192,132,252,0.6)", color: "hue-rotate-[150deg] saturate-150 brightness-150" },
        { name: "Twinmotion", category: "3D / DESIGN", logo: "/Integration/twinmotion.svg", glow: "rgba(14,165,233,0.6)", color: "hue-rotate-[210deg] saturate-150 brightness-150" },
        { name: "Zendesk", category: "SUPPORT", logo: "/Integration/zendesk.svg", glow: "rgba(250,204,21,0.6)", color: "hue-rotate-[30deg] saturate-150 brightness-150" },
        { name: "Cisco Alt", category: "NETWORK", logo: "/Integration/cisco (1).svg", glow: "rgba(34,211,238,0.6)", color: "hue-rotate-[120deg] saturate-150 brightness-150" },
        { name: "Decentraland Alt", category: "PLATFORM", logo: "/Integration/decentraland (1).svg", glow: "rgba(168,85,247,0.6)", color: "hue-rotate-[60deg] saturate-150 brightness-150" },
        { name: "Picxy Alt", category: "MEDIA", logo: "/Integration/picxy.svg", glow: "rgba(56,189,248,0.6)", color: "hue-rotate-[280deg] saturate-150 brightness-150" },
        { name: "MUO Alt", category: "MEDIA", logo: "/Integration/muo.svg", glow: "rgba(248,113,113,0.6)", color: "hue-rotate-[15deg] saturate-150 brightness-150" },
    ];


    return (
        <section className="bg-[#0B0F14] text-white py-28 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
                    Integrations
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold mb-16">
                    Integrates with the tools you love
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {integrations.map((tool, i) => (
                        <div
                            key={i}
                            className="
                relative group h-32 rounded-xl
                border border-white/10
                bg-white/[0.02]
                overflow-hidden
                transition-all duration-300
                hover:bg-white/[0.06]
                hover:border-white/30
              "
                        >
                            {/* ICON */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="
                    h-10
                    opacity-60
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                                    style={{
                                        filter: `${tool.color} drop-shadow(0 0 0 transparent)`,
                                    }}
                                />
                            </div>

                            {/* HOVER CONTENT */}
                            <div
                                className="
                  absolute inset-0 flex flex-col items-center justify-center
                  text-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-300
                  backdrop-blur-[2px]
                "
                            >
                                <p className="text-xs uppercase tracking-widest text-cyan-300 mb-2">
                                    {tool.category}
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {tool.name}
                                </p>
                            </div>

                            {/* GLOW */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                                style={{
                                    boxShadow: `0 0 35px ${tool.glow}`,
                                }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
