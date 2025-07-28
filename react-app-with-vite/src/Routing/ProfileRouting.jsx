import React from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate

const ProfileRouting = () => {
  const navigate = useNavigate();  // Hook to programmatically navigate

  const handleNavigate = () => {
    navigate("/useFetchCustomHook"); // Navigate to desired route on button click
  };

  return (
    <div>
      <h2>Hello from Profile Routing</h2>
      <button onClick={handleNavigate}>Go to Custom Hook</button>
    </div>
  );
};

export default ProfileRouting;
