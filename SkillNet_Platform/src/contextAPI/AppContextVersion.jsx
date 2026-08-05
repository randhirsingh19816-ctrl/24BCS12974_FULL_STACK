import React, { useState } from "react";
import Navbar from "../Navbar";
import DashboardContextVersion from "./DashboardContextVersion";
import { UserContext } from "./UserContext";

const AppContextVersion = () => {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  const handleEnroll = () => {
    setEnrolledCount((count) => count + 1);
  };

  return (
    <UserContext.Provider value={user}>
      <div className="context-app">
        <Navbar enrolledCount={enrolledCount} />
        <DashboardContextVersion onEnroll={handleEnroll} />
      </div>
    </UserContext.Provider>
  );
};

export default AppContextVersion;
