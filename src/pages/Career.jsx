
import data from "../data/courses.json";
import ResourceCard from "../components/ResourceCard.jsx";

export default function Career() {
  return (
    <section>
      <header className="mb-6">
        <h2 className="font-[Poppins] text-3xl font-bold">Career & Learning Center</h2>
        <p className="text-steadyCharcoal/80">Upskilling resources to help you earn and grow.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((c) => (
          <ResourceCard key={c.id} title={c.title} tag={c.level} description={c.description} href="#" />
        ))}
      </div>
    </section>
  );
}