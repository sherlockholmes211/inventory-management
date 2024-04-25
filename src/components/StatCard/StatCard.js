import React from "react";
import "./StatCard.css"; // Create a corresponding CSS file for styles

const StatCard = ({ title, value, iconName }) => {
  return (
    <div className="stat-card">
      <span className="material-icons">{iconName}</span>
      <div className="stat-text">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
