import React, {useEffect, useState} from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from "./Dashboard";
import About from "./About";
import StateHeader from "./StateHeader";
import {useSDK} from "@metamask/sdk-react";
import detectEthereumProvider from '@metamask/detect-provider'

export default App = () => {
  return (
    <React.Fragment>
      <StateHeader
      />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
            />
          }
        />
        <Route
          path="/about"
          element={<About/>}
        />
      </Routes>
    </React.Fragment>
  );
}
