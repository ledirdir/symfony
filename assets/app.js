import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './react/controllers/User.jsx';
import Header from './react/controllers/Header.jsx';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Main() {

  return (
      <Router>
        <div className="app">
          <div className="Route">
            <Routes>
              <Route path="users" element={<User/>} />
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default Main

if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
 
    root.render(
        <StrictMode>
            <Header />
            <Main />
        </StrictMode>
    );
}