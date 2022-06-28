import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player";

export default function VideoTrailerRow({ videoParams }) {
  const items = videoParams?.map((video, index) => (
    <Box
      key={index}
      sx={{
        width: "370px",
        height: "280px",
        display: "flex",
        justifyContent: "center",
      }}
    >
     {video && <ReactPlayer
        height="100%"
        width="100%"
        controls
        url={`https://www.youtube.com/watch?v=${video}`}
      />}
    </Box>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  if (!videoParams) {
    return <div></div>;
  }

  return (
    <Container sx={{ py: 3 }}>
      <h3 style={{ margin: "15px 0" }}>Videos </h3>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        responsive={responsive}
        items={items}
        // autoPlay
      />
    </Container>
  );
}
