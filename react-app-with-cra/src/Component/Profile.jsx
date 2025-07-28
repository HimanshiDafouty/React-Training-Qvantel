import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <h2>No user data</h2>;
  }

  const { name, age, email, address, description } = user;

  return (
    <div style={styles.card}>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
      <h3>Address:</h3>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      <h3>Description: {description ? description : "No Description provided"}</h3>
    </div>
  );
};

// 💡 Simple styling for better presentation
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '320px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  }
};

export default Profile;
