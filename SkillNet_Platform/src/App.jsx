import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log(`Enrollment updated. Total courses: ${enrolledCount}`);
  }, [enrolledCount]);

  const handleEnroll = () => {
    setEnrolledCount((count) => count + 1);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="divider">----------------------------------------------------</span>
        <h3>SKILLNEST - ONLINE LEARNING PLATFORM</h3>
        <span className="divider">----------------------------------------------------</span>
      </header>
      <section className="main-section">
        <Navbar user={user} enrolledCount={enrolledCount} />
        <Dashboard user={user} onEnroll={handleEnroll} />
      </section>
    </div>
  );
}

export default App;