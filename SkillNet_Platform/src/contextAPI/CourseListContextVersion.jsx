import React from "react";
import StudentProfileContextVersion from "./StudentProfileContextVersion";

const CourseListContextVersion = ({ onEnroll }) => {
  const courses = [
    { title: "React Basics", price: 999 },
    { title: "Node.js Essentials", price: 1199 },
    { title: "UI/UX Design", price: 799 },
  ];

  return (
    <div className="context-course-list">
      {courses.map((course) => (
        <div key={course.title} className="course-item">
          <span>
            {course.title} &nbsp; ₹{course.price}
          </span>
          <button type="button" onClick={onEnroll}>
            Enroll
          </button>
        </div>
      ))}
      <StudentProfileContextVersion />
    </div>
  );
};

export default CourseListContextVersion;
