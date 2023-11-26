import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { config } from "../../App";
import Header from "../Admin/Header/Header";
import { useHistory } from "react-router-dom";
function ProductForm() {
  const history = useHistory()
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductData({ ...productData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the product data (including the image) to the server
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("category", productData.category);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("image", productData.image);
    formData.append("addedBy", localStorage.getItem("username"));
    const url = `${config.endpoint}/addProduct`;
    axios.post(url, formData);
    history.push('/allProducts')
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        {/* <Header hasHiddenAuthButtons /> */}
        <Box className="content">
          <Stack spacing={2} className="form">
            <h2 className="title">Add a New Item</h2>

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Name"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <br />
              <div>
                <Select
                  id="category"
                  label="Category"
                  variant="outlined"
                  title="Category"
                  name="category"
                  style={{ width: "100%" }}
                  value={productData.category}
                  onChange={handleInputChange}
                >
                  <MenuItem value="" disabled>
                    Select a Category
                  </MenuItem>
                  <MenuItem value={"indian"}>Indian</MenuItem>
                  <MenuItem value={"japanese"}>Japanese</MenuItem>
                  <MenuItem value={"chinese"}>Chinese</MenuItem>
                  <MenuItem value={"mexican"}>Mexican</MenuItem>
                  <MenuItem value={"italian"}>Italian</MenuItem>
                  <MenuItem value={"mediterranean"}>Mediterranean</MenuItem>
                </Select>
              </div>
              <br />
              <div>
                <TextField
                  label="Price"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <br />
              <div>
                <TextField
                  label="Quantity"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />{" "}
                <br />
              </div>
              <br />
              <div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />{" "}
                <br />
              </div>
              <br />
              <Button variant="contained" color="primary" type="submit">
                Add Item
              </Button>
              
            </form>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default ProductForm;
