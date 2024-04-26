import React from "react";
import { useSelector } from "react-redux";
import StatCard from "../StatCard";
import {
  ShoppingCart,
  CurrencyExchange,
  RemoveShoppingCart,
  Waves,
} from "@mui/icons-material";
import "./InventoryStats.css";

const InventoryStats = () => {
  const products = useSelector((state) => state.inventory.items);

  const categories = new Set(products.map((item) => item.category));

  const stats = {
    totalProducts: products.length,
    totalValue: products.reduce(
      (acc, prod) => acc + parseInt(prod.value.replace("$", "")),
      0
    ),
    outOfStocks: products.reduce((acc, prod) => {
      if (prod.quantity === 0) {
        return acc + 1;
      }
      return acc;
    }, 0),
    numberOfCategories: categories.size,
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
