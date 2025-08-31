import data from "../data/aid.json";
import ResourceCard from "../components/ResourceCard.jsx";
import "../styles/Aid.css";

export default function Aid() {
  return (
    <section className="aid-section">
      {/* Hotline Hero Banner */}
      <div className="hotline-hero">
        <h2 className="hotline-title">📞 Uplyfted Emergency Hotline</h2>
        <p className="hotline-subtitle">
          Immediate 24/7 support for urgent crises. You are never alone.
        </p>
        <a href="tel:+1234567890" className="hotline-button">Call Now</a>
      </div>

      {/* Section Header */}
      <header className="aid-header">
        <h2 className="aid-title">Financial Aid & Support</h2>
        <p className="aid-subtitle">Grants, microloans, shelter, and childcare resources.</p>
      </header>

      {/* Aid Grid */}
      <div className="aid-grid">
        {data.map((item) => (
          <ResourceCard
            key={item.id}
            id={item.id}
            title={item.title}
            tag={item.type}
            description={item.description}
            to={`/aid/${item.id}`}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="aid-cta">
        <h3 className="aid-cta-title">Need something not listed?</h3>
        <p className="aid-cta-subtitle">Reach out to us directly — we’re here to help.</p>
        <a href="mailto:support@uplyfted.org" className="aid-cta-button">Contact Us</a>
      </div>
    </section>
  );
}

