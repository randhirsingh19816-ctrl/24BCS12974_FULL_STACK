import React from "react";
import { useUser } from "../customHooks/useUser";

const StudentProfileContextVersion = () => {
  const user = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="profile-card">
      <h4>Student Details</h4>
      <p className="profile-divider">-------------------------</p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Program:</strong> {user.program}
      </p>
    </div>
  );
};

export default StudentProfileContextVersion;
