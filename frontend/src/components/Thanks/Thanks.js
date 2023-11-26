import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import "./Thanks.css";

const Thanks = () => {
  const history = useHistory();

  const routeToProducts = () => {
    history.push("/landing");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <Header />
      <Box className="greeting-container">
        <h2>Order Confirmed😃</h2>
        <Button
          variant="contained"
          size="large"
          id="continue-btn"
          onClick={routeToProducts}
        >
          Menu
        </Button>
      </Box>
    </>
  );
};

export default Thanks;
