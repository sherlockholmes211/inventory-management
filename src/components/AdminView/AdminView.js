import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductTable from "../ProductTable";
import EditProductModal from "../EditProductModal";
import { fetchInventory } from "../../features/inventory/inventoryAPI";

export default function AdminView() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.items);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  const handleEditClick = (id) => {
    setSelectedProductId(id);
    setEditModalOpen(true);
  };

  return (
    <div>
      <h1>Admin View</h1>
      <ProductTable
        products={products}
        admin={true}
        onEditClick={handleEditClick}
      />

      {selectedProductId && (
        <EditProductModal
          open={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
          productId={selectedProductId}
        />
      )}
    </div>
  );
}
