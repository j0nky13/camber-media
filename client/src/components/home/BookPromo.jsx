// src/components/home/BookPromo.jsx

// Self-contained 2‑book promo (no data fetch). Sits on the current page background.
export default function BookPromo() {
  return (
    <>
      {/* THE GATHERING */}
      <div className="px-4 pt-10 pb-6">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          {/* Cover */}
          <div className="relative mx-auto w-full max-w-[150px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img src="/gathering-cover.jpg" alt="The Gathering book cover" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
          {/* Copy */}
          <div>
            <h2 className="text-white text-2xl sm:text-3xl">The Gathering</h2>
            <p className="text-white/65 mt-1 text-[11px] uppercase tracking-[0.18em]">W.K. Rader</p>
            <p className="text-white/80 mt-4 leading-relaxed text-sm" style={{ textAlign: 'justify' }}>
              A post-AI apocalypse tale of control, memory, and the last human decisions that matter. Dive into corrupted archives, rogue machine factions, and the people trying to remember what’s true.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="https://thegatheringbook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] shadow-sm border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
              >
                Join the fight
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* THE VENN EFFECT */}
      <div className="px-4 pt-4 pb-12">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          {/* Cover */}
          <div className="relative mx-auto w-full max-w-[140px] sm:max-w-[170px] md:max-w-[220px] lg:max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg md:order-2">
            <img src="/venn-effect-cover.jpg" alt="The Venn Effect book cover" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
          {/* Copy */}
          <div className="md:order-1">
            <h2 className="text-white text-xl sm:text-2xl font-semibold">The Venn Effect</h2>
            <p className="text-white/65 mt-1 text-[11px] uppercase tracking-[0.18em]">W.K. (Bill) Rader</p>
            <p className="text-white/80 mt-4 leading-relaxed text-sm" style={{ textAlign: 'justify' }}>
              A biographical novel exploring the convergence of biotechnology and human destiny — a story where purpose, innovation, and humanity intertwine to shape the future.
            </p>
            <div className="mt-5">
              <a
                href=" https://square.link/u/CyOsLj8U"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] shadow-sm border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}