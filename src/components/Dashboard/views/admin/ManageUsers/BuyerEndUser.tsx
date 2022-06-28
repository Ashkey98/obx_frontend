import React, { useState } from "react";
import { Box, IconButton, Switch, Typography } from "@mui/material";
import TempTable from "../../../ults/TempTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import UsersProfile from "./UsersProfile";
import UsersList from "./UsersList";

const BuyerEndUser = () => {
  const [view, setView] = useState("main");
  const tableData = {
    headings: [
      "S.No",
      "Manager Name",
      "Total Tenders",
      "Tenders Awarded",
      "Status",
      "Register",
      "View",
      "Delete",
      "Account status",
    ],

    rowsData: [
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
      {
        sno: "01",
        userName: "John Deo",
        totalTenders: "79",
        tendersAwarded: "21",
        status: "Verified",
        register: "20-11-2021",
        view: (
          <IconButton onClick={() => setView("profile")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
        toggle: <Switch />,
      },
    ],
  };
  return (
    <>
      {" "}
      {view === "main" ? (
        <>
          <Box
            sx={{
              padding: "20px 30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "28px",
              }}
            >
              List of Facility Managers
            </Typography>
            <TempTable tableData={tableData} />
          </Box>
        </>
      ) : view === "profile" ? (
        <UsersProfile setView={setView} />
      ) : view === "list" ? (
        <UsersList setView={setView} />
      ) : null}
    </>
  );
};

export default BuyerEndUser;
