import { Link } from "react-router-dom";

export default function ResourceCard({
  id,
  title,
  tag,
  description,
  cta = "Learn more",
  href,
  to
}) {
  return (
    <article className="resource-card">
      <div className="resource-card-tag-wrapper">
        {tag && <span className="resource-card-tag">{tag}</span>}
      </div>
      <h3 className="resource-card-title">{title}</h3>
      <p className="resource-card-description">{description}</p>

      {to ? (
        <Link to={to} className="resource-card-link">{cta} →</Link>
      ) : href ? (
        <a href={href} className="resource-card-link">{cta} →</a>
      ) : null}
    </article>
  );
}
