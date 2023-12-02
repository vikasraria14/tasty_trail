import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {downloadBill} from "../../../Utils/downloadBill"
import { config } from "../../../App";
import DownloadIcon from "@mui/icons-material/Download";
import Header from "../Header/Header";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import './order.css'
import OrderInfo from "./OrderModal"
const Orders = (props) => {
  const [carData, setCarData] = useState([]);
  const [show, setShow] = useState(false);
  const [serviceForm, setServiceForm] = useState({});
  
  const handleClick = (row) => {
    let x = row;

    setShow(true);
    setServiceForm(x);
  };
  useEffect(() => {
   
    const fetchData = async () => {
      let username = window.localStorage.getItem("username");
      console.log("username", username)
      if (username) {
       
        const url = `${config.endpoint}/orders/allOrders`;
        
         let res = await axios.get(url)
        console.log(res)
        //console.log("Hi from Admin", res);
        setCarData(res.data);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
        name: "Date",
        id: "date",
        selector: (row) => row.order_date,
        sortable: true,
      },
    {
      name: "Staff Name",
      selector: (row) => row.username,
      id: "name",
      sortable: true,
    },
    {
      name: "Item",
      selector: (row) => row.label,
      id: "make",
      sortable: true,
    },
    
    {
      name: "Quantity",
      id: "licensePlate",
      selector: (row) => row.quantity,
      sortable: true,
    },
    
    {
      name: "Cost",
      id: "cost",
      selector: (row) => `$${row.price}`,
    },
    {
      name: "Order Status",
      id: "order_status",
      selector: (row) => row.order_status,
    },

    {
      name: "Edit Status",
      id: "edit_status",

      selector: (row) => {
       

        return (
          <EditIcon
            style={{ justifyContent: "center" }}
            onClick={() => {
                handleClick(row)
            }}
          />
        );
      },
    },
    
    {
      name: "Download Invoice",
      id: "downloadInvoice",

      selector: (row) => {
       

        return (
          <DownloadIcon
            style={{ justifyContent: "center" }}
            onClick={() => {
                downloadBill(row)
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <DataTable
        columns={columns}
        data={carData}
        pagination
        striped={true}
        className="table d-flex align-items-center"
        //fixedHeader
        fixedHeaderScrollHeight="450px"
        subHeader
      />
       <OrderInfo 
          serviceForm={serviceForm}
          show = {show}
          setShow={setShow}
          carData={carData}
          setCarData={setCarData}
          className="modal"
        />
    </>
  );
};
export default Orders;
