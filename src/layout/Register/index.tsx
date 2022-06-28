import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  linearProgressClasses,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ContainerWrapper from "../../components/ContainerWrapper";
import theme from "../../theme";
import { Box } from "@mui/system";
import NavLink from "../../components/NavLink";
import styled from "@emotion/styled";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 5,
  margin: "20px 0 40px 0",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "lightgray",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#2944c1",
  },
}));

const Register = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <ContainerWrapper>
        <Paper
          elevation={6}
          sx={{
            maxWidth: "600px",
            padding: "50px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Register
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Thank you for choosing us. we just need a few details.
            </Typography>
          </Box>
          {tab === 0 ? (
            <Box>
              <BorderLinearProgress variant="determinate" value={0} />
              <TextField
                type="fullname"
                id="fullname"
                label="Full Name"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  display: "block",
                  margin: "0 auto",
                  marginTop: "25px",
                  borderRadius: "3px",
                  padding: "10px 40px",
                }}
                onClick={() => setTab(1)}
              >
                <Typography>Next</Typography>
              </Button>
            </Box>
          ) : tab === 1 ? (
            <Box>
              <BorderLinearProgress variant="determinate" value={50} />
              <TextField
                id="companyName"
                label="Suppliers Company Name"
                variant="outlined"
                type="text"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="uenNo"
                label="UEN No."
                variant="outlined"
                type="text"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                type="tel"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                type="text"
                multiline
                rows={6}
                maxRows={10}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="city"
                label="City"
                variant="outlined"
                type="text"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="Pincode"
                label="Pincode"
                variant="outlined"
                type="number"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <React.Fragment>
                      I accept OBX{" "}
                      <NavLink
                        linkPath="/terms"
                        styles={{
                          color: theme.palette.primary.main,
                          "&.MuiLink-root": {
                            "&:hover": {
                              color: theme.palette.primary.dark,
                            },
                          },
                        }}
                      >
                        Terms & Conditions
                      </NavLink>
                    </React.Fragment>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <React.Fragment>
                      I accept OBX{" "}
                      <NavLink
                        linkPath="/privacy"
                        styles={{
                          color: theme.palette.primary.main,
                          "&.MuiLink-root": {
                            "&:hover": {
                              color: theme.palette.primary.dark,
                            },
                          },
                        }}
                      >
                        Privacy Policy
                      </NavLink>
                    </React.Fragment>
                  }
                />
              </FormGroup>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: "25px",
                    borderRadius: "3px",
                    padding: "10px 40px",
                  }}
                  onClick={() => setTab(0)}
                >
                  <Typography>Back</Typography>
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: "25px",
                    borderRadius: "3px",
                    padding: "10px 40px",
                  }}
                  onClick={() => setTab(2)}
                >
                  <Typography>Next</Typography>
                </Button>
              </Box>
            </Box>
          ) : tab === 2 ? (
            <>
              <BorderLinearProgress variant="determinate" value={100} />
              <Box
                sx={{
                  padding: "40px 30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "20px",
                  borderRadius: "10px",
                  border: "2px solid blue",
                }}
              >
                <CheckCircleOutlineRoundedIcon
                  sx={{
                    color: "#3bc07d",
                    fontSize: "100px",
                  }}
                />
                <Typography
                  sx={{
                    width: "80%",
                  }}
                >
                  Thank you for singning up! We just need you to verify your email address to
                  complete setting up your account.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    borderRadius: "3px",
                    marginTop: "20px",
                    padding: "10px 40px",
                  }}
                >
                  <Typography>
                    <NavLink
                      linkPath="/login"
                      styles={{
                        color: "white",
                        "&.MuiLink-root": {
                          "&:hover": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      Continue
                    </NavLink>
                  </Typography>
                </Button>
              </Box>
            </>
          ) : null}
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default Register;
