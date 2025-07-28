// DashBoard.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div>
      <h2>DashBoard</h2>

      {/* Navigation Links */}
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="parent" style={{ marginRight: "1rem" }}>Parent</Link>
        <Link to="child">Child</Link>
      </nav>

      {/* Nested Route Placeholder */}
      <Outlet />
    </div>
  );
};

export default DashBoard;
