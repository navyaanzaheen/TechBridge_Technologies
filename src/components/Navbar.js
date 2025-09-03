import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  // Divider,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

// Outlined icons (inactive)
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

// Filled icons (active)
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { text: "Home", path: "home" },
    { text: "About", path: "about" },
    { text: "Services", path: "services" },
    { text: "Testimonials", path: "testimonials" },
    { text: "Contact", path: "contact" },
  ];

  // Map icons for active/inactive state
  const iconMap = {
    Home: { filled: <HomeIcon />, outlined: <HomeOutlinedIcon /> },
    About: { filled: <InfoIcon />, outlined: <InfoOutlinedIcon /> },
    Services: { filled: <BuildIcon />, outlined: <BuildOutlinedIcon /> },
    Testimonials: {
      filled: <StarIcon />,
      outlined: <StarOutlineOutlinedIcon />,
    },
    Contact: {
      filled: <ContactMailIcon />,
      outlined: <ContactMailOutlinedIcon />,
    },
  };

  const drawer = (
    <Box sx={{ textAlign: "center", p: 2 }}>
      {/* Logo */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/techbridgetechnologies_logo-removebg-preview.png"
          alt="TechBridge Logo"
          style={{
            width: "60px",
            height: "auto",
            transition: "transform 0.3s",
            textAlign: "left",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#6A0DAD",
            fontWeight: "bold",
            fontSize: "1rem",
            whiteSpace: "nowrap",
          }}
        ></Typography>
      </Box>

      {/* Drawer Links */}
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {menuItems.map((item) => {
          const isActive = activeLink === item.text;
          return (
            <ListItem key={item.text} disablePadding>
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onSetActive={() => setActiveLink(item.text)}
                onClick={handleDrawerToggle}
                style={{ width: "100%", textDecoration: "none" }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={
                    <Box
                      sx={{
                        width: 30,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {isActive
                        ? iconMap[item.text].filled
                        : iconMap[item.text].outlined}
                    </Box>
                  }
                  sx={{
                    justifyContent: "flex-start",
                    color: isActive ? "#4B0082" : "#B266FF",
                    borderColor: "#6A0DAD",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 0,
                    background: "transparent",
                    "& .MuiButton-startIcon": { marginRight: 1 },
                    "&:hover": {
                      borderColor: "#4B0082",
                      color: "#4B0082",
                      background: "transparent",
                      "& .MuiButton-startIcon": { color: "#4B0082" },
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        color: isActive ? "#4B0082" : "#B266FF",
                        fontWeight: 600,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </Button>
              </ScrollLink>
            </ListItem>
          );
        })}
      </List>
      {/* <Divider sx={{ mt: 2 }} /> */}
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: 0,
        }}
      >
        <Toolbar>
          {/* Logo + Brand Name */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src="/images/White.png"
              alt="TechBridge Logo"
              style={{ height: "54px", marginRight: "10px",marginBottom:'3px'}}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#fff" }}
            ></Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.path}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onSetActive={() => setActiveLink(item.text)}
              >
                <Button
                  disableRipple
                  sx={{
                    color: "#fff",
                    fontWeight: 300,
                    textTransform: "none",
                    background: "transparent !important",
                    borderBottom:
                      activeLink === item.text ? "2px solid #fff" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.text}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{
              display: { md: "none" },
              width: 56, // Same as logo height
              height: 56,
              marginTop:'17px',
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 50 }} /> {/* Icon size */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
