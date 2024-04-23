// src/ManageDoctors.js
import React, { useState } from "react";
import "./ManageDoctors.css";
const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Jane Doe", specialty: "Orthopedic Surgeon" },
    // Add more doctors as needed
  ]);

  const [newDoctorName, setNewDoctorName] = useState("");
  const [newDoctorSpecialty, setNewDoctorSpecialty] = useState("");

  const handleAddDoctor = () => {
    // Validate input and add the new doctor
    if (newDoctorName && newDoctorSpecialty) {
      const newDoctor = {
        id: doctors.length + 1,
        name: newDoctorName,
        specialty: newDoctorSpecialty,
      };
      setDoctors([...doctors, newDoctor]);
      setNewDoctorName("");
      setNewDoctorSpecialty("");
    } else {
      alert("Please enter both doctor name and specialty.");
    }
  };

  const handleRemoveDoctor = (doctorId) => {
    // Remove the doctor with the given ID
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== doctorId);
    setDoctors(updatedDoctors);
  };

  return (
    <div>
      <h2>Manage and Add Doctors</h2>
      <div>
        <label>
          Doctor Name:
          <input
            type="text"
            value={newDoctorName}
            onChange={(e) => setNewDoctorName(e.target.value)}
          />
        </label>
        <label>
          Specialty:
          <input
            type="text"
            value={newDoctorSpecialty}
            onChange={(e) => setNewDoctorSpecialty(e.target.value)}
          />
        </label>
        <button onClick={handleAddDoctor}>Add Doctor</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button onClick={() => handleRemoveDoctor(doctor.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
