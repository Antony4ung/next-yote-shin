import { Modal, Box,Badge } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "../context/ContextProvider";
import StarRateIcon from '@mui/icons-material/StarRate';
import HdIcon from '@mui/icons-material/Hd';

export default function ModalCom({videoparam}) {
  const { modalOpen, handleModalClose, setVideoParams } = useContext(AppContext);


  const url = videoparam ?  `https://www.youtube.com/watch?v=${videoparam}` : null

  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        handleModalClose();
        setVideoParams(null);
      }}
      sx={{}}
    >
     <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          maxWidth: 900,
          height: "50vh",
          minHeight: 350,
          px:{xs:2,md:0}
        }}
      >
        {videoparam && <ReactPlayer
          height="100%"
          width="100%"
          controls
          url={url}
        />}
      </Box>
    </Modal>
  );
}
