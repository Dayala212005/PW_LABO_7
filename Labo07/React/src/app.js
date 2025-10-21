import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Protected from "./protected";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
    </Routes>
  </Router>
);

export default App;
