import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Import upload icon

function DiseasePrediction() {
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you can add the logic to handle the disease prediction
    console.log("Submitting image for disease prediction");
  };

  return (
    <div className="disease-prediction">
      <h2>Upload Image for Disease Prediction</h2>

      {/* Upload Button */}
      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="file-input"
          style={{ display: 'none' }}
        />
        <label htmlFor="file-input" className="upload-button">
          <FaUpload size={30} /> {/* Upload icon */}
          <span>Upload</span>
        </label>

        {/* Submit Button */}
        <button 
          className="submit-button" 
          onClick={handleSubmit}
          disabled={!image} // Disable if no image is selected
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default DiseasePrediction;
