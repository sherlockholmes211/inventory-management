import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import NavBar from "./components/NavBar";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import InventoryStats from "./components/InventoryStats";
import { fetchInventory } from "./features/inventory/inventoryAPI";
import { useDispatch } from "react-redux";

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <InventoryStats />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Stats />
        <Routes>
          <Route path="/" element={<AdminView />} />
          <Route path="/user" element={<UserView />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
