import React, { useState } from 'react';

const FormHandlingWithValidations = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validErrors = validations();
    if (Object.keys(validErrors).length > 0) {
      setError(validErrors);
    } else {
      alert(`userName: ${formData.userName} and Password: ${formData.password}`);
    }
  };

  const validations = () => {
    const errorMessage = {};
    if (!formData.userName.trim()) {
      errorMessage.userName = "userName is required";
    }
    if (!formData.password.trim()) {
      errorMessage.password = "Password is required";
    }
    return errorMessage;
  };

  return (
    <div>
      <h2>FormHandlingWithValidations</h2>
      <form onSubmit={submitHandler}>
        <label>UserName: </label>
        <input 
          type="text" 
          name="userName" 
          value={formData.userName} 
          onChange={changeHandler} 
        />
        <br />
        {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}

        <label>Password : </label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={changeHandler} 
        />
        <br />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandlingWithValidations;
