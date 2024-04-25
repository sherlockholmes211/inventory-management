import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductTable from "../ProductTable";
import { fetchInventory } from "../../features/inventory/inventoryAPI";

export default function UserView() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.items);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div>
      <h1>User View</h1>
      <ProductTable products={products} admin={false} />
    </div>
  );
}
