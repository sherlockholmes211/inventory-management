import React from "react";
import "./StatCard.css";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <span className="material-icons">{icon}</span>
      <div className="stat-text">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
