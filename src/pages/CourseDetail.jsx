// src/pages/CourseDetail.jsx
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses.json";
import "../styles/CourseDetail.css";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="course-detail not-found">
        <h2>Course not found</h2>
        <p>We couldn't locate that course. Try returning to the course list.</p>
        <Link to="/career" className="back-link">← Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <header className="course-hero">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-sub">{course.overview || course.description}</p>
        <div className="course-meta">
          <span className="chip">{course.level}</span>
          <span className="chip">{course.category}</span>
          {course.duration && <span className="chip">{course.duration}</span>}
        </div>
      </header>

      <main className="course-body">
        <section className="course-section">
          <h3>What you'll learn</h3>
          <p>{course.outcomes}</p>
        </section>

        <section className="course-section">
          <h3>Modules</h3>
          <ol className="modules-list">
            {course.modules && course.modules.map((m, i) => <li key={i}>{m}</li>)}
          </ol>
        </section>

        {course.resources && course.resources.length > 0 && (
          <section className="course-section">
            <h3>Resources</h3>
            <ul className="resources-list">
              {course.resources.map((r, idx) => (
                <li key={idx}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="course-cta-row">
          <a className="enroll-btn" href={course.enrollLink || "/auth"}>
            Enroll / Start →
          </a>
          <Link to="/career" className="back-link">← Back to courses</Link>
        </div>
      </main>
    </div>
  );
}
