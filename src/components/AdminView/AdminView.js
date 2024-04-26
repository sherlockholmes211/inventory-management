import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductTable from "../ProductTable";
import EditProductModal from "../EditProductModal";

export default function AdminView() {
  const products = useSelector((state) => state.inventory.items);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  console.log("products", products);

  const handleEditClick = (id) => {
    console.log("handleEditClick");
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

      {selectedProductId && editModalOpen && (
        <EditProductModal
          open={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
          productId={selectedProductId}
        />
      )}
    </div>
  );
}
