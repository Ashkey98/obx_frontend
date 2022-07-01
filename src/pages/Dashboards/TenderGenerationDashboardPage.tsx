import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import SellerViews from "../../components/Dashboard/views/seller/SellerViews";
import Link from "next/link";
 
// Buyer Imports
import {
  
  tenderGenerationMenuItems,
} from "../../components/Dashboard/dashboardImports";
import TenderGenerationViews from "../../components/TenderGeneration/TenderGenerationViews";
import {
  buyerColor,
  buyerMenuIcons,
  buyerMenuItems,
} from "../../components/Dashboard/dashboardImports";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
const TenderGenerationDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [ buyerMenuIcons,tenderGenerationMenuItems,buyerColor];

  useEffect(() => {
    localStorage.setItem("color", "#2e86de");
  }, []);

  return (
    <>
      <Header />
      <Box
      sx={{
        backgroundColor:"#d7deed", 
        width:"100%",
        display:"flex",
        flexDirection:"row",
        elevation:"20",
        padding:"10",
        
      }}>
      <Link href="/dashboard/buyerdashboard">

        <ArrowBack sx={{color:"blue",
        paddingTop:"15px",
         fontSize:"40px",
        }} />
        </Link>
        <Typography sx={{
          fontSize:"40px",
          color:"blue",
        }}>
          Return To Dashboard
        </Typography>
      </Box>
      <Dashboard
        data={data}
        dashboard={<TenderGenerationViews view={view} />}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
};

export default TenderGenerationDashboardPage;
