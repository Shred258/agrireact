import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import LandingPage
import DiseasePrediction from './components/DiseasePrediction'; // Your Disease Prediction component
import Chatkulim from './components/Chatkulim'; // Your Chatkulim component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predict" element={<DiseasePrediction />} />
        <Route path="/chatkulim" element={<Chatkulim />} />
      </Routes>
    </Router>
  );
}

export default App;
