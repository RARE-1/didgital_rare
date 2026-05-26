export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center pt-24">

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 text-center">

        <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm mb-6">
          Mobile Apps & Digital Solutions
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
          Build Your
          <span className="text-cyan-400"> Business </span>
          Digitally
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
          Helping local businesses streamline bookings, customer management,
          and daily operations with modern mobile apps and software.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform">
            Get Free Consultation
          </button>

          <button className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition">
            View Projects
          </button>

        </div>

      </div>
    </section>
  );
}