import React from "react";
import StatCard from "./StatCard";
import "./InventoryStats.css"; // Create a corresponding CSS file for styles

const InventoryStats = () => {
  // Placeholder stats, replace with real data
  const stats = {
    totalProducts: 9,
    totalValue: 30550,
    outOfStocks: 2,
    numberOfCategories: 2,
  };

  return (
    <div className="inventory-stats">
      <StatCard
        title="Total product"
        value={stats.totalProducts}
        iconName="inventory_2"
      />
      <StatCard
        title="Total store value"
        value={`$${stats.totalValue}`}
        iconName="attach_money"
      />
      <StatCard
        title="Out of stocks"
        value={stats.outOfStocks}
        iconName="report_problem"
      />
      <StatCard
        title="No of Category"
        value={stats.numberOfCategories}
        iconName="category"
      />
    </div>
  );
};

export default InventoryStats;
