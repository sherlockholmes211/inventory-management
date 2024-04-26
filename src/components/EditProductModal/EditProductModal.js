import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editItem } from "../../features/inventory/inventorySlice";

import { Modal, Box, Typography, TextField, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: "white",
  bgcolor: "#333",
};

export default function EditProductModal({ open, handleClose, productId }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.inventory.items.find((item) => item.id === productId)
  );

  console.log("mounted");

  const price = product.price;
  const value = product.value;

  console.log("price", price.replace("$", ""));
  console.log("value", value.replace("$", ""));

  const [formData, setFormData] = React.useState({
    name: product.name,
    category: product.category,
    price: parseInt(price.replace("$", "")),
    quantity: product.quantity,
    value: parseInt(value.replace("$", "")),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(
      editItem({
        ...formData,
        id: productId,
        value: `$${formData.value}`,
        price: `$${formData.price}`,
      })
    );
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Edit product
          </Typography>
          <CloseIcon
            onClick={handleClose}
            color={"success"}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, mb: 1, color: "#6d6d6d" }}
        >
          {product.name}
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Category</Typography>
              <TextField
                id="category"
                type="text"
                fullWidth
                name="category"
                size={"small"}
                // variant="filled"
                onChange={handleChange}
                value={formData.category}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.09)",
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Price</Typography>
              <TextField
                size={"small"}
                id="price"
                type="number"
                name="price"
                fullWidth
                value={formData.price}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.09)",
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Quantity</Typography>
              <TextField
                id="quantity"
                size={"small"}
                type="number"
                name="quantity"
                fullWidth
                value={formData.quantity}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.09)",
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Value</Typography>
              <TextField
                size={"small"}
                id="value"
                name="value"
                type="number"
                fullWidth
                value={formData.value}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.09)",
                    color: "white",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant={"text"}
              onClick={handleClose}
              sx={{ mr: 1, color: "#deff55" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                bgcolor: "#deff55",
                "&:hover": {
                  bgcolor: "#56631f",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
