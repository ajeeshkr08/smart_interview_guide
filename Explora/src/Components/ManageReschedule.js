// src/ManageReschedule.js
import React, { useState } from "react";
import "./ManageReschedule.css";
const ManageReschedule = () => {
  // Replace this with your actual list of appointments
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2023-12-10", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2023-12-11", time: "02:30 PM" },
    // Add more appointments as needed
  ]);

  const handleReschedule = (appointmentId, newDate, newTime) => {
    // Perform manual rescheduling logic here
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === appointmentId) {
        return {
          ...appointment,
          date: newDate,
          time: newTime,
        };
      }
      return appointment;
    });

    setAppointments(updatedAppointments);
  };

  return (
    <div>
      <h2>Manage and Reschedule Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button
                  onClick={() => {
                    const newDate = prompt("Enter new date (YYYY-MM-DD):");
                    const newTime = prompt("Enter new time (HH:mm AM/PM):");
                    if (newDate && newTime) {
                      handleReschedule(appointment.id, newDate, newTime);
                    }
                  }}
                >
                  Reschedule
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReschedule;
