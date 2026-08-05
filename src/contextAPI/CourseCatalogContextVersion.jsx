import React from "react";
import CourseListContextVersion from "./CourseListContextVersion";

const CourseCatalogContextVersion = ({ onEnroll }) => {
  return (
    <div className="context-course-catalog">
      <CourseListContextVersion onEnroll={onEnroll} />
    </div>
  );
};

export default CourseCatalogContextVersion;
