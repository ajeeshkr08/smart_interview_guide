// import logo from './logo.svg';
// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Cover from "./Components/Cover";
import UserDash from "./Components/to/Userdash";
import LanguagesPage from "./Components/to/LanguagesPage";
import LoginPage from "./Components/LoginPage";
import AdminDashboard from "./Components/AdminDashboard";
// import Login from "./Components/Login";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            // <Login />
            <LoginPage setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />
          }
        />
        <Route
          path="/user-card"
          element={
            loggedIn && !isAdmin ? (
              <LanguagesPage setLoggedIn={setLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/user-dashboard1" element={<UserDash />} />
        <Route
          path="/admin-dashboard"
          element={
            loggedIn && isAdmin ? (
              <AdminDashboard setLoggedIn={setLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
