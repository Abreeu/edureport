import React from "react";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <LoginPage />
    </>
  );
};

export default App;
