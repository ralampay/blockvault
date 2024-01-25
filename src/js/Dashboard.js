import React, { useState } from "react";
import {Link} from "react-router-dom";

export default Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link to={`/about`}>
        About
      </Link>
    </div>
  );
}
