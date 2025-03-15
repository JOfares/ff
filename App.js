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

const Cardio = () => (
  <div className="container">
    <h2>Medical History - Cardiovascular System</h2>
    <form>
      <label><input type="checkbox" /> Hypertension</label><br />
      <label><input type="checkbox" /> CAD</label><br />
      <label><input type="checkbox" /> CHF</label><br />
      <label><input type="checkbox" /> Arrhythmia</label><br />
      <label><input type="checkbox" /> Pacemaker/ICD</label><br />
      <label><input type="checkbox" /> Heart Valve Replacement</label><br />
      <label>RCRI Score: <input type="number" /></label><br />
      <label>NSQIP Score: <input type="number" /></label><br />
      <label>DASI Score: <input type="number" /></label><br />
    </form>
    <Link to="/respiratory" className="button">Next</Link>
  </div>
);

const Respiratory = () => (
  <div className="container">
    <h2>Respiratory System</h2>
    <form>
      <label><input type="checkbox" /> Asthma</label><br />
      <label><input type="checkbox" /> COPD</label><br />
      <label><input type="checkbox" /> OSA</label><br />
      <label><input type="checkbox" /> CPAP Use</label><br />
      <label>Mallampati Score: <input type="number" /></label><br />
    </form>
    <Link to="/renal" className="button">Next</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/respiratory" element={<Respiratory />} />
      </Routes>
    </Router>
  );
};

export default App;
