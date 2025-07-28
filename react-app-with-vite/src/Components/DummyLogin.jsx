import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DummyLogin.css"


const DummyLogin = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    Username: "",
    Password: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.Username === "harry" && formData.Password === "harry123") {
      nav("/home", {
        state: {
          username: formData.Username,
          password: formData.Password
        }
      });
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Dummy Login</h2>
      <form onSubmit={submitHandler} className="form">
        <label>Username:</label>
        <input
          type="text"
          name="Username"
          value={formData.Username}
          onChange={changeHandler}
        />

        <label>Password:</label>
        <input
          type="password"
          name="Password"
          value={formData.Password}
          onChange={changeHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DummyLogin;
