import authors from '../data/authors.json';

export default function Authors() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold">Authors</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((a) => (
          <article key={a.slug} className="p-6 rounded-lg border border-brand-800 bg-brand-800/40">
            <div className="flex items-center gap-4">
              <img src={a.headshot} alt={a.name} className="w-16 h-16 rounded object-cover border border-brand-800" />
              <div>
                <h3 className="font-semibold text-neutralx-50">{a.name}</h3>
                <div className="text-sm text-neutralx-400">{a.social?.x ? <a href={a.social.x} className="underline">X</a> : null}</div>
              </div>
            </div>
            <div className="prose prose-invert mt-4" dangerouslySetInnerHTML={{ __html: a.bioHTML }} />
          </article>
        ))}
      </div>
    </section>
  );
}