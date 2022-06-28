import React from "react";
import { Button, Paper, Tab, Tabs, TextField, Typography } from "@mui/material";
import ContainerWrapper from "../../components/ContainerWrapper";
import theme from "../../theme";
import { Box } from "@mui/system";
import NavLink from "../../components/NavLink";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Login = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
              Login
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Login to a new experience
            </Typography>
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              padding: "20px 0 30px 0",
              "& .MuiTabs-flexContainer": { justifyContent: "center" },
            }}
          >
            <Tab
              label={
                <React.Fragment>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Seller
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <React.Fragment>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Buyer
                  </Typography>
                </React.Fragment>
              }
              {...a11yProps(1)}
            />
          </Tabs>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabPanel value={value} index={0}>
              <TextField
                type="email"
                id="email"
                label="Sellers Email"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="password"
                label="Sellers Password"
                variant="outlined"
                type="password"
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/forgotpassword"
              >
                Forgot Password?
              </NavLink>
              <br />
              <Link href="/dashboard/sellerdashboard">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "4px",
                    margin: "20px 0",
                    width: "100%",
                  }}
                >
                  <Typography variant="subtitle2">
                    <a
                      style={{
                        color: "white",
                        width: "100%",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </a>
                  </Typography>
                </Button>
              </Link>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TextField
                type="email"
                id="email"
                label="Buyers Email"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                id="password"
                label="Buyers Password"
                variant="outlined"
                type="password"
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/forgotpassword"
              >
                Forgot Password?
              </NavLink>
              <br />
              <Link href="/dashboard/buyerdashboard">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "4px",
                    margin: "20px 0",
                    width: "100%",
                  }}
                >
                  <Typography variant="subtitle2">
                    <a
                      style={{
                        color: "white",
                        width: "100%",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </a>
                  </Typography>
                </Button>
              </Link>
            </TabPanel>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Dont have an account yet ?{" "}
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: theme.palette.primary.main,
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/register"
              >
                Sign Up
              </NavLink>
            </Typography>
          </Box>
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default Login;
