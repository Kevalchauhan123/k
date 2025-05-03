// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./templates/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="av-app">
        
        <main className="av-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;