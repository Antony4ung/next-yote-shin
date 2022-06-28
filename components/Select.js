import { Box,Switch } from "@mui/material";
import React from "react";

export default function SelectForm({setType,type}) {
  return (
    <Box>
      <span>Movie</span>
      <Switch onChange={() => setType(!type)} />
      <span>Tv</span>
    </Box>
  );
}
