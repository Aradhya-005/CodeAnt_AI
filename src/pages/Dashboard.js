import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet /> {/* Nested routes rendered here */}
      </div>
    </div>
  );
};

export default Dashboard;
