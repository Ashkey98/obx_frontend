import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";

// Buyer Imports
import {
  agentColor,
  agentMenuIcons,
  agentMenuItems,
} from "../../components/Dashboard/dashboardImports";
import AgentViews from "../../components/Dashboard/views/agent/AgentViews";

const AgentDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [agentMenuIcons, agentMenuItems, agentColor];

  useEffect(() => {
    localStorage.setItem("color", "#0984e3");
  }, []);

  return (
    <>
      <Header />
      <Dashboard data={data} dashboard={<AgentViews view={view} />} view={view} setView={setView} />
      <Footer />
    </>
  );
};

export default AgentDashboardPage;
