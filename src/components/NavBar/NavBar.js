import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.checked);
    navigate(event.target.checked ? "/admin" : "/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        {/* Add the switch to toggle between User and Admin views */}
        <FormControlLabel
          control={
            <Switch
              checked={isAdmin}
              onChange={handleRoleChange}
              name="roleSwitch"
              color="default"
            />
          }
          label={isAdmin ? "Admin" : "User"}
          labelPlacement="start"
          style={{ marginLeft: "auto" }} // Push switch to the far right
        />
      </Toolbar>
    </AppBar>
  );
}
