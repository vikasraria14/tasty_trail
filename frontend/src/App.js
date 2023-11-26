import Register from "./components/Register/Register1";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login1";
import Products from "./components/Products/Products";
import Thanks from "./components/Thanks/Thanks";
import Test from "./components/Test/Test"
import LandingPage from "./components/Landing/LandingPage.js"
import Orders from './components/Orders/Orders'
import OrdersAdmin from "./components/Orders/OrdersAdmin";
import ProductAdmin from "./components/ProductAdmin/ProductAdmin";
import AdminRegister from "./components/Register/AdminRegister"
import AdminLogin from "./components/Login/AdminLogin"
import AdminView from "./components/Admin/AdminView"
import AllOrders from "./components/Admin/Orders/Orders"
import AllProducts from "./components/Admin/ProductAdmin/AllProducts"
import AddProduct from "./components/AddProduct/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";

//import Portfolio from "./components/Landing/Portfolio"
export const config = {
  endpoint: `http://localhost:8082/api/v1`,
  imageUrl:`http://localhost:8082`
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        
        <Route exact path="/thanks">
          <Thanks />
        </Route>
        <Route exact path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/ordersAdmin">
          <OrdersAdmin />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/productAdmin">
          <ProductAdmin />
        </Route>
        <Route exact path="/adminRegister">
         <AdminRegister/>
        </Route>
        <Route exact path="/adminLogin">
         <AdminLogin/>
        </Route>
        <Route exact path="/adminView">
         <AdminView/>
        </Route>
        <Route exact path="/allOrders">
         <AllOrders/>
        </Route>
        <Route exact path="/allProducts">
         <AllProducts/>
        </Route>
        <Route exact path="/addProduct">
         <AddProduct/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
