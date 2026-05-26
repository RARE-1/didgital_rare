type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition-transform duration-300">

      <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400/30 mb-6" />

      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      <p className="text-white/60 leading-relaxed">
        {description}
      </p>

    </div>
  );
}