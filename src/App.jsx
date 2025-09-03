import React from "react";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignUpUser from "./pages/SignUpUser.jsx";
import SignUpSchool from "./pages/SignUpSchool.jsx";
import SignUpAdmin from "./pages/SignUpAdmin.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SeePublicComplaints from "./pages/SeePublicComplaints.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import AdminProfile from "./pages/AdminProfile.jsx";
import SchoolProfile from "./pages/SchoolProfile.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";
import ComplaintRegister from "./pages/ComplaintRegister.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-user" element={<SignUpUser />} />
          <Route path="/signup-school" element={<SignUpSchool />} />
          <Route path="/signup-admin" element={<SignUpAdmin />} />
          <Route
            path="/seepubliccomplaints"
            element={<SeePublicComplaints />}
          />
          <Route path="/howitworks" element={<HowItWorksPage />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/schoolprofile" element={<SchoolProfile />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="complaintregister" element={<ComplaintRegister />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
