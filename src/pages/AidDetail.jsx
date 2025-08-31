// src/pages/AidDetail.jsx
import { Link, useParams } from "react-router-dom";
import aidData from "../data/aid.json";
import "../styles/AidDetail.css";

export default function AidDetail() {
  const { id } = useParams();
  const aid = aidData.find((a) => a.id.toString() === id);

  if (!aid) {
    return (
      <div className="aid-detail not-found">
        <h2>Resource not found</h2>
        <p>We couldn’t find that aid resource. Try returning to the aid list.</p>
        <Link to="/aid" className="back-link">← Back to Aid</Link>
      </div>
    );
  }

  return (
    <div className="aid-detail">
      {/* Hero Section */}
      <header className="aid-hero">
        <h1 className="aid-title">{aid.title}</h1>
        <div className="aid-meta">
          <span className="chip">{aid.type}</span>
        </div>
      </header>

      {/* Content Sections */}
      <main className="aid-body">
        {aid.overview && (
          <section className="aid-section-card">
            <h3>Overview</h3>
            <p>{aid.overview}</p>
          </section>
        )}

        {aid.eligibility && (
          <section className="aid-section-card">
            <h3>Eligibility</h3>
            <p>{aid.eligibility}</p>
          </section>
        )}

        {aid.application && (
          <section className="aid-section-card">
            <h3>How to Apply</h3>
            <p>{aid.application}</p>
          </section>
        )}

        {aid.resources && aid.resources.length > 0 && (
          <section className="aid-section-card">
            <h3>Resources</h3>
            <ul>
              {aid.resources.map((r, idx) => (
                <li key={idx}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <div className="aid-cta-row">
          <a className="aid-cta-btn" href={aid.link || "/auth"} target="_blank" rel="noopener noreferrer">
            Apply / Learn More →
          </a>
          <Link to="/aid" className="back-link">← Back to Aid</Link>
        </div>
      </main>
    </div>
  );
}

