import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table'
import { config } from '../../App';
import './table.css'
const AdminView = ({label,apiEndpoint}) => {
  const [chartData, setChartData] = useState([]);

  
  useEffect(() => {
    let fun=async()=>{
        const url = `${config.endpoint}/admin/${apiEndpoint}`;
        let data = await axios.get(url)
        setChartData(data.data)
        console.log(data.data)
    }
    fun()
  }, [apiEndpoint]);
  console.log(chartData)

  return (
    <div>
      <h1>Most Ordered Item( by Day )</h1>
      <Table data={chartData} titleX={label} />
      
    </div>
  );
};

export default AdminView;
