import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const TechBridgeHero = () => {
  const theme = useTheme();
  const words = ["SMART", "SCALABE", "AND", "INNOVATIVE", "SOLUTIONS"];

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 4 },
        py: { xs: 6, sm: 0 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 4 },
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: theme.typography.h2.fontWeight,
              mb: { xs: 2, sm: 3 },
              color: theme.palette.text.primary,
              fontSize: theme.typography.h2.fontSize,
              lineHeight: 1.2,
            }}
          >
            Welcome To{" "}
            <Box
              sx={{
                color: theme.palette.secondary.main,
                minHeight: "70px",
                display: "block",
                fontSize: theme.typography.h3.fontSize,
                fontWeight: theme.typography.h3.fontWeight,
              }}
            >
              <ReactTyped
                strings={["Techbridge", "Innovation", "The Future"]}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </Box>
          </Typography>

          {/* Animated Theme-colored Words */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              textAlign: { xs: "center", sm: "left" },
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "center", sm: "flex-start" },
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                style={{
                  color:
                    index % 2 === 0
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  display: "inline-block",
                }}
              >
                {word}
              </motion.span>
            ))}
          </Typography>

          {/* Animated Body Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: { xs: 4, sm: 3 },
                lineHeight: 1.8,
                fontSize: theme.typography.body1.fontSize,
                maxWidth: { xs: "100%", sm: "600px" },
                mx: { xs: "auto", sm: 0 },
              }}
            >
              We think beyond ordinary development, blending creativity with
              technology to craft solutions that truly matter. More than a service
              provider, we become an extension of your vision, delivering impactful
              digital experiences.
              <br />
              <br />
              In a world where technology evolves at lightning speed, we bring
              strategy, skill, and innovation together — helping your brand not
              only keep up but rise above.
            </Typography>
          </motion.div>
        </Box>

        {/* Right Side - Image with Framer Motion */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              maxWidth: { sm: "500px", md: "550px" },
              height: "20%",
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: "16px",
              transform: "rotate(3deg)",
              zIndex: 0,
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=987&q=80"
            alt="Technology Innovation"
            sx={{
              width: "100%",
              marginTop: "0px",
              maxWidth: { sm: "500px", md: "550px", lg: "600px" },
              height: "auto",
              borderRadius: "16px",
              display: { xs: "none", sm: "block" },
              position: "relative",
              zIndex: 1,
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default TechBridgeHero;
