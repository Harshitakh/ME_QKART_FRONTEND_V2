import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const [isLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );
  const [username] = useState(() => localStorage.getItem("username"));
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("username");
    localStorage.clear("balance");
    history.push("/");
    window.location.reload();
  };
  
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
      ) : (
        <>
          {isLoggedIn ? (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt={username} src="/public/avatar.png" />
              <p>{username}</p>
              <Button className="main" variant="text" onClick={logout}>
                Logout
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                className="main"
                variant="text"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>
              <Button
                className="main"
                variant="contained"
                onClick={() => {
                  history.push("/register");
                }}
              >
                Register
              </Button>
            </Stack>
          )}
        </>
      )}
    </Box>
  );
};

export default Header;
