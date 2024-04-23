-- appointments.sql

-- Define the table for appointments
CREATE TABLE Appointments (
    id INTEGER PRIMARY KEY,
    patientName TEXT,
    date TEXT,
    time TEXT
);

-- Insert dummy data into the Appointments table
INSERT INTO Appointments (patientName, date, time) VALUES
    ('John Doe', '2023-12-10', '10:00 AM'),
    ('Jane Smith', '2023-12-11', '02:30 PM');

-- Define the table for doctors
CREATE TABLE Doctors (
    id INTEGER PRIMARY KEY,
    name TEXT,
    specialty TEXT
);

-- Insert dummy data into the Doctors table
INSERT INTO Doctors (name, specialty) VALUES
    ('Dr. John Smith', 'Cardiologist'),
    ('Dr. Jane Doe', 'Orthopedic Surgeon');

-- Define the table for users
CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

-- Insert dummy data into the Users table
INSERT INTO Users (username, password) VALUES
    ('admin', 'admin_password'),
    ('user', 'user_password');
