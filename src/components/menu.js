import React, { useState } from "react";


export default function Hamburger() {
    const [isActive, setActive] = useState("false");
  
    const handleToggle = () => {
      setActive(!isActive); 
    };
    return (
    <button className={`hamburger hamburger--collapse ${!isActive ? "men-active" : ""}`}
    type="button" tabindex="0" onClick={handleToggle}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                        <span className="hamburger-inner"></span>
                        <span className="hamburger-inner"></span>
                    </span> 
    </button>
    );
  }

