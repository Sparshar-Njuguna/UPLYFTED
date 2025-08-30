
export default function ResourceCard({ title, tag, description, cta="Learn more", href="#" }) {
  return (
    <article className="rounded-2xl bg-white/90 shadow-sm ring-1 ring-black/5 p-5 flex flex-col gap-3 hover:shadow-md transition">
      <div className="inline-flex items-center gap-2">
        {tag && <span className="text-xs font-semibold rounded-full bg-growthMint/30 text-steadyCharcoal px-2 py-1">{tag}</span>}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-steadyCharcoal/80">{description}</p>
      <a href={href} className="mt-auto text-empowerCoral font-semibold hover:underline">{cta} →</a>
    </article>
  );
}