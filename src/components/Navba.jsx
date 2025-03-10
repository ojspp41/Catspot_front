
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/components/navbar.css";

export const Navba = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left-section">
        <img 
          src="/assets/back.svg" 
          alt="logo" 
          className="navbar-logo"
          onClick={handleBackClick}
        />
      </div>
      <div className="navbar-title-section">
        <h1 className="navbar-title">{title}</h1>
      </div>
    </div>
  );
};
