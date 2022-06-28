import * as React from "react";
import Logo from "../../../components/Logo";
import AccountMenu from "./AccountMenu";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavMenuDrawer from "./NavMenuDrawer";
import NavMenuLinks from "./NavMenuLinks";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// NavBar menu
const ResponsiveAppBar = () => {
  const [navAnchorElNav, setNavAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavAnchorElNav(null);
  };

  // account menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        boxShadow: "0",
      }}
      position="static"
      color="transparent"
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavMenuDrawer />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavMenuLinks />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <AccountMenu />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <MoreVertIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
