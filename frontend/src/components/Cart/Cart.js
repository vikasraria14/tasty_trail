import {
  AddOutlined,
  RemoveOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import { config } from "../../App";
import axios from "axios";
import { useSnackbar } from "notistack";



export const getTotalCartValue = (items = []) => {
  let total = 0;
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
  }
  return total;
};


export const getTotalItems = (items = []) => {
  if (!items.length) return 0;
  const total = items.map((item) => item.qty).reduce((total, n) => total + n);
  return total;
};
const token = localStorage.getItem("token");

const ItemQuantity = ({
  value,
  handleAdd,
  handleDelete,
  isReadOnly
}) => {
  if (isReadOnly) {
    return <Box>Qty: {value}</Box>;
  }
  return (
    <Stack direction="row" alignItems="center">
      <IconButton size="small" color="primary" onClick={handleDelete}>
        <RemoveOutlined />
      </IconButton>
      <Box padding="0.5rem" data-testid="item-qty">
        {value}
      </Box>
      <IconButton size="small" color="primary" onClick={handleAdd}>
        <AddOutlined />
      </IconButton>
    </Stack>
  );
};


const Cart = ({
  products,
  items = [],
  handleQuantity,
  hasCheckoutButton = false,
  isReadOnly = false,
  
}) => {
  const token = localStorage.getItem("token")
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  if (!items.length) {
    return (
      <Box className="cart empty">
        <ShoppingCartOutlined className="empty-cart-icon" />
        <Box color="#aaa" textAlign="center">
          Cart is empty. Add more items to the cart to checkout.
        </Box>
      </Box>
    );
  }

  const performCheckout = async (token, items) => {
    try {
      await axios
        .post(
          `${config.endpoint}/cart/checkout`,
          { },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          enqueueSnackbar("checkout Successfull", { variant: "success" });
          history.push("/thanks");
          return true;
        });
    } catch (e) {}
  
  return false;
};

  return (
    <>
      <Box className="cart">
      
        {items.map((item) => (
        <Box display="flex" alignItems="flex-start" padding="1rem">
          <Box className="image-container">
          {console.log("hey", item)}
            <img
              // Add product image
              
              src={`${config.imageUrl}/${item.image}`}
              // Add product name as alt eext
              alt={item.label}
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="6rem"
            paddingX="1rem"
          >
            <div>{item.label}</div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ItemQuantity
              value={item.quantity}
              handleAdd={() =>handleQuantity(
                token,
                items,
                products,
                item.id,
                item.quantity + 1,
                item
              )}
              handleDelete={() =>handleQuantity(
                  token,
                  items,
                  products,
                  item.id,
                  item.quantity - 1,
                  item
                )}
              isReadOnly={isReadOnly}
              />
              <Box padding="0.5rem" fontWeight="700">
              ${item.price}
              </Box>
            </Box>
          </Box>
        </Box>))}

        <Box
          padding="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box color="#3C3C3C" alignSelf="center">
            Order total
          </Box>
          <Box
            color="#3C3C3C"
            fontWeight="700"
            fontSize="1.5rem"
            alignSelf="center"
            data-testid="cart-total"
          >
            ${getTotalCartValue(items)}
          </Box>
        </Box>
        {hasCheckoutButton  && (
        <Box display="flex" justifyContent="flex-end" className="cart-footer">
          <Button
            color="primary"
            variant="contained"
            startIcon={<ShoppingCart />}
            className="checkout-btn"
            onClick={() => performCheckout(token,items)}
          >
            Checkout
          </Button>
        </Box>)}
      </Box>
      {isReadOnly && (
        <Box className="cart" padding="1rem">
          <h2>Order Details</h2>
         
          <Box className="cart-row">
            <p>Subtotal</p>
            <p>${getTotalCartValue(items)}</p>
          </Box>
          <Box className="cart-row">
            <p>Shipping Charges</p>
            <p>$0</p>
          </Box>
          <Box className="cart-row" fontSize="1.25rem" fontWeight="700">
            <p>Total</p>
            <p>${getTotalCartValue(items)}</p>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Cart;
