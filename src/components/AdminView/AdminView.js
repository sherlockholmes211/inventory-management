import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductTable from "../ProductTable";
import EditProductModal from "../EditProductModal";

export default function AdminView() {
  const products = useSelector((state) => state.inventory.items);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEditClick = (id) => {
    setSelectedProductId(id);
    setEditModalOpen(true);
  };

  return (
    <div>
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
