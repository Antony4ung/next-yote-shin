import { ThemeProvider, createTheme } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoParams, setVideoParams] = useState([]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const AppTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        modalOpen,
        setModalOpen,
        handleModalClose,
        toggleModal,
        videoParams,
        setVideoParams
      }}
    >
      <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
