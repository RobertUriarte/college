import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import Join from "./Pages/Join/Join";
import RSO from "./Pages/Create RSO/RSO";
import CreateEvent from "./Pages/Create Event/CreateEvent";
import StudentSignUp from "./Pages/StudentSignUp/StudentSignUp";
import SuperAdminSignUp from "./Pages/SuperAdminSignUp/SuperAdminSignUp";
import AdminSignUp from "./Pages/AdminSignUp/AdminSignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home/:user/:permission" element={<HomePage />} />
        <Route path="/join/:user/:permission" element={<Join />} />
        <Route path="/create-rso/:user/:permission" element={<RSO />} />
        <Route path="/create-event/:user/:permission" element={<CreateEvent />} />
        <Route path="/student/:user" element={<StudentSignUp />} />
        <Route path="/admin/:user" element={<AdminSignUp />} />
        <Route path="/super-admin/:user" element={<SuperAdminSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
