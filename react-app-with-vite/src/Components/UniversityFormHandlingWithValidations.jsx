import React, { useState } from 'react';
import '../styles/UniversityForm.css';

const UniversityFormHandlingWithValidations = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    course: '',
    marks: '',
  });

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
      alert("🎉 Registration Successful!");
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        course: '',
        marks: '',
      });
      setError({});
    }
  };

  const validations = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (!nameRegex.test(formData.fullName.trim())) {
      errors.fullName = 'Only letters are allowed';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email format';
    }

    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile.trim())) {
      errors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.course.trim()) {
      errors.course = 'Please select a course';
    }

    if (!formData.marks.trim()) {
      errors.marks = '12th marks are required';
    } else if (isNaN(formData.marks) || formData.marks < 0 || formData.marks > 100) {
      errors.marks = 'Marks must be between 0 and 100';
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h2>🎓 University Registration Form</h2>
      <form onSubmit={submitHandler} className="form-box">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={changeHandler}
          />
          {error.fullName && <p className="error">{error.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={changeHandler}
          />
          {error.mobile && <p className="error">{error.mobile}</p>}
        </div>

        <div className="form-group">
          <label>Select Course:</label>
          <select name="course" value={formData.course} onChange={changeHandler}>
            <option value="">-- Select --</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.A">B.A</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          {error.course && <p className="error">{error.course}</p>}
        </div>

        <div className="form-group">
          <label>12th Grade Marks (%):</label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={changeHandler}
          />
          {error.marks && <p className="error">{error.marks}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UniversityFormHandlingWithValidations;
