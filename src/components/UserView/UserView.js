import React from "react";
import { useSelector } from "react-redux";
import ProductTable from "../ProductTable";

export default function UserView() {
  const products = useSelector((state) => state.inventory.items);

  return (
    <div>
      <ProductTable products={products} admin={false} />
    </div>
  );
}
