export default function Submissions() {
  return (
    <section className="mt-10 max-w-3xl">
      <h1 className="text-3xl font-semibold">Submission Guidelines</h1>
      <div className="prose prose-invert mt-6 max-w-none">
        <p>We consider business nonfiction (strategy, founder memoir, frameworks) and fiction (dystopian, speculative, literary).</p>
        <ul>
          <li>Query letter (≤ 500 words)</li>
          <li>Synopsis (1–2 pages)</li>
          <li>First 30 pages or full manuscript (PDF)</li>
        </ul>
        <p>Response time: 6–8 weeks. Simultaneous submissions are okay—please notify us upon acceptance elsewhere.</p>
      </div>
      <div className="mt-6 flex gap-3">
        <a className="btn" href="mailto:submissions@camber.media?subject=Camber%20Submission">Email Submission</a>
        <a className="btn bg-transparent border border-neutralx-400 text-neutralx-50 hover:bg-brand-800" href="#">
          Upload Portal (soon)
        </a>
      </div>
    </section>
  );
}