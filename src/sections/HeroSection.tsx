export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center pt-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
          Mobile Apps & Digital Solutions
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">

          Build Your

          <span className="text-cyan-400"> Business </span>

          Into The Digital World.

        </h1>

        {/* Description */}
        <p className="mt-8 text-base sm:text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">

          I help local businesses simplify bookings, orders,
          customer management, and daily operations through
          modern mobile applications and digital systems.

        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform duration-300">
            Get Free Consultation
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition">
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}