import React from "react";
import CourseCatalogContextVersion from "./CourseCatalogContextVersion";

const DashboardContextVersion = ({ onEnroll }) => {
  return (
    <div className="context-dashboard">
      <h3>Course Catalog</h3>
      <CourseCatalogContextVersion onEnroll={onEnroll} />
    </div>
  );
};

export default DashboardContextVersion;
