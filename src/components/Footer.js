import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  const theme = useTheme();

  const quickLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: theme.palette.common.white,
        mt: 5,
        pt: 6,
        pb: 4,
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 8 }}
        justifyContent="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Brand */}
        <Grid item xs={12} md={3}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            mb={2}
          >
            {/* Logo */}
            <Box sx={{ mr: { md: 1 }, mb: { xs: 1, md: 0 } }}>
              <img
                src="/images/White.png"
                alt="TechBridge Logo"
                style={{ height: "57px" }}
              />
            </Box>
            </Box>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: { xs: "100%", md: 250 },
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.6,
            }}
          >
            Driving Innovation, Smart Marketing, and Global Growth with
            AI-powered solutions.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          {quickLinks.map((item) => (
            <Typography key={item.name} variant="body2" sx={{ mb: 1 }}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={600}
                offset={-70} // adjusts for navbar height
                spy={true}
                activeClass="active-link"
                style={{
                  color: theme.palette.common.white,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </ScrollLink>
            </Typography>
          ))}
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Follow Us
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <IconButton
              href="https://www.facebook.com/share/1FtwAQrfc3/"
              target="_blank"
              sx={{ color: theme.palette.common.white }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://www.tiktok.com/@techbridge.technology"
              target="_blank"
              sx={{ color: theme.palette.common.white }}
            >
              <FaTiktok size={22} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/techbridgetechnologies?igsh=OTg5aDczMXplYWRj"
              target="_blank"
              sx={{ color: theme.palette.common.white }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/company/techbridgetechnologies/?viewAsMember=true"
              target="_blank"
              sx={{ color: theme.palette.common.white }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.3)", my: 3 }} />

      {/* Copyright */}
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "rgba(255,255,255,0.8)" }}
      >
        © {new Date().getFullYear()} TechBridge Technologies. All rights
        reserved.
      </Typography>
    </Box>
  );
}
