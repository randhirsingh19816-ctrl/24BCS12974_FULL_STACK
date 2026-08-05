import React from "react";
import StudentProfile from "./StudentProfile";

function CourseList({ user, onEnroll }) {
  const courses = [
    { title: "React Basics", price: 999 },
    { title: "Node.js Essentials", price: 1199 },
    { title: "UI/UX Design", price: 799 },
  ];

  return (
    <div>
      {courses.map((course) => (
        <div key={course.title}>
          <p>
            {course.title} &nbsp; ₹{course.price}
          </p>
          <button type="button" onClick={() => onEnroll()}>
            Enroll
          </button>
        </div>
      ))}
      <StudentProfile user={user} />
    </div>
  );
}

export default CourseList;