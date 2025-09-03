import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleClose = () => setAlert({ ...alert, open: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return setAlert({
        open: true,
        severity: "error",
        message: "Please enter a valid email address.",
      });
    }

    emailjs
      .send(
        "service_810oeug",
        "template_2hoobhp",
        formData,
        "TXcWJkQXUhXiHP1c1"
      )
      .then(
        () => {
          setAlert({
            open: true,
            severity: "success",
            message: "Message sent successfully!",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setAlert({
            open: true,
            severity: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 6,
        px: 2,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Styled Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{
            width: { xs: "90vw", sm: "400px" },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            background:
              alert.severity === "success"
                ? "linear-gradient(90deg, #7B2FF7, #9C27B0)"
                : "linear-gradient(90deg, #FF416C, #FF4B2B)",
            color: "#fff",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

      {/* Form Container with Motion */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Paper elevation={4} sx={{ p: 4, width: "100%" }}>
          {/* Heading with Motion */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "2px",
                }}
              />
            </Box>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              slotProps={{
                inputLabel: { sx: { color: "rgba(0,0,0,0.7)" } },
                input: {
                  sx: { "&::placeholder": { color: "rgba(0,0,0,0.7)", opacity: 1 } },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              slotProps={{
                inputLabel: { sx: { color: "rgba(0,0,0,0.7)" } },
                input: {
                  sx: { "&::placeholder": { color: "rgba(0,0,0,0.7)", opacity: 1 } },
                },
              }}
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              slotProps={{
                inputLabel: { sx: { color: "rgba(0,0,0,0.7)" } },
                input: {
                  sx: { "&::placeholder": { color: "rgba(0,0,0,0.7)", opacity: 1 } },
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              multiline
              rows={4}
              slotProps={{
                inputLabel: { sx: { color: "rgba(0,0,0,0.7)" } },
                input: {
                  sx: { "&::placeholder": { color: "rgba(0,0,0,0.7)", opacity: 1 } },
                },
              }}
            />

            {/* Button with Motion Hover */}
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button
    type="submit"
    variant="contained"
    fullWidth
    sx={{
      mt: 2,
      backgroundColor: "#fff", // white background
      color: "#dabdedff",        // text color (purple) – visible on white
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#f0f0f0", // light gray on hover
        color: "#6A0DAD",           // keep text purple on hover
      },
    }}
  >
    Send Message
  </Button>
</motion.div>

          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ContactForm;
