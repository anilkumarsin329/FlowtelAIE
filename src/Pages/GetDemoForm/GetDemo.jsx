export default function GetDemo() {
  return (
    <section className="min-h-screen bg-[#0B0F14] text-white">
      
      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        {/* FORM (LEFT ALIGNED like image) */}
        <form className="max-w-3xl">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="
                  w-full h-12
                  bg-transparent
                  border border-white/20
                  rounded-md
                  px-4 text-sm
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/40
                "
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full h-12
                  bg-transparent
                  border border-white/20
                  rounded-md
                  px-4 text-sm
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/40
                "
              />
            </div>
          </div>

          {/* HOTEL NAME */}
          <div className="mb-8">
            <label className="block text-sm text-gray-300 mb-3">
              Hotel Name
            </label>
            <input
              type="text"
              placeholder="Enter your hotel name"
              className="
                w-full h-12
                bg-transparent
                border border-white/20
                rounded-md
                px-4 text-sm
                placeholder:text-gray-500
                focus:outline-none
                focus:border-white/40
              "
            />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Number of Rooms
              </label>
              <input
                type="number"
                placeholder="Enter number of rooms"
                className="
                  w-full h-12
                  bg-transparent
                  border border-white/20
                  rounded-md
                  px-4 text-sm
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/40
                "
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="
                  w-full h-12
                  bg-transparent
                  border border-white/20
                  rounded-md
                  px-4 text-sm
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/40
                "
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              px-8 py-3
              rounded-full
              bg-white
              text-black
              text-sm font-medium
              opacity-90
              hover:opacity-100
              transition
            "
          >
            Submit Request
          </button>

        </form>
      </div>
    </section>
  );
}
