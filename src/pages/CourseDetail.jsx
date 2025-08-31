import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import coursesData from "../data/courses.json";
import "../styles/CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <motion.div
        className="course-detail not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Course not found</h2>
        <Link to="/career" className="back-btn">
          ← Back to Courses
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="course-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="course-card"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>

        <div className="course-meta">
          <span className="level">📘 {course.level}</span>
          <span className="duration">⏳ {course.duration}</span>
        </div>

        <div className="course-actions">
          <Link to="/career" className="back-btn">
            ← Back to Courses
          </Link>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-btn"
          >
            Enroll Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseDetail;