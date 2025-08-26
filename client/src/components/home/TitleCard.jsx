export default function TitleCard({ cover, title, author, tag }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-brand-800 bg-brand-800 hover:bg-brand-800/60 transition-colors">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={cover}
          alt={`${title} cover`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-neutralx-400">{tag}</div>
        <h3 className="mt-1 font-semibold text-neutralx-50">{title}</h3>
        <p className="text-sm text-neutralx-400">{author}</p>
      </div>
    </article>
  );
}