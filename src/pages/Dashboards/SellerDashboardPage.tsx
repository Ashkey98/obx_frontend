import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import SellerViews from "../../components/Dashboard/views/seller/SellerViews";

// Buyer Imports
import {
  sellerColor,
  sellerMenuIcons,
  sellerMenuItems,
} from "../../components/Dashboard/dashboardImports";

const SellerDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [sellerMenuIcons, sellerMenuItems, sellerColor];

  useEffect(() => {
    localStorage.setItem("color", "#2e86de");
  }, []);

  return (
    <>
      <Header />
      <Dashboard
        data={data}
        dashboard={<SellerViews view={view} />}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
};

export default SellerDashboardPage;
