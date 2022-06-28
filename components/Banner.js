import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import VideoRow from "./Row";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";
export default function Banner({ data,isTv,type }) {
  const [number, setNumber] = useState(0);
  const [movie, setMovie] = useState(null);

  const theme = useTheme();
  const router = useRouter();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * 19)),
      10000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setMovie(data[number]);
    }
  }, [data, number]);

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        marginBottom: "2rem",
        minHeight: "95vh",
        position: "relative",
      }}
    >
      {movie && (
        <Box
          sx={{
            position: "absolute",
            top: { xs: "20%", md: "32%" },
            left: 0,
            ml: { xs: 2, md: 5 },
            width: { xs: "90%", md: "600px" },
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(256,256,256,0.4)"
                : "rgba(0,0,0,0.4)",
            boxShadow: 3,
            backdropFilter: "blur(5px)",
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="h4" gutterBottom component="div">
            {movie?.title || movie?.name || movie?.original_name}
          </Typography>
          <h1 style={{ fontWeight: "bold", fontSize: 30 }}></h1>
          <h4 style={{ margin: "15px 0" }}>{truncate(movie?.overview, 230)}</h4>
          <Box sx={{ display: "flex", mt: 3 }}>
            <Button
              onClick={() => router.push(`/${type}/${movie.id}`)}
              sx={{ mr: 1 }}
              variant="contained"
            >
              Play <PlayArrowIcon sx={{ ml: 1 }} />
            </Button>
            <Button variant="outlined">My List</Button>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          display: "flex",
          overflowX: "scroll",
        }}
      >
        <VideoRow isLargeRow title="" type={type} data={data} />
      </Box>
    </Box>
  );
}
