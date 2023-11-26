import DataTable from "react-data-table-component";

const ProductAdmin = ({data}) => {
 
  let days=["", "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

  const columns = [
    {
      name: "Week Day",
      selector: (row) => days[row.weekday],
      id: "name",
      sortable: true,
    },
    
    {
      name: "Item Name",
      selector: (row) => row.name,
      id: "name",
      sortable: true,
    },
    {
      name: "Count",
      selector: (row) => row.count,
      id: "make",
      sortable: true,
    }
    
   
    
   
  ];

  return (
    <>
      
      <DataTable
        columns={columns}
        data={data}
        pagination
        striped={true}
        className="table d-flex align-items-center"
        //fixedHeader
        fixedHeaderScrollHeight="450px"
        subHeader
       
      />
      
    </>
  );
};
export default ProductAdmin;
