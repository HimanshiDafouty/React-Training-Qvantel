import React from "react";
import "../styles/AppHome.css";

const AppHome = () => {
  return (
    <div className="app-home-container">
      <header className="app-header">
        <h1>🧩 Hi, I am the App Component rendering all other components</h1>
        <p>Navigate freely using links or routes!</p>
      </header>
    </div>
  );
};

export default AppHome;
