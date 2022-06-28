import { Box } from "@mui/material";
import React from "react";
import ContextProvider from "../context/ContextProvider";

export default function CustomLayout({ children }) {

  return (
    <ContextProvider>
      <Box sx={{
        width:"100vw",minHeight:"100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}>
      {children}
      </Box>
      
    </ContextProvider>
  )
}
