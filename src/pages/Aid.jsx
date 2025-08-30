
import data from "../data/aid.json";
import ResourceCard from "../components/ResourceCard.jsx";

export default function Aid() {
  return (
    <section>
      <header className="mb-6">
        <h2 className="font-[Poppins] text-3xl font-bold">Financial Aid & Support</h2>
        <p className="text-steadyCharcoal/80">Grants, microloans, and emergency funds.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ResourceCard key={item.id} title={item.title} tag={item.type} description={item.description} href="#" />
        ))}
      </div>
    </section>
  );
}