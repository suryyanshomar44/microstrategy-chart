import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../components/Chart";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://demo.microstrategy.com/MicroStrategyLibrary/api/logout",
        {},
        {
          headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer 35vj7tenge3nqstd6h8vc10k1q`,
          },
        }
      );
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <Chart />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
