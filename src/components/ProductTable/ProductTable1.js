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

import { DataGrid } from "@mui/x-data-grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "price", headerName: "Price", width: 90 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 90 },
  { field: "value", headerName: "Value", width: 90 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton aria-label="approve">
          <CheckCircleOutlineIcon style={{ color: "green" }} />
        </IconButton>
        <IconButton aria-label="reject">
          <HighlightOffIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    ),
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const rows = [
  {
    id: 1,
    name: "Bluetooth headset",
    category: "Electronic",
    price: "$5",
    quantity: 5,
    value: "$25",
  },
  {
    id: 2,
    name: "Edifier M34560",
    category: "Electronic",
    price: "$5",
    quantity: 0,
    value: "$0",
  },
  {
    id: 3,
    name: "Sony 4K 55 inch ultra TV",
    category: "Electronic",
    price: "$50",
    quantity: 17,
    value: "$850",
  },
  {
    id: 4,
    name: "Samsung 55 inch tv",
    category: "Electronic",
    price: "$500",
    quantity: 50,
    value: "$25000",
  },
  {
    id: 5,
    name: "samsung s24 ultra",
    category: "Phone",
    price: "$50",
    quantity: 0,
    value: "$0",
  },
];

export default function ProductTable({ products, admin, onEditClick }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleDisable = (id) => {
    dispatch(disableItem(id));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </ThemeProvider>
  );

  // return (
  //   <div className="product-table">
  //     <Table>
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Product Name</TableCell>
  //           <TableCell>Price</TableCell>
  //           <TableCell>Quantity</TableCell>
  //           {admin && <TableCell>Actions</TableCell>}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {products.map((product) => (
  //           <TableRow
  //             key={product.id}
  //             style={{ opacity: product.disabled ? 0.5 : 1 }}
  //           >
  //             <TableCell>{product.name}</TableCell>
  //             <TableCell>{product.price}</TableCell>
  //             <TableCell>{product.quantity}</TableCell>
  //             {admin && (
  //               <TableCell>
  //                 <IconButton onClick={() => onEditClick(product.id)}>
  //                   <EditIcon />
  //                 </IconButton>
  //                 <IconButton onClick={() => handleDelete(product.id)}>
  //                   <DeleteIcon />
  //                 </IconButton>
  //                 <IconButton onClick={() => handleDisable(product.id)}>
  //                   <VisibilityOffIcon />
  //                 </IconButton>
  //               </TableCell>
  //             )}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </div>
  // );
}
