export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-xl mt-8 border border-brand-800">
      {/* optional: /public/camber-hero.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/camber-hero.mp4"
        autoPlay muted loop playsInline
      />
      <div className="relative bg-gradient-to-b from-brand/40 to-brand/80">
        <div className="px-6 py-20 md:py-28 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display leading-tight">
            Stories with a spine. Media with meaning.
          </h1>
          <p className="mt-5 text-neutralx-400 text-lg">
            Business and fiction—crafted to last.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/books" className="btn">Explore Titles</a>
            <a href="/submissions" className="btn bg-transparent border border-neutralx-400 text-neutralx-50 hover:bg-brand-800">
              Submit a Manuscript
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}