import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      console.log("authToken", authToken);
      const response = await axios.get(
        'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects"',
        {
          headers: {
            accept: "application/json",
            "X-MSTR-AuthToken": authToken,
          },
        }
      );
      console.log("response12", response)
    };

    fetchData();
  }, []);

  return <div>Charts</div>
};

export default Chart;
