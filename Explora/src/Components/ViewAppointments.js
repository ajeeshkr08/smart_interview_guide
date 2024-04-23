// src/ViewAppointments.js
import React, { useState } from "react";
import "./ViewAppointments.css";
const ViewAppointments = () => {
  // Replace this with your actual list of appointments
  const [appointments] = useState([
    { id: 1, patientName: "John Doe", date: "2023-12-10", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2023-12-11", time: "02:30 PM" },
    // Add more appointments as needed
  ]);

  return (
    <div>
      <h2>View Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointments;
