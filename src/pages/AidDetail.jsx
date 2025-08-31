// src/pages/AidDetail.jsx
import { Link, useParams } from "react-router-dom";
import aids from "../data/aid.json";
import "../styles/AidDetail.css";

export default function AidDetail() {
  const { id } = useParams();
  const aid = aids.find((a) => a.id.toString() === id);

  if (!aid) {
    return (
      <div className="aid-detail not-found">
        <h2>Resource not found</h2>
        <p>We couldn’t locate that aid program. Try returning to the list.</p>
        <Link to="/aid" className="back-link">← Back to Aid</Link>
      </div>
    );
  }

  return (
    <div className="aid-detail">
      <header className="aid-hero">
        <h1 className="aid-title">{aid.title}</h1>
        {/* Removed the duplicate "aid-sub" so overview only shows once */}
        <div className="aid-meta">
          {aid.type && <span className="chip">{aid.type}</span>}
        </div>
      </header>

      <main className="aid-body">
        {aid.details || aid.description ? (
          <section className="aid-section hero-card">
            <h3>Overview</h3>
            <p>{aid.details || aid.description}</p>
          </section>
        ) : null}

        {aid.eligibility && (
          <section className="aid-section hero-card">
            <h3>Eligibility</h3>
            <p>{aid.eligibility}</p>
          </section>
        )}

        {Array.isArray(aid.steps) && aid.steps.length > 0 && (
          <section className="aid-section hero-card">
            <h3>How to apply</h3>
            <ol className="steps-list">
              {aid.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </section>
        )}

        {Array.isArray(aid.documents) && aid.documents.length > 0 && (
          <section className="aid-section hero-card">
            <h3>Documents</h3>
            <ul className="docs-list">
              {aid.documents.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </section>
        )}

        {Array.isArray(aid.resources) && aid.resources.length > 0 && (
          <section className="aid-section hero-card">
            <h3>Resources</h3>
            <ul className="resources-list">
              {aid.resources.map((r, i) => (
                <li key={i}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="aid-cta-row">
          {aid.applyLink && (
            <a
              className="apply-btn"
              href={aid.applyLink}
              target={aid.applyLink.startsWith("http") ? "_blank" : undefined}
              rel={aid.applyLink.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              Apply / Get Help →
            </a>
          )}
          <Link to="/aid" className="back-link">← Back to Aid</Link>
        </div>

        {aid.contactEmail && (
          <p className="aid-contact">
            Need a human? <a href={`mailto:${aid.contactEmail}`}>{aid.contactEmail}</a>
          </p>
        )}
      </main>
    </div>
  );
}


