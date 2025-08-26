export default function Press() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold">Press Kit</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg border border-brand-800">
          <h2 className="text-xl font-semibold">Assets</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutralx-400">
            <li><a href="/press/cambermedia.jpg" download>Logo (JPG)</a></li>
            <li><a href="/venn-effect-cover.jpg" download>The Venn Effect — Cover</a></li>
            <li><a href="/covers/the-gathering.jpg" download>The Gathering — Cover (placeholder)</a></li>
            <li><a href="/press/camber-fact-sheet.pdf" download>Fact Sheet (PDF)</a></li>
          </ul>
        </div>
        <div className="p-6 rounded-lg border border-brand-800">
          <h2 className="text-xl font-semibold">Press Inquiries</h2>
          <p className="mt-2 text-neutralx-400">Email <a href="mailto:press@camber.media">press@camber.media</a> for interviews, galleys, or events.</p>
        </div>
      </div>
    </section>
  );
}