import React from "react";
import { Box } from "@mui/system";
import AdminHome from "./AdminHome";
import ManageBuyer from "./ManageUsers/ManageBuyer";
import ManageSeller from "./ManageUsers/ManageSeller";
import BuyerAdmin from "./ManageUsers/BuyerAdmin";
import BuyerEndUser from "./ManageUsers/BuyerEndUser";
import GeneralSettings from "./GeneralSettings";
import SubscriptionDetails from "./SubscriptionDetails";
import Reporting from "./Reporting";
import ManageAboutUs from "./ManageWebPages/ManageAboutUs";
import ManageContactUs from "./ManageWebPages/ManageContactUs";
import ManageFAQ from "./ManageWebPages/ManageFAQ";
import ManagePrivacy from "./ManageWebPages/ManagePrivacy";
import ManageTerms from "./ManageWebPages/ManageTerms";
import ManageCookies from "./ManageWebPages/ManageCookies";
import ManageMaintenance from "./ManageWebPages/ManageMaintenance";
import ManageAnnouncments from "./ManageWebPages/ManageAnnouncments";
import ManageTestimonials from "./ManageWebPages/ManageTestimonials";
import ManagePartners from "./ManageWebPages/ManagePartners";

interface AdminViewsProps {
  view: String;
}

const AdminViews = ({ view }: AdminViewsProps) => {
  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <AdminHome />
        ) : view === "Manage Buyer" ? (
          <ManageBuyer />
        ) : view === "Manage Seller" ? (
          <ManageSeller />
        ) : view === "Buyer Admin" ? (
          <BuyerAdmin />
        ) : view === "Buyer EndUser" ? (
          <BuyerEndUser />
        ) : view === "Buyer EndUser" ? (
          <BuyerEndUser />
        ) : view === "General Settings" ? (
          <GeneralSettings />
        ) : view === "About Us" ? (
          <ManageAboutUs />
        ) : view === "Contact Us" ? (
          <ManageContactUs />
        ) : view === "FAQ" ? (
          <ManageFAQ />
        ) : view === "Privacy Policy" ? (
          <ManagePrivacy />
        ) : view === "Terms and Conditions" ? (
          <ManageTerms />
        ) : view === "Cookies Policy" ? (
          <ManageCookies />
        ) : view === "Maintenance" ? (
          <ManageMaintenance />
        ) : view === "Announcments" ? (
          <ManageAnnouncments />
        ) : view === "Testimonials" ? (
          <ManageTestimonials />
        ) : view === "Partners" ? (
          <ManagePartners />
        ) : view === "Subscription Details" ? (
          <SubscriptionDetails />
        ) : view === "Reporting" ? (
          <Reporting />
        ) : null}
      </Box>
    </>
  );
};

export default AdminViews;
