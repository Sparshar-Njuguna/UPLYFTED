import { useParams, Link } from "react-router-dom";
import coursesData from "../data/courses.json";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="not-found">Course not found</div>;
  }

  return (
    <div className="course-detail-container">
      <div className="course-detail-card">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>
        <p className="course-duration">⏳ Duration: {course.duration}</p>
        <p className="course-level">📘 Level: {course.level}</p>
        <p className="course-price">💲 Price: {course.price}</p>

        <div className="buttons">
          <Link to="/career" className="back-btn">
            ← Back to Courses
          </Link>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
