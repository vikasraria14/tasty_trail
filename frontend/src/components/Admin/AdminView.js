import Bar1 from "./Bar1";
import Bar2 from "./Bar2"
import Bar3 from "./Bar3"
import "./admin.css"
import Header from "./Header/Header";
const AdminView = () => {
  return (
    <div>
        <Header/>
        <br/>
        <br/>
        
      <div className="admin">
        <Bar1 label="Categories" apiEndpoint="topCategories" />
      </div>
      <div className="admin">
        <Bar1 label="Items" apiEndpoint="topServices" style={{ flex: 1 }} />
      </div>
      <br/>
      <br/><br/>
      <div className="admin">
        <Bar1 label="Staff" apiEndpoint="topUsers" />
      </div>
      <div className="admin">
        <Bar2 label="Item" apiEndpoint="mostOrderedServices" />
      </div>
      <div className="admin">
        <Bar3 label="Item" apiEndpoint="topByWeekDay" />
      </div>
    </div>
  );
};

export default AdminView;
