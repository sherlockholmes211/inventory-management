import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import { Provider } from "react-redux";
import { store } from "./app/store";
import NavBar from "./components/NavBar";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import InventoryStats from "./components/InventoryStats";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <InventoryStats />
        <Routes>
          <Route path="/admin" element={<AdminView />} />
          <Route path="/" element={<UserView />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
