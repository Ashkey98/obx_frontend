// buyer Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArticleIcon from "@mui/icons-material/Article";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// seller Icons
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

// agent Icons
import AddBoxIcon from "@mui/icons-material/AddBox";
import GroupsIcon from "@mui/icons-material/Groups";
import GradingIcon from "@mui/icons-material/Grading";
import DomainAddIcon from "@mui/icons-material/DomainAdd";

// admin Icons
import SettingsIcon from "@mui/icons-material/Settings";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LanguageIcon from "@mui/icons-material/Language";

// admin manager options
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GavelIcon from "@mui/icons-material/Gavel";
import CookieIcon from "@mui/icons-material/Cookie";
import CampaignIcon from "@mui/icons-material/Campaign";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupIcon from "@mui/icons-material/Group";

//dashboard colors
export const buyerColor = [
  " linear-gradient(to bottom, #56ccf2, #2f80ed)",
  "#2a43c2;",
  "white",
  "black",
  "black",
];
export const sellerColor = [
  "linear-gradient(to bottom, #0abde3, #514a9d)",
  "#3a6073",
  "white",
  "white",
  "black",
];
export const agentColor = [
  "linear-gradient(to bottom, #000428, #004e92)",
  "#004e92",
  "white",
  "white",
  "black",
];
export const managerColor = [
  "linear-gradient(to bottom, #000428, #004e92)",
  "#004e92",
  "white",
  "white",
  "black",
];
export const adminColor = [
  "linear-gradient(to bottom, #16222a, #3a6073)",
  "#576574",
  "white",
  "white",
  "black",
];

// export const tenderGenerationColors = [
//   "linear-gradient(to bottom, #0abde3, #514a9d)",
//   "#3a6073",
//   "white",
//   "white",
//   "black",
// ];

// testing

// export const agentColor = ["#2ecc71", "#009432", "white", "black"];
// export const managerColor = ["#a55eea", "#D6A2E8", "black", "black"];

export const agentTest1 = ["#b2bec3", "#b2bec3", "white", "black"];
export const agentTest2 = ["#636e72", "#636e72", "white", "black"];
export const agentTest3 = ["#0984e3", "#0984e3", "white", "black"];

export const managerTest1 = ["#b2bec3", "#b2bec3", "black", "black"];
export const managerTest2 = ["#636e72", "#636e72", "black", "black"];
export const managerTest3 = ["#0984e3", "#0984e3", "black", "black"];

// buyer

export const buyerMenuItems = [
  "Dashboard",
  "My Chat",
  "Manage Accounts",
  "Add Documents",
  "Add Tenders",
  "Tenders History",
  "Awards Tenders",
  "My Profile",
  "Logout",
];

export const buyerMenuIcons = [
  <DashboardIcon />,
  <ChatIcon />,
  <ManageAccountsIcon />,
  <NoteAddIcon />,
  <ArticleIcon />,
  <ManageHistoryIcon />,
  <AssignmentTurnedInIcon />,
  <AccountBoxIcon />,
  <PowerSettingsNewIcon />,
];

// seller

export const sellerMenuItems = [
  "Dashboard",
  "My Chat",
  "Manage Accounts",
  "Subscription",
  "My Tenders",
  "Add Documents",
  "Active Bids",
  "Request for Information",
  "Save for Later",
  "My Profile",
  "Logout",
];

export const sellerMenuIcons = [
  <DashboardIcon />,
  <ChatIcon />,
  <ManageAccountsIcon />,
  <CardMembershipIcon />,
  <PostAddIcon />,
  <NoteAddIcon />,
  <MonetizationOnIcon />,
  <HelpCenterIcon />,
  <BookmarksIcon />,
  <AccountBoxIcon />,
  <PowerSettingsNewIcon />,
];

//agent

export const agentMenuItems = [
  "Dashboard",
  "Manage Accounts",
  "Create Users",
  "User Groups",
  "Review Tenders",
  "Add Building",
  "My Profile",
  "Logout",
];

export const agentMenuIcons = [
  <DashboardIcon />,
  <ManageAccountsIcon />,
  <AddBoxIcon />,
  <GroupsIcon />,
  <GradingIcon />,
  <DomainAddIcon />,
  <AccountBoxIcon />,
  <PowerSettingsNewIcon />,
];

//facility

export const facilityMenuItems = [
  "Dashboard",
  "Manage Accounts",
  "Review Tenders",
  "My Profile",
  "Logout",
];
export const facilityMenuIcons = [
  <DashboardIcon />,
  <ManageAccountsIcon />,
  <GradingIcon />,
  <AccountBoxIcon />,
  <PowerSettingsNewIcon />,
];

// admin

export const adminMenuItems = [
  "Dashboard",
  "Manage Buyer",
  "Manage Seller",
  "Buyer Admin",
  "Buyer EndUser",
  "General Settings",
  {
    name: "Manage Web Pages",
    options: [
      "About Us",
      "Contact Us",
      "FAQ",
      "Privacy Policy",
      "Terms and Conditions",
      "Cookies Policy",
      "Maintenance",
      "Announcments",
      {
        name: "Testimonials",
        options: ["Add", "Edit"],
      },
      "Partners",
    ],
  },
  "Subscription Details",
  "Reporting",
  "Logout",
];

export const adminMenuIcons = [
  <DashboardIcon />,
  <ManageAccountsIcon />,
  <ManageAccountsIcon />,
  <ManageAccountsIcon />,
  <ManageAccountsIcon />,
  <SettingsIcon />,
  [
    <LanguageIcon />,
    [
      <GroupsIcon />,
      <AddIcCallIcon />,
      <LiveHelpIcon />,
      <AdminPanelSettingsIcon />,
      <GavelIcon />,
      <CookieIcon />,
      <EngineeringIcon />,
      <CampaignIcon />,
      <ReviewsIcon />,
      <GroupIcon />,
    ],
  ],
  <CardMembershipIcon />,
  <SummarizeIcon />,
  <PowerSettingsNewIcon />,
];

//Tender Generation MenuItems

export const tenderGenerationMenuItems=[
"Tender Types",
"Invite",
"Validity",
"Facility Parameter",
"Scope Of Work",
"Outcomes",
"PerformanceManagement",
"Input Schedule",
// "Pricing Model",
// "Filtering Vendors",
// "Tender Evaluation",
"Choose Template"

]