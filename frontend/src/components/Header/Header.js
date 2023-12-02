import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Image from "material-ui-image"
import { useHistory, Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo_light.png"
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const routeToExplore = () => {
    history.push("/");
  };

  const routeToRegister = () => {
    history.push("/register");
  };

  const routeToLogin = () => {
    history.push("/login");
  };
  const routeToAdminLogin = () => {
    history.push("/adminLogin");
  };
  const routeToAdminRegister = () => {
    history.push("/adminRegister");
  };
  
  
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    localStorage.removeItem("category");
    history.push("/");
    //tryig to reload forcefully
    window.location.reload();
  };

  const navigateToOrders=()=>{
    history.push("/orders");
  }
  const navigateToProducts=()=>{
    history.push("/landing");
  }
  const navigateToProductsAdmin=()=>{
    history.push("/productAdmin")
  }
  const navigateToOrdersAdmin=()=>{
    history.push("/ordersAdmin")
  }
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src={logo} alt="Lotus-icon"></img>
          </Link>
        </Box>

        {children}

        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={routeToExplore}
        >
          Back to explore
        </Button>
      </Box>
    );
  }

  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src={logo} alt="Lotus-icon" style={{height:"50px"}}></img>
        </Link>
      </Box>
      {children}
      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />

            <p className="username-text">{localStorage.getItem("username")}</p>
            
            {
              localStorage.getItem("category")===null?
              window.location.pathname==='/'||window.location.pathname==='/landing'?<Button type="primary" onClick={navigateToOrders}>
              Orders
            </Button>
            :
            <Button type="primary" onClick={navigateToProducts}>
              Menu
            </Button>
            :(
             window.location.pathname==='/ordersAdmin'?
            <Button type="primary" onClick={navigateToProductsAdmin}>
            Menu
          </Button>:
          <Button type="primary" onClick={navigateToOrdersAdmin}>
          Orders
        </Button>)
            }
            

            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>

            <Button onClick={routeToLogin}>Staff Login</Button>

            <Button variant="contained" onClick={routeToRegister}>
              Staff Registration
            </Button>

            
            <Button onClick={routeToAdminLogin}>Admin Login</Button>

            <Button variant="contained" onClick={routeToAdminRegister}>
              Admin Registration
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
