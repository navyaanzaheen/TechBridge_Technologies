// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // keep light theme, can add dark later
    primary: {
      main: "#7B2FF7", // Purple (matches logo)
    },
    secondary: {
      main: "#9C27B0", // Magenta / Deep Purple accent
    },
    background: {
      default: "#f9f9fb", // Light gray background for sections
      paper: "#ffffff",   // White cards
    },
    text: {
      primary: "#1a1a1a",  // Dark text for readability
      secondary: "#555555", // Soft gray
    },
  },

  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",

    h1: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)", // 32px → 56px
      fontWeight: 700,
      color: "#7B2FF7", // Purple heading
    },
    h2: {
      fontSize: "clamp(1.75rem, 4vw, 2.5rem)", // 28px → 40px
      fontWeight: 600,
      color: "#7B2FF7",
    },
    h3: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)", // 24px → 32px
      fontWeight: 600,
      color: "#9C27B0", // Accent magenta
    },
    body1: {
      fontSize: "clamp(0.9rem, 2vw, 1.1rem)", // 14px → 18px
      lineHeight: 1.6,
      color: "#efececff",
    },
    body2: {
      fontSize: "clamp(0.8rem, 1.5vw, 1rem)", // 13px → 16px
      lineHeight: 1.5,
      color: "#555",
    },
    button: {
      textTransform: "none", // Prevent all-caps
      fontWeight: 600,
    },
  },

  breakpoints: {
    values: {
      xs: 0,   // Mobile
      sm: 600, // Small tablets
      md: 900, // Tablets
      lg: 1200, // Desktop
      xl: 1536, // Large screens
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 24px",
          background: "linear-gradient(90deg, #7B2FF7, #9C27B0)", // Gradient buttons
          color: "#7e0af1ff", // light purple

          "&:hover": {
            background: "linear-gradient(90deg, #9C27B0, #7B2FF7)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
