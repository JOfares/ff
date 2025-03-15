import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./AppStyles.css";

const Home = () => (
  <div className="container">
    <h1>Preoperative Anesthesia Assessment</h1>
    <Link to="/patient-info" className="button">Start Assessment</Link>
  </div>
);

const PatientInfo = () => (
  <div className="container">
    <h2>Patient Information</h2>
    <form>
      <label>Full Name: <input type="text" /></label><br />
      <label>Age: <input type="number" /></label><br />
      <label>Gender: <select><option>Male</option><option>Female</option></select></label><br />
      <label>Height: <input type="number" /> cm</label><br />
      <label>Weight: <input type="number" /> kg</label><br />
      <label>BMI: <input type="number" /></label><br />
      <label>Medical Record Number: <input type="text" /></label><br />
      <label>Planned Surgery: <input type="text" /></label><br />
      <label>Surgical Date: <input type="date" /></label><br />
      <label>Surgeon: <input type="text" /></label><br />
      <label>Anesthesiologist: <input type="text" /></label><br />
    </form>
    <Link to="/cardio" className="button">Next</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-info" element={<PatientInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
