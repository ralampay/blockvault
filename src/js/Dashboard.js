import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { ECHELON_PRIME_ABI, ECHELON_PRIME_TOKEN_ADDRESS } from "./defaults/echelon";

export default Dashboard = (params) => {
  return (
    <div>
      Dashboard
      <Link to={`/about`}>
        About
      </Link>
    </div>
  );
}
