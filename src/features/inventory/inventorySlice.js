import { createSlice } from "@reduxjs/toolkit";
import { fetchInventory } from "./inventoryAPI";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
    status: "idle", // represents the loading state
  },
  reducers: {
    editItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    disableItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items[index].disabled = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // assuming payload is the array of products
      })
      .addCase(fetchInventory.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { editItem, deleteItem, disableItem } = inventorySlice.actions;

export default inventorySlice.reducer;
