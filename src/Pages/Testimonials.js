import React from "react";
import { Box, Typography, useTheme, Card, CardContent, Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function Testimonials() {
  const theme = useTheme();

  const testimonials = [
    {
      name: "Muhammad Tayyab",
      role: "CEO & Founder of Wintality UAE",
      company: "Wintality UAE",
      text: `“Working with Techbridge Technologies has been an absolute game-changer for my real estate business, Wintality, here in the UAE. From the very beginning, their team understood my vision and translated it into a stunning, user-friendly website that perfectly reflects our brand.  

Their expertise in web development and design not only gave us a professional online presence but also made it easier for clients to explore our listings and services. The process was smooth, transparent, and delivered on time. I truly appreciate their dedication, creativity, and technical skills. Techbridge Technologies has exceeded my expectations, and I highly recommend them.”`
    },
    {
      name: "Naveed",
      role: "Managing Operations of Allure Aesthetics",
      company: "Allure Aesthetics",
      text: `“Techbridge Technologies feels like an extension of our team. They understood the aesthetic and tone we wanted from day one and have managed our social media with creativity and precision. Our online presence has never looked better, and our clients constantly compliment us on our content. Highly recommend!”`
    }
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        px: { xs: 2, sm: 6 },
        py: 8,
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 1,
            }}
          >
            Testimonials
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }}
          />
        </Box>
      </motion.div>

      {/* Testimonials Grid */}
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  px: 3,
                  py: 4,
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: theme.palette.background.paper,
                  "&:hover": { transform: "translateY(-6px)", transition: "0.3s" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      lineHeight: 1.8,
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      mb: 3,
                      textAlign: "left",
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                      {item.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bold",
                          color: theme.palette.text.primary,
                          fontSize: "1rem",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.9rem",
                        }}
                      >
                        {item.role}, {item.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
