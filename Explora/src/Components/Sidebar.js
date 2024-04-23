// src/Sidebar.js
import React from "react";

const Sidebar = ({ setConstentVisible, setLoggedIn }) => {
  const toggler = (n) => {
    console.log(n);
    setConstentVisible(n);
  };
  const handleLogout = () => {
    // Implement the logic for logout
    setLoggedIn(false);
    console.log("Logout logic goes here");
  };
  return (
    <nav className="sidebar">
      <h1>Explora</h1>
      <ul>
        <li>
          <label>Basics</label>
        </li>
        <li onClick={() => toggler(2)}>
          <label>Ai Assistant </label>
        </li>
        <li onClick={() => toggler(3)}>
          <label>Compiler</label>
        </li>
        <li onClick={() => toggler(4)}>
          <label>Mock Test</label>
        </li>
        <li>
          <label>Logout</label>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
{
  /* <li onClick={() => toggler(1)}>
          <label>View Appointments</label>
        </li>
        <li onClick={() => toggler(2)}>
          <label>Manage and Reschedule</label>
        </li>
        <li onClick={() => toggler(3)}>
          <label>Manage Doctors</label>
        </li>
        <li onClick={handleLogout}></li> */
}
