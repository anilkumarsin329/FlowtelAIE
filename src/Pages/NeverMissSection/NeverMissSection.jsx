import { Building, TelephoneFill, CpuFill } from 'react-bootstrap-icons';

export default function NeverMissSection() {
  return (
    <section className="bg-[#0B0F14] text-white border-b-[3px] border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Never miss a booking or <br /> guest request again
          </h2>

          {/* Right Text */}
          <p className="text-gray-400 text-base leading-relaxed">
            Flowtel handles every guest interaction — from room bookings to
            dining and service requests — through intelligent voice and chat
            AI. Guests ask naturally, and Flowtel takes care of the rest,
            coordinating staff, systems, and service in real time.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 border-t border-white/10"></div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-r border-b border-white/10">

          {/* Feature 1 */}
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex justify-center mb-6">
              <Building className="w-14 h-14 text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-4">Room Bookings</h3>

            <p className="text-gray-400 leading-relaxed">
              Flowtel books rooms instantly — 24/7, in any language — with the
              warmth of a real concierge and the intelligence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex justify-center mb-6">
              <TelephoneFill className="w-14 h-14 text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-4">In-Room Calls</h3>

            <p className="text-gray-400 leading-relaxed">
              Effortlessly book a table, reserve a spa treatment, or schedule a
              signature hotel experience — all in seconds.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-10 text-center">
            <div className="flex justify-center mb-6">
              <CpuFill className="w-14 h-14 text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-4">AI Call Routing</h3>

            <p className="text-gray-400 leading-relaxed">
              Room service, housekeeping, amenities, travel tips, and more —
              Flowtel fulfills every need in seconds, naturally suggesting what
              guests actually want.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
