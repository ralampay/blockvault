import React, {useState} from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from "./Dashboard";
import About from "./About";
import StateHeader from "./StateHeader";

export default App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <React.Fragment>
      <StateHeader
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
      <div>
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
      </div>
    </React.Fragment>
  );
}
