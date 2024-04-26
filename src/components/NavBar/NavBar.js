import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Switch, FormControlLabel } from "@mui/material";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.checked);
    navigate(event.target.checked ? "/admin" : "/");
  };

  return (
    <div className="nav-bar">
      <FormControlLabel
        control={
          <Switch
            checked={isAdmin}
            onChange={handleRoleChange}
            name="roleSwitch"
          />
        }
        label={"admin"}
        labelPlacement="start"
        style={{ marginLeft: "auto", color: "white" }}
      />
      <div className="user-label">user</div>
    </div>
  );
}
