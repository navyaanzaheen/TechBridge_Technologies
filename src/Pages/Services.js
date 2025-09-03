import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web"; // Website Development Icon
import PublicIcon from "@mui/icons-material/Public"; // Social Media Marketing icon
import BrushIcon from "@mui/icons-material/Brush"; // Icon for Graphic Designing
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Icon for Digital Marketing
import HandshakeIcon from "@mui/icons-material/Handshake"; // Icon for Lead Generation
import DesignServicesIcon from "@mui/icons-material/DesignServices"; // Icon for Website Designing

export default function Services() {
  const theme = useTheme();

  const services = [
    {
      title: "Website Development",
      desc: "Whether you're looking for a sleek portfolio, a high-converting landing page, or a full-scale e-commerce empire, we build websites that don’t just look good; they work hard. Built on the latest tech with top-tier security, speed, and scalability, our websites are personalized to match your brand and meet your goals. Mobile-ready, SEO-optimized, and built to grow with you.",
      icon: <WebIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Social Media Marketing",
      desc: "We take your social media from “meh” to magnetic. Whether you need engaging content, paid ads, reels that go viral, or a full-blown social strategy, we’re on it. We help you build a loyal community, boost engagement, and turn those double-taps into dollars. Facebook, Insta, LinkedIn, TikTok—you name it, we ace it.",
      icon: <PublicIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Digital Marketing",
      desc: "From boosting your online presence to driving meaningful engagement, we craft digital marketing strategies that go beyond likes and clicks — they deliver impact. Whether it’s social media, SEO, paid campaigns, or content that converts, we help your brand cut through the noise and reach the right audience at the right time.",
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Graphic Designing",
      desc: "It’s more than just a logo—it’s how you make people feel. We prepare comprehensive brand identities that resonate with your target audience and leave a lasting impression. From visual identity (logos, color palettes, typography) to brand voice and messaging, we help you build a brand that feels authentic, unique, and unforgettable.",
      icon: <BrushIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Lead Generation",
      desc: "We help you reach the right people at the right time. Through performance-driven funnels, targeted outreach, email campaigns, and automation tools, we generate high-quality leads that convert—not just inflate your numbers: less fluff, more ROI.",
      icon: <HandshakeIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Website Designing",
      desc: "We don’t just design pretty websites—we create experiences. From color palettes to typography to UI/UX magic, every pixel is prepared with purpose. The result? A responsive, user-friendly website that looks like a million bucks on every screen, loads in a snap, and keeps your visitors coming back for more.",
      icon: <DesignServicesIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 6 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Our Services
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            mx: "auto",
          }}
        />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>{service.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.7, color: theme.palette.text.secondary }}
                >
                  {service.desc}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
