// // src/pages/Login.jsx
// import React, { useState } from "react";
// import AuthForm from "../components/AuthForm";
// import { useNavigate } from "react-router-dom";
// import { Typography, Box, Paper, Button, TextField } from "@mui/material";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

// const Login = () => {
//   const navigate = useNavigate();
//   const [resetEmail, setResetEmail] = useState("");

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleLogin = async ({ email, password }) => {
//     if (!emailRegex.test(email)) return alert("Please enter a valid email address.");
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in:", userCredential.user.uid);
//       navigate("/");
//     } catch (error) {
//       console.error("Login error:", error.message);
//       alert(error.message);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!resetEmail) return alert("Please enter your email for password reset.");
//     if (!emailRegex.test(resetEmail)) return alert("Please enter a valid email address.");

//     try {
//       await sendPasswordResetEmail(auth, resetEmail);
//       alert("Password reset email sent! Check your inbox.");
//     } catch (error) {
//       console.error("Error sending reset email:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", my: 6, px: 2 }}>
//       <Paper
//         elevation={4}
//         sx={{
//           p: { xs: 3, sm: 5 },
//           maxWidth: 600,
//           width: "100%",
//           borderRadius: 3,
//           textAlign: "center",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: "bold", color: "#6A0DAD", mb: 3 }}
//         >
//           Login
//         </Typography>

//         {/* Auth Form */}
//         <AuthForm
//           title="Login"
//           onSubmit={handleLogin}
//           redirectText="Don't have an account? Signup"
//           redirectLink="/signup"
//           showPassword
//         />

//         {/* Forgot Password */}
//         <Box sx={{ mt: 4 }}>
//           <Typography
//             variant="body1"
//             sx={{ mb: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
//           >
//             Forgot your password? Enter your email:
//           </Typography>

//           <TextField
//             fullWidth
//             type="email"
//             label="Email for password reset"
//             value={resetEmail}
//             onChange={(e) => setResetEmail(e.target.value)}
//             size="medium"
//             sx={{ mb: 2 }}
//           />

//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{
//               width: "100%",
//               py: { xs: 1.5, sm: 2 },
//               fontSize: { xs: "0.95rem", sm: "1rem" },
//               backgroundColor: "#6A0DAD",
//               "&:hover": { backgroundColor: "#4B0082" },
//             }}
//             onClick={handleForgotPassword}
//           >
//             Reset Password
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
