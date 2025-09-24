import React, { useState } from "react";
import "../CSS/GalleryComponent.css"; // Import CSS file
import p9 from "../Images3/p (30).jpeg";
import p10 from "../Images3/p (10).jpeg";
import p11 from "../Images3/p (11).jpeg";
import p12 from "../Images3/p (12).jpeg";
import p14 from "../Images3/p (14).jpeg";
import p18 from "../Images3/p (18).jpeg";
import { useNavigate } from "react-router-dom";

const images = [p9, p10, p11, p12, p14, p18];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate()

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <p>(Click image to Enlarge)</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item item-${index + 1}`} onClick={() => setSelectedImage(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>

      <button className="view-more-btn" onClick={() =>navigate( "/gallery")}>View More</button>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full-Screen" className="fullscreen-img" />
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
