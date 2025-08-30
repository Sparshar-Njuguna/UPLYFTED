
import data from "../data/wellness.json";
import ResourceCard from "../components/ResourceCard.jsx";

export default function Wellness() {
  return (
    <section>
      <header className="mb-6">
        <h2 className="font-[Poppins] text-3xl font-bold">Therapy & Well-being</h2>
        <p className="text-steadyCharcoal/80">Accessible mental health resources and support.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((w) => (
          <ResourceCard key={w.id} title={w.title} tag={w.tag} description={w.description} href="#" />
        ))}
      </div>
    </section>
  );
}
