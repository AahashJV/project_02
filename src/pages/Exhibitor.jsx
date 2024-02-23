import React, { useState } from 'react';
import './Exhibitor.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';


export const Exhibitor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBlur, setIsBlur] = useState(false);

  const openPopup = (imageUrl) => {
    setSelectedImage(imageUrl)
    setIsBlur(true)
  };

  const closePopup = () => {
    setSelectedImage(null)
    setIsBlur(false);
  };

  // Assuming you have an array of image URLs
  const imageUrls = [
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    './bg.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="exhibitor-container">
      <h2 className="exhibitor-heading" >Exhibitor</h2> 
      <Link to='/project_02/' >
        <button className="back-button">Back to Home</button>
      </Link>
      <div className="exhibitor-grid">
        {imageUrls.map((imageUrl, index) => (
          <button
            key={index}
            className={`image-button ${isBlur ? 'blur' : ''}`}
            onClick={() => openPopup(imageUrl)}
          >
            Image {index + 1}
          </button>
        ))}
      </div>
      {selectedImage && (
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <img src={selectedImage} alt="Selected" className="popup-image" />
        </div>
      )}
      
    </div>
  );
};
