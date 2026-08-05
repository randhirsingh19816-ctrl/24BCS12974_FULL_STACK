import React from "react";
import CourseCatalog from "./CourseCatalog";

function Dashboard({ user, onEnroll }) {
  return (
    <div>
      <CourseCatalog user={user} onEnroll={onEnroll} />
    </div>
  );
}

export default Dashboard;