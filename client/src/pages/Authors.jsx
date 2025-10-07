export default function Authors() {
  const bioHTML = `<p>
W.K. Rader (Bill Rader) is a novelist and biotechnology entrepreneur whose work explores the intersection of science, ethics, and the human condition. His debut novel, The Gathering, has been formally entered for consideration in the Pulitzer Prize for Fiction. Before turning to writing, Rader founded several biotechnology companies and holds patents for implanted medical systems.
<br><br>
Drawing on his groundbreaking experience in biotech, Rader infuses his fiction with scientific realism and emotional depth. <em>The Gathering</em> —a gripping story of rebellion, sacrifice, and the enduring power of the human spirit—depicts a near‑future world where artificial intelligence has taken control, forcing humanity to confront what it means to be truly free.
<br><br>
He is also the author of award‑winning <em>The Venn Effect</em>, a biographical novel exploring the convergence of biotechnology and human destiny. Through storytelling, Rader continues his lifelong pursuit of understanding how innovation shapes identity, autonomy, and hope.
<br><br>
Bill lives in the Lowcountry of South Carolina with his wife, Patricia, and their Golden Retriever.
</p>`;

  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold">Authors</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="p-6 rounded-lg border border-brand-800 bg-brand-800/40">
          <div className="flex items-center gap-4">
            <img src="/bill-rader.jpg" alt="W.K. (Bill) Rader" className="w-16 h-16 rounded object-cover border border-brand-800" />
            <div>
              <h3 className="font-semibold text-neutral-50">W.K. (Bill) Rader</h3>
              <div className="text-sm text-neutral-400"><a href="https://x.com/wkrader" className="underline">X</a></div>
            </div>
          </div>
          <div className="prose prose-invert mt-4" style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: bioHTML }} />
        </article>
      </div>
    </section>
  );
}