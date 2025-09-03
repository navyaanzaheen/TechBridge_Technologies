import React from "react";
import "./App.css";

// MUI Theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // our custom theme.js

// Components
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

// Pages
import Services from "./Pages/Services";
import About from "./Pages/About";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials/>
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
