import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Agricommunity</h1>
      <div className="button-container">
        <button onClick={() => navigate('/chatkulim')}>Chatkulim</button>
        <button onClick={() => navigate('/disease-prediction')}>Disease Prediction</button>
      </div>
    </div>
  );
};

export default Home;
