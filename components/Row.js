/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { unavailable, img_300, unavailableLandscape } from "../lib/config";
import axios from "axios";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { AppContext } from "../context/ContextProvider";
import { useRouter } from "next/router";

export default function VideoRow({ title, type, data, isLargeRow }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const isDataExist = data.length >= 1


  const router = useRouter();

  const handleMovieClick = (id) => {
    router.push(`/${type}/${id}`);
  };

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if(!isDataExist) {
    return <Box></Box>
  }

  return (
    <Box className="row">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h3 style={{ padding: "20px 0 0 20px" }}>{title}</h3>
        <Box sx={{ mr: 3, display: "flex" }}>
          <IconButton onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={() => handleClick("right")}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
      <Box ref={rowRef} className="row_posters">
        {data?.map((post) => (
          <Tooltip placement="top" key={post.id} title={post.title || post.original_title ||post.original_name }>
            <img
              onClick={() => handleMovieClick(post.id)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              alt={post.original_name || post.title}
              src={
                isLargeRow
                  ? post.poster_path
                    ? img_300 + post.poster_path
                    : unavailable
                  : post.backdrop_path
                  ? img_300 + post.backdrop_path
                  : unavailableLandscape
              }
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}
