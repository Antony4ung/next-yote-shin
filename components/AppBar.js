import React, { useState } from "react";
import logo from "../public/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Divider, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCom from "./Drawer";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, width: "100%",zIndex:5 }}>
      <DrawerCom
        open={openDrawer}
        handleClose={handleClose}
        toggleDrawer={toggleDrawer}
      />
      <Box
        sx={{
          boxShadow: 3,
          padding: { xs: "0 10px", md: "0 20px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "82px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image width={40} height={40} src={logo} alt="" />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              margin: "0 30px",
            }}
          >
            <Link href="/">
              <a
                style={{
                  margin: "0 10px",
                  "&:hover": {
                    color: "red",
                    cursor: "pointer",
                  },
                }}
              >
                Home
              </a>
            </Link>
            <Link href="/tv">
              <a
                style={{
                  margin: "0 10px",
                  "&:hover": {
                    color: "red",
                    cursor: "pointer",
                  },
                }}
              >
                Tv series
              </a>
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/search">
            <a>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </a>
          </Link>

          <IconButton
            onClick={toggleDrawer}
            sx={{ margin: "0 10px", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
