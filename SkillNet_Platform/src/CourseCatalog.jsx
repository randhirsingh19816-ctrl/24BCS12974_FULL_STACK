import React from "react";
import CourseList from "./CourseList";

function CourseCatalog({ user, onEnroll }) {
  return (
    <div>
      <h3>COURSE CATALOG</h3>
      <CourseList user={user} onEnroll={onEnroll} />
    </div>
  );
}
export default CourseCatalog;