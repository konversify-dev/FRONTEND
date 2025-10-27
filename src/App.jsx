import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Pages
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman default */}
        <Route path="/" element={<Login />} />

        {/* Sales */}

      </Routes>
    </Router>
  );
}

export default App;
