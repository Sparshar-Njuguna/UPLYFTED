// src/pages/Career.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import courses from "../data/courses.json";
import "../styles/Career.css";

export default function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="career-title"
        >
          Unlock Your <span className="accent-text">Career Growth</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="career-subtitle"
        >
          Explore skill-building programs designed to prepare you for today’s
          most in-demand careers. Learn at your pace, and take the next step
          forward.
        </motion.p>
      </section>

      {/* Courses Section */}
      <section className="career-courses">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured <span className="accent-text">Courses</span>
        </motion.h2>

        <div className="cards-container">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: course.id * 0.08 }}
              className="card"
            >
              <h3 className="card-title">{course.title}</h3>
              <p className="card-text">{course.description}</p>
              <p className="card-meta">
                <span>{course.level}</span> · <span>{course.category}</span>
              </p>

              {/* INTERNAL ROUTE to course detail page */}
              <Link to={`/course/${course.id}`} className="card-link">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
