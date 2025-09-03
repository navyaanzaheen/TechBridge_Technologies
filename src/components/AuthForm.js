// // src/components/AuthForm.jsx
// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Link, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const AuthForm = ({ title, onSubmit, redirectText, redirectLink, showName, showPassword }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPasswordField, setShowPasswordField] = useState(false);

//   return (
//     <Box>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmit({ name, email, password });
//         }}
//       >
//         {showName && (
//           <TextField
//             label="Full Name"
//             type="text"
//             variant="outlined"
//             fullWidth
//             required
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         )}

//         <TextField
//           label="Email"
//           type="email"
//           variant="outlined"
//           fullWidth
//           required
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           label="Password"
//           type={showPassword && showPasswordField ? "text" : "password"}
//           variant="outlined"
//           fullWidth
//           required
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           InputProps={
//             showPassword
//               ? {
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPasswordField(!showPasswordField)}
//                         edge="end"
//                       >
//                         {showPasswordField ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }
//               : undefined
//           }
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 3,
//             py: { xs: 1.5, sm: 2 },
//             fontSize: { xs: "0.95rem", sm: "1rem" },
//             backgroundColor: "#6A0DAD",
//             fontWeight: "bold",
//             "&:hover": { backgroundColor: "#4B0082" },
//           }}
//         >
//           {title}
//         </Button>
//       </form>

//       <Typography mt={2} sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
//         <Link href={redirectLink} sx={{ color: "#6A0DAD" }}>
//           {redirectText}
//         </Link>
//       </Typography>
//     </Box>
//   );
// };

// export default AuthForm;
