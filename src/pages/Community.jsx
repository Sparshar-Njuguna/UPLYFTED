
export default function Community() {
  return (
    <section className="prose max-w-none">
      <h2 className="font-[Poppins] text-3xl font-bold">Community Center</h2>
      <p className="text-steadyCharcoal/80">
        A safe space for connection. The forum is coming soon — for now, browse curated groups,
        mentorship circles, and local meetups (placeholder).
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-black/5">
          <h3 className="font-semibold">Peer Support Circles</h3>
          <p className="text-sm text-steadyCharcoal/80">Weekly virtual groups moderated by trained volunteers.</p>
        </article>
        <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-black/5">
          <h3 className="font-semibold">Mentorship Matches</h3>
          <p className="text-sm text-steadyCharcoal/80">Career mentors by field and region (coming soon).</p>
        </article>
        <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-black/5">
          <h3 className="font-semibold">Local Resource Map</h3>
          <p className="text-sm text-steadyCharcoal/80">Find nearby shelters, clinics, and training hubs.</p>
        </article>
      </div>
    </section>
  );
}
