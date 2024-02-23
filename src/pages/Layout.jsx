// Layout.jsx
import React, { useState } from 'react';
import './Layout.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';

export const Layout = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const openPopup = (hotspotId) => {
    setSelectedHotspot(hotspotId);
  };

  const closePopup = () => {
    setSelectedHotspot(null);
  };

  // Define hotspot positions and corresponding popup content
  const hotspots = [
    { id: 1, x: 100, y: 150, content: 'Popup content 1' },
    { id: 2, x: 250, y: 300, content: 'Popup content 2' },
    // Add more hotspots as needed
  ];

  return (
    <div className="layout-container">
      <h2>Layout</h2>
      <Link to = "/project_02/"><button className="back-button">Back</button></Link>
      <div className="image-container">
        <img src="./map.png" alt="Layout" className="layout-image" />
        {hotspots.map((hotspot) => (
          <img
            key={hotspot.id}
            src={"./hotspot.gif"}
            alt={`Popup ${hotspot.id}`}
            className="hotspot"
            style={{ left: hotspot.x, top: hotspot.y, cursor: 'pointer' }}
            onClick={() => openPopup(hotspot.id)}
          />
        ))}
      </div>
      {selectedHotspot && (
        <div className="popup-container">
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <p className="popup-content">{hotspots.find((hotspot) => hotspot.id === selectedHotspot)?.content}</p>
        </div>
      </div>
      )}
    </div>
  );
};
