// import './styles/app.css';
// import { createRoot } from 'react-dom/client';
// import React from 'react';
// //import User from './react/controllers/User.jsx';
// import Hello from './react/controllers/Hello.jsx';
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<User />);
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './react/controllers/User.jsx';
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
            <Main />
        </StrictMode>
    );
}