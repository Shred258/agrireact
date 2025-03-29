import React from 'react';
import { Link } from 'react-router-dom'; // React Router for navigation

function LandingPage() {
  console.log("LandingPage Component Rendered");  // Debugging line

  return (
    <div className="landing-page">
      <h1>Welcome to Agricommunity!</h1> {/* This should show the text */}
      <div className="button-container">
        <Link to="/chatkulim">
          <button>Chatkulim</button>
        </Link>
        <Link to="/predict">
          <button>DiseasePrediction</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
