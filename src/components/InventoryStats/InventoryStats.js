import React from "react";
import StatCard from "../StatCard";
import {
  ShoppingCart,
  CurrencyExchange,
  RemoveShoppingCart,
  Waves,
} from "@mui/icons-material";
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
      <div className="inventory-stats-title">Inventory Stats</div>
      <div className="stats-container">
        <StatCard
          icon={<ShoppingCart />}
          title="Total product"
          value={stats.totalProducts}
          iconName="inventory_2"
        />
        <StatCard
          icon={<CurrencyExchange />}
          title="Total store value"
          value={`$${stats.totalValue}`}
          iconName="attach_money"
        />
        <StatCard
          icon={<RemoveShoppingCart />}
          title="Out of stocks"
          value={stats.outOfStocks}
          iconName="report_problem"
        />
        <StatCard
          icon={<Waves />}
          title="No of Category"
          value={stats.numberOfCategories}
          iconName="category"
        />
      </div>
    </div>
  );
};

export default InventoryStats;
