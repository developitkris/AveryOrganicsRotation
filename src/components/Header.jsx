import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Avery Organic Farms</h1>
      <Link to="/">Home</Link> | <Link to="/cropslist">View Seasonal Crops </Link> | <Link to="/locationslist">View Farmer's Market Locations </Link>
    </div>
  );
}

export default Header;
