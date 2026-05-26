type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 min-h-[320px] hover:-translate-y-2 transition-all duration-300">

      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300" />

      <div className="relative z-10 flex flex-col h-full justify-between">

        <div>

          {/* Fake App Preview */}
          <div className="w-full h-[160px] rounded-3xl bg-white/5 border border-white/10 mb-8 flex items-center justify-center">

            <div className="w-[120px] h-[120px] rounded-[30px] border border-white/10 bg-black flex items-center justify-center text-cyan-400 text-sm">
              APP UI
            </div>

          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            {title}
          </h3>

          <p className="text-white/60 leading-relaxed">
            {description}
          </p>

        </div>

        <button className="mt-10 self-start px-5 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition">
          View Concept
        </button>

      </div>

    </div>
  );
}