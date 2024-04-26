import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch inventory data");
    }
    const data = await response.json();
    return data.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
  }
);
