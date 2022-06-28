import {
  Drawer,
  Box,
  ListItemIcon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import { useRouter } from "next/router";

export default function DrawerCom({ open, handleClose }) {
  const listAry = [
    {
      id: 1,
      navi: "/",
      icon: <HomeIcon />,
      text: "Home",
    },
    {
      id: 2,
      navi: "/tv",
      icon: <TvIcon />,
      text: "Tv shows",
    },
    {
      id: 3,
      navi: "/",
      icon: <SearchIcon />,
      text: "Search",
    },
    {
      id: 4,
      navi: "/profile",
      icon: <AccountCircleIcon />,
      text: "Profile",
    }
  ];

  const router = useRouter();

  const handleClick = (navi) => {
    router.push(navi);
    handleClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleClose} sx={{ p: 2, m: 2 }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <List>
          {listAry.map((item) => (
            <ListItem key={item.id} onClick={() => handleClick(item.navi)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
