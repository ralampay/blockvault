import React from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from "./Dashboard";
import About from "./About";

export default App = () => {
  return (
    <React.Fragment>
      <section className="app-main-section">
        <Routes>
          <Route
            path="/"
            element={<Dashboard/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
        </Routes>
      </section>
    </React.Fragment>
  );
}
