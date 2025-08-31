
import data from "../data/wellness.json";
import ResourceCard from "../components/ResourceCard.jsx";
import "../styles/Wellness.css";

export default function Wellness() {
  return (
    <section className="wellness-section">
      <header className="wellness-header">
        <h2>Therapy & Well-being</h2>
        <p>Accessible mental health resources and support.</p>
      </header>

      <div className="wellness-grid">
        {data.map((w) => (
          <ResourceCard
            key={w.id}
            id={w.id}
            title={w.title}
            tag={w.tag}
            description={w.description}
            to={`/wellness/${w.id}`} // dynamic route
          />
        ))}
      </div>
    </section>
  );
}

