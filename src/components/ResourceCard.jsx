export default function ResourceCard({ title, tag, description, cta = "Learn more", href }) {
  return (
    <article className="resource-card">
      <div className="resource-card-tag-wrapper">
        {tag && <span className="resource-card-tag">{tag}</span>}
      </div>
      <h3 className="resource-card-title">{title}</h3>
      <p className="resource-card-description">{description}</p>
      {href && <a href={href} className="resource-card-link">{cta} →</a>}
    </article>
  );
}
