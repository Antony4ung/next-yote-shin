import { Button, Box } from "@mui/material";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginBtn({ name, fun, color,icon }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "100%", my: 1 }}
        color={color}
        onClick={() => signIn(fun)}
      >
        {name} {icon}
      </Button>
    </Box>
  );
}
