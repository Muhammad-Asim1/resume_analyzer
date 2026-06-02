import React, { useState } from "react";
import { Link } from "react-router-dom";
import sitelogo from "../images/newLogo.svg";

export default function Header() {
  // const [featuresDropdown, setFeaturesDropdown] = useState(false);
  // const [galleryDropdown, setGalleryDropdown] = useState(false);

  // const toggleFeaturesDropdown = () => setFeaturesDropdown(!featuresDropdown);
  // const toggleGalleryDropdown = () => setGalleryDropdown(!galleryDropdown);

  const dimensions = 
  {
    width: "180px",
    height: "auto",
    marginTop: "31px",
    marginLeft: "44px",
  };

  const heading = 
  {
    marginTop: "100px",
  }

  return (
    <div id="Navbar">
      <div className="logoAndName">
        <img src={sitelogo} style={dimensions} alt="Site Logo" />
        <h1 style={heading}>Resume Coach</h1>
      </div>

      <ul className="menu"> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><a href="/pricings">Pricing</a></li>
      </ul>

      <div
        id="getStarted"
        onClick={() => {
          setTimeout(() => {
            const uploadSection = document.getElementsByClassName("TextMiddle")[0];
            
            if (uploadSection) {
              uploadSection.scrollIntoView({ behavior: "smooth" });
              console.log(432)
            }
          }, 200);
        }}
      >
        Get Started
      </div>


    </div>
  );
}


