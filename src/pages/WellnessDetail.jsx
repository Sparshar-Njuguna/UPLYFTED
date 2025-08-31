import { Link, useParams } from "react-router-dom";
import data from "../data/wellness.json";
import "../styles/WellnessDetail.css";

export default function WellnessDetail() {
  const { id } = useParams();
  const resource = data.find((w) => w.id.toString() === id);

  if (!resource) {
    return (
      <div className="wellness-detail not-found">
        <h2>Resource not found</h2>
        <Link to="/wellness" className="back-link">← Back to Wellness</Link>
      </div>
    );
  }

  return (
    <div className="wellness-detail">
      <header className="wellness-hero">
        <h1 className="wellness-title">{resource.title}</h1>
        {resource.tag && <span className="chip">{resource.tag}</span>}
      </header>

      <main className="wellness-body">
        {resource.details && (
          <section className="hero-card">
            <h3>Overview</h3>
            <p>{resource.details}</p>
          </section>
        )}

        {Array.isArray(resource.resources) && resource.resources.length > 0 && (
          <section className="hero-card">
            <h3>Resources</h3>
            <ul>
              {resource.resources.map((r, i) => (
                <li key={i}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link to="/wellness" className="back-link">← Back to Wellness</Link>
      </main>
    </div>
  );
}
