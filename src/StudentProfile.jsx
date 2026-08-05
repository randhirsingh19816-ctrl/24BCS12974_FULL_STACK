import React from "react";

function StudentProfile({ user }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>-------------------------</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Program:</strong> {user.program}</p>
    </div>
  );
}

export default StudentProfile;