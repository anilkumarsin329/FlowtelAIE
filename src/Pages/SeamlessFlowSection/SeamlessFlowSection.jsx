export default function HandleRequestFlow() {
  return (
    <section className="bg-[#0B0F14] text-white border-b-[3px] border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Handle every request in <br /> one seamless flow
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
          Flowtel handles every guest interaction — from room bookings to dining and service requests — through intelligent voice and chat AI. Guests ask naturally, and Flowtel takes care of the rest, coordinating staff, systems, and service in real time.
          </p>
        </div>

        {/* FLOW */}
        <div className="flex justify-center overflow-x-auto">
          <svg className="w-full max-w-[1100px] h-auto" viewBox="0 0 1100 420">

            {/* LEFT INPUT */}
            <g>
              <rect x="40" y="150" rx="26" width="240" height="52"
                fill="rgba(17,24,39,0.6)"
                stroke="rgba(255,255,255,0.15)"
              />
              <text x="96" y="182" fill="#E5E7EB" fontSize="14">
                Guest calls hotel
              </text>
              <rect x="200" y="162" rx="10" width="56" height="28"
                fill="rgba(255,255,255,0.08)" />
              <text x="216" y="181" fill="#9CA3AF" fontSize="12">Input</text>
            </g>

            {/* TOP API */}
            <g style={{ backdropFilter: "blur(8px)" }}>
              <rect x="420" y="45" rx="18" width="300" height="180"
                fill="rgba(17,24,39,0.65)"
                stroke="rgba(255,255,255,0.18)"
              />
              <text x="450" y="75" fill="#9CA3AF" fontSize="12">
                &lt;/&gt; API Request
              </text>

              {["Customer Name", "Room Type", "Stay information"].map((t, i) => (
                <g key={i}>
                  <rect x="450" y={95 + i * 40} rx="8"
                    width="240" height="32"
                    fill="rgba(31,41,55,0.9)" />
                  <text x="462" y={117 + i * 40}
                    fill="E5E7EB" fontSize="13">{`{} ${t}`}</text>
                </g>
              ))}
            </g>

            {/* BOTTOM API */}
            <g style={{ backdropFilter: "blur(8px)" }}>
              <rect x="420" y="245" rx="18" width="300" height="140"
                fill="rgba(17,24,39,0.65)"
                stroke="rgba(255,255,255,0.18)"
              />
              <text x="450" y="275" fill="#9CA3AF" fontSize="12">
                &lt;/&gt; API Request
              </text>

              {["Room Number", "Request Type"].map((t, i) => (
                <g key={i}>
                  <rect x="450" y={295 + i * 40} rx="8"
                    width="240" height="32"
                    fill="rgba(31,41,55,0.9)" />
                  <text x="462" y={317 + i * 40}
                    fill="#E5E7EB" fontSize="13">{`{} ${t}`}</text>
                </g>
              ))}
            </g>

            {/* OUTPUTS */}
            {[
              "Creates new booking",
              "Assigns ticket to staff",
              "Redirects call",
            ].map((text, i) => (
              <g key={i}>
                <rect x="820" y={70 + i * 70} rx="26"
                  width="260" height="48"
                  fill="rgba(17,24,39,0.6)"
                  stroke="rgba(255,255,255,0.15)"
                />
                <text x="880" y={100 + i * 70}
                  fill="#E5E7EB" fontSize="14">{text}</text>
              </g>
            ))}

            {/* CURVED FLOW LINES */}
            {[
              "M280 176 C340 140, 360 140, 420 120",
              "M280 176 C340 210, 360 210, 420 320",
              "M720 120 C770 120, 790 94, 820 94",
              "M720 120 C770 140, 790 164, 820 164",
              "M720 175 C770 175, 790 210, 820 210",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-40"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </path>
            ))}

          </svg>
        </div>
      </div>
    </section>
  );
}
