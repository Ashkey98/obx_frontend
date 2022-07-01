import React from "react";
import { Box } from "@mui/system";
import ManageAccount from "../../ults/ManageAccount";
import MyProfile from "../../ults/MyProfile";
import SellerHome from "./SellerHome";
import Subscription from "./Subscription";
import MyTenders from "./MyTenders";
import AddDocuments from "../../ults/AddDocuments";
import ActiveBids from "./ActiveBids";
import RequestForInformation from "./RequestForInformation";
import SaveForLater from "./SaveForLater";
import Chat from "../../ults/Chat";
import ObxSellerHead from "./ObxSellerHead";

interface SellerViewsProps {
  view: String;
}

const SellerViews = ({ view }: SellerViewsProps) => {
  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <SellerHome />
        ) : view === "My Chat" ? (
          <Chat />
        ) : view === "Manage Accounts" ? (
          <ManageAccount />
        ) : view === "Subscription" ? (
          <Subscription />
        ) : view === "My Tenders" ? (
          <MyTenders />
        ) : view === "Add Documents" ? (
          <AddDocuments />
        ) : view === "Active Bids" ? (
          <ObxSellerHead />
        ) : view === "ObxSellerHead" ? (
          <ObxSellerHead />
        ) : view === "Request for Information" ? (
          <RequestForInformation />
        ) : view === "Save for Later" ? (
          <SaveForLater />
        ) : view === "My Profile" ? (
          <MyProfile />
        ) : null}
      </Box>
    </>
  );
};

export default SellerViews;
