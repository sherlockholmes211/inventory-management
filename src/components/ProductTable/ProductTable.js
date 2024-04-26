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
          <TableRow>
            <TableCell>
              <div className="header-tag">Product Name</div>
            </TableCell>
            <TableCell>
              <div className="header-tag">Category</div>
            </TableCell>
            <TableCell>
              <div className="header-tag">Price</div>
            </TableCell>
            <TableCell>
              <div className="header-tag">Quantity</div>
            </TableCell>

            <TableCell>
              <div className="header-tag">Value</div>
            </TableCell>
            <TableCell>
              <div className="header-tag">Actions</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              style={{ opacity: product.disabled ? 0.5 : 1 }}
            >
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.value}</TableCell>

              <TableCell>
                <IconButton
                  onClick={() => {
                    onEditClick(product.id);
                    console.log("edit clicked");
                  }}
                  disabled={!!product.disabled || !admin}
                >
                  <EditIcon color={"success"} />
                </IconButton>
                <IconButton
                  disabled={!!product.disabled || !admin}
                  onClick={() => handleDisable(product.id)}
                >
                  <VisibilityOffIcon color={"primary"} />
                </IconButton>
                <IconButton
                  disabled={!!product.disabled || !admin}
                  onClick={() => handleDelete(product.id)}
                >
                  <DeleteIcon color={"error"} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
