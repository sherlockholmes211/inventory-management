import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  disableItem,
} from "../../features/inventory/inventorySlice";
import "./ProductTable.css";

const HeaderCell = ({ children }) => (
  <TableCell>
    <div className="header-tag">{children}</div>
  </TableCell>
);

const ActionCell = ({
  admin,
  product,
  onEditClick,
  handleDisable,
  handleDelete,
}) => (
  <TableCell>
    <IconButton
      onClick={() => onEditClick(product.id)}
      disabled={!admin || product.disabled}
    >
      <EditIcon color="success" />
    </IconButton>
    <IconButton
      onClick={() => handleDisable(product.id)}
      disabled={!admin || product.disabled}
    >
      <VisibilityOffIcon color="primary" />
    </IconButton>
    <IconButton
      onClick={() => handleDelete(product.id)}
      disabled={!admin || product.disabled}
    >
      <DeleteIcon color="error" />
    </IconButton>
  </TableCell>
);

export default function ProductTable({ products, admin, onEditClick }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleDisable = (id) => {
    dispatch(disableItem(id));
  };

  return (
    <div className="product-table">
      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#212124",
            }}
          >
            <HeaderCell>Product Name</HeaderCell>
            <HeaderCell>Category</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Quantity</HeaderCell>
            <HeaderCell>Value</HeaderCell>
            <HeaderCell>Actions</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              style={{
                backgroundColor: "#212124",
                opacity: product.disabled || !admin ? 0.5 : 1,
              }}
            >
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.value}</TableCell>

              <ActionCell
                admin={admin}
                product={product}
                onEditClick={onEditClick}
                handleDisable={handleDisable}
                handleDelete={handleDelete}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
