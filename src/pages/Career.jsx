
import { useEffect } from "react";
import { motion } from "framer-motion";
import courses from "../data/courses.json";
import "../styles/Career.css";

export default function Career() {
  // Scroll to top when the page loads
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
          Explore resources, mentorship, and courses designed to help you
          thrive in your career journey.
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
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card"
            >
              <h3 className="card-title">{course.title}</h3>
              <p className="card-text">{course.description}</p>
              <a href={course.link} className="card-link" target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}