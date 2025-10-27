import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Pages
import Login from "./pages/Login.jsx";

// Sales
import Dashboard from "./pages/Sales/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman default */}
        <Route path="/" element={<Login />} />

        {/* Sales */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
