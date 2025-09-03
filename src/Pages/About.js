import React from "react";
import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();

  const coreValues = [
    {
      title: "Keep It Real – Integrity Always",
      desc: "Honesty, transparency, and accountability are at the core of everything we do. We’re upfront with our clients, own our mistakes, and consistently deliver what we promise. No shortcuts, no fake results — just real work with real impact.",
    },
    {
      title: "Think Different – Innovation Fuels Us",
      desc: "We challenge the status quo. In a fast-paced digital world, being average isn’t an option. We experiment, adapt, and stay ahead of the curve so that our clients can too. Creativity and curiosity drive us to build better, more innovative solutions.",
    },
    {
      title: "Teamwork > Solo – Collaboration All the Way",
      desc: "The best ideas come to life when people work together. From internal teamwork to client collaboration, we value diverse perspectives, open communication, and the power of working together as a unified team to bring bold ideas to life.",
    },
    {
      title: "You Come First – Clients Are the Heart of What We Do",
      desc: "Your goals are our mission. We’re not just service providers, we’re partners in your growth journey. We take time to understand your vision, treat your brand like it’s our own, and go above and beyond to exceed expectations.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 6 },
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          About Us
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

      {/* Intro Paragraphs */}
      {[
        `The era of settling for ordinary is over. The world moves fast, and so do we. At Techbridge, we take a human-centered, future-ready approach to craft high-performing digital solutions for today and tomorrow. Innovation drives everything we do, from smart software development to dynamic digital solutions and transformative strategies that empower businesses to thrive.`,
        `Fueled by ideas that create lasting impact, we unlock the true potential of brands, enabling them to embark on a journey of continuous success. We refuse to settle for outdated thinking or uninspired solutions. Instead, we dream bigger, stay energized with fresh ideas, and bring them to life.`,
        `We’re Techbridge Technologies — founded in 2023 with bold vision and unstoppable energy. Our goal? To help brands shine in the digital world and stay ahead of the curve. From elegant, high-performing websites to scroll-stopping visuals and compelling content, we’re the creative engine your brand didn’t know it was missing.  
        In a short time, we’ve collaborated with 20+ amazing clients across the US, UAE, and Pakistan, helping them build impactful online presences. We combine strategy, creativity, tech, trend, and yes, hustle + heart. For us, it’s not just about looking good online — it’s about being seen, heard, and remembered.`,
      ].map((text, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: idx * 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              mb: 4,
            }}
          >
            {text}
          </Typography>
        </motion.div>
      ))}

      {/* Vision */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: "900px",
          mx: "auto",
          mb: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 2 }}
        >
          Our Vision
        </Typography>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
            }}
          >
            “To bridge the gap between bold ideas and flawless execution through
            innovative, scalable digital strategies that empower relations to
            grow — fast and fearlessly.”
          </Typography>
        </motion.div>
      </Paper>

      {/* Core Values */}
      <Box sx={{ maxWidth: "900px", mx: "auto" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
            textAlign: "center",
          }}
        >
          Our Core Values
        </Typography>

        <List
          sx={{
            px: { xs: 0, sm: 2 },
          }}
        >
          {coreValues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ListItem sx={{ mb: 3, alignItems: "flex-start" }}>
                <ListItemIcon sx={{ minWidth: 30, mt: "5px",pt:'11px',px:'10px'}}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: 10, color: theme.palette.primary.main }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.primary,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  }
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Box>
  );
}
