import React from "react";

function Navbar({ user, enrolledCount }) {
  return (
    <nav>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <p>Program: {user.program}</p>
          <p>
            Enrolled: {enrolledCount} {enrolledCount === 1 ? "course" : "courses"}
          </p>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;