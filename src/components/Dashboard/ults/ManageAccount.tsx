import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Typography, Grid } from "@mui/material";
import { hidden, StyledTextField } from "../../../styles/styles";

const ManageAccount = () => {
  const [color, setColor] = useState("");

  const uploadRef = useRef<HTMLInputElement>(null);

  function handleUpload() {
    if (uploadRef.current !== null) {
      uploadRef.current.click();
    }
  }
  function handleRemove() {
    alert("removed");
  }

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Manage Accounts
        </Typography>
        <Box
          sx={{
            padding: "20px 30px",
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            height: "60",
          }}
        >
          <Box>
            <Avatar sx={{ width: 80, height: 80 }} />
            <small>
              <em>(max 200kb)</em>
            </small>
          </Box>
          <Button
            onClick={handleUpload}
            variant="outlined"
            sx={{
              alignSelf: "center",
              padding: "4px 20px",
              border: "1px solid blue",
              ":hover": {
                border: "1px solid blue",
              },
            }}
          >
            Upload
          </Button>
          <input
            style={{
              display: "none",
              visibility: "hidden",
            }}
            type="file"
            ref={uploadRef}
          />
          <Button
            onClick={handleRemove}
            variant="outlined"
            sx={{
              alignSelf: "center",
              padding: "4px 20px",
              border: "1px solid blue",
              ":hover": {
                border: "1px solid blue",
              },
            }}
          >
            Remove
          </Button>
        </Box>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="Full Name" label="Full Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Email"
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Password"
                label="Password"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Confirm Password"
                label="Confirm Password"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Company Name"
                label="Company Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="UEN No" label="UEN No" variant="outlined" />
            </Grid>
          </Grid>
          <Box
            sx={{
              margin: "30px 0",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StyledTextField
                  size="small"
                  id="Address"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={7}
                />
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="City" label="City" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="State" label="State" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="Country" label="Country" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Postcode"
                label="Postcode"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                size="small"
                id="Phone Number"
                label="Phone Number"
                type="tel"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          style={{
            margin: "15px 40%",
            width: "10em",
            backgroundColor: color ? color : "inherit",
          }}
          variant="contained"
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
};

export default ManageAccount;
