import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ViewAppointments from "./ViewAppointments";
import ManageReschedule from "./ManageReschedule";
import ManageDoctors from "./ManageDoctors";
import "./AdminDashboard.css"; // Import the CSS file

const AdminDashboard = ({ setLoggedIn }) => {
  const [constentVisible, setConstentVisible] = useState(1);
  return (
    <div className="admin-dashboard">
      <Sidebar
        setConstentVisible={setConstentVisible}
        setLoggedIn={setLoggedIn}
      />
      <div className="content">
        {constentVisible === 1 && <ViewAppointments />}
        {constentVisible === 2 && <ManageReschedule />}
        {constentVisible === 3 && <ManageDoctors />}
      </div>
    </div>
  );
};

export default AdminDashboard;
