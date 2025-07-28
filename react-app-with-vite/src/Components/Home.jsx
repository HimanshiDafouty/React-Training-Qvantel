import React from "react";
import "../styles/Home.css"

const Home = () => {
  const user = window.history.state?.usr;

  return (
    <div className="container">
      <h2 className="title">Home Page</h2>
      {user ? (
        <div className="user-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Password:</strong> {user.password}</p>
        </div>
      ) : (
        <p className="no-data">No user data available.</p>
      )}
    </div>
  );
};

export default Home;
