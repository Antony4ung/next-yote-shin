import { Box } from "@mui/material";
import React from "react";
import ContextProvider from "../context/ContextProvider";
import Header from "./AppBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  // const theme = useTheme();
  return (
    <ContextProvider>
      <Box sx={{
        width:"100vw",minHeight:"100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}>
      <Header/>
      {children}
      <Footer/>
      </Box>
      
    </ContextProvider>
  )
}
