import React from "react";
import { useNavigate } from "react-router-dom";
import { Switch, FormControlLabel } from "@mui/material";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [isUser, setIsUser] = React.useState(false);

  const handleRoleChange = (event) => {
    setIsUser(event.target.checked);
    navigate(event.target.checked ? "/user" : "/");
  };

  return (
    <div className="nav-bar">
      <FormControlLabel
        control={
          <Switch
            checked={isUser}
            onChange={handleRoleChange}
            name="roleSwitch"
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "yellow",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "yellow",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "lightyellow",
              },
              "& .MuiSwitch-switchBase": {
                color: "lightyellow",
              },
            }}
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
