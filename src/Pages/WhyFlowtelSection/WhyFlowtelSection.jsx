import { Gear, CurrencyDollar } from 'react-bootstrap-icons';

export default function WhyFlowtelSection() {
  return (
    <section className="bg-[#0B0F14] text-white border-b-[3px] border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-sm text-gray-400 tracking-widest mb-4">
            WHY FLOWTEL
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Make hospitality effortless
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

          {/* Feature 1 */}
          <div className="flex gap-6 pb-8 border-b border-white/10">
            <IconClock />
            <div>
              <h3 className="text-lg font-semibold mb-2">Always Available</h3>
              <p className="text-gray-400 leading-relaxed">
                Flowtel books rooms instantly — 24/7, in any language with the
                warmth of a real concierge.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-6 pb-8 border-b border-white/10">
            <Gear className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Operational Harmony
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Save staff time and keep front desks focused on in-person
                service.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-6 pt-8">
            <IconStar />
            <div>
              <h3 className="text-lg font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Every call delivers the same warmth and personalized service,
                with no training or errors.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-6 pt-8">
            <CurrencyDollar className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Revenue Flow</h3>
              <p className="text-gray-400 leading-relaxed">
                Subtle upsells and cross-sells woven seamlessly into every
                interaction.
              </p>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">

          <Stat
            value="$63K / 100 rooms"
            label="Flowtel Recovers"
          />
          <Stat
            value="4.7 / 5"
            label="Customer Rating"
          />
          <Stat
            value="5 Days"
            label="Avg. Go-Live"
          />

        </div>
      </div>
    </section>
  );
}

/* ---------- STAT COMPONENT ---------- */
function Stat({ value, label }) {
  return (
    <div className="text-center py-20 px-6 border border-white/10">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </div>
  );
}

/* ---------- ICONS (Flowtel-Style Line Icons) ---------- */

function IconClock() {
  return (
    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927l2.236 6.873h7.223l-5.845 4.247 2.236 6.873-5.85-4.246-5.85 4.246 2.236-6.873L1.59 9.8h7.223z" />
    </svg>
  );
}