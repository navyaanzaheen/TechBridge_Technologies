// // src/pages/Signup.jsx
// import React from "react";
// import AuthForm from "../components/AuthForm";
// import {Typography,Box, Paper } from "@mui/material";
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleSignup = async ({ name, email, password }) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return alert("Please enter a valid email address.");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         email,
//         role: "user",
//         createdAt: new Date(),
//       });

//       console.log("User registered:", { name, email, uid: user.uid });
//       navigate("/");
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         alert("This email is already registered. Please log in instead.");
//       } else {
//         alert(error.message);
//       }
//       console.error("Signup error:", error.message);
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
//           SignUp
//         </Typography>

        

//         <AuthForm
//           title="Signup"
//           onSubmit={handleSignup}
//           redirectText="Already have an account? Login"
//           redirectLink="/login"
//           showName
//           showPassword
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Signup;
