
import data from "../data/aid.json";
import ResourceCard from "../components/ResourceCard.jsx";
import "../styles/Aid.css";

export default function Aid() {
  return (
    <section className="aid-section">
      <header className="aid-header">
        <h2 className="aid-title">Financial Aid & Support</h2>
        <p className="aid-subtitle">Grants, microloans, and emergency funds.</p>
      </header>
      <div className="aid-grid">
        {data.map((item) => (
          <ResourceCard
            key={item.id}
            title={item.title}
            tag={item.type}
            description={item.description}
            href="#"
          />
        ))}
      </div>
    </section>
  );
}
