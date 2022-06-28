/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import {
  Badge,
  Box,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import UserScoreProgress from "../../components/UserScore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ModalCom from "../../components/Modal";
import { AppContext } from "../../context/ContextProvider";
import CreditsScroller from "../../components/CreditScroller";
import VideoTrailerRow from "../../components/VideoTrailerRow";
import Companies from "../../components/Companies";
import Recommendations from "../../components/Recommendations";
import { fetchVideoParams,fetchDetails  } from "../../lib/config/videoFetch";

export default function Details() {
  const router = useRouter();
  const { movieId } = router.query;
  const { modalOpen, setModalOpen } =
    useContext(AppContext);

  const [detailData, setDetailData] = useState(null);
  // const [recommendations, setRecommendations] = useState(null);
  const [videoParams,setVideoParams] = useState(null)

  useEffect(() => {
    fetchVideoParams(movieId,'movie',setVideoParams);
    fetchDetails(movieId,'movie',setDetailData);
  }, [movieId]);



  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", height: "100%",pb:5 }}>
      {modalOpen && videoParams[0] && <ModalCom videoparam={videoParams[0]} />}
      <Box
        sx={{
          width: "100%",
          minHeight: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${detailData?.backdrop_path}"
      )`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {detailData && <Container
          sx={{
            px: { xs: 2, md: 0 },
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(256,256,256,0.8)"
                : "rgba(0,0,0,0.8)",
            boxShadow: 3,
            backdropFilter: "blur(5px)",
            p: { xs: 2, md: 5 },
          }}
        >
          <Grid container spacing={3}>
            <Grid
              sx={{
                display: "flex",
                mx: { xs: 2, md: 0 },
              }}
              item
              xs={6}
              md={3}
            >
              <img
                style={{ width: "100%", height: "auto" }}
                src={`https://image.tmdb.org/t/p/original/${detailData?.poster_path}`}
                alt=""
              />
            </Grid>
            <Grid sx={{}} item xs={12} md={9}>
              <Box sx={{ ml: { xs: 2, md: 4 } }}>
                <h1 style={{}}>{detailData?.original_title}</h1>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {detailData.release_date && <p style={{ marginRight: "10px" }}>
                    {detailData?.release_date}
                  </p>}
                  {detailData.original_language && <span style={{ marginRight: "10px" }}>
                    {detailData?.original_language.toUpperCase()}
                  </span>}

                  {detailData.popularity && <p style={{ marginRight: "10px" }}>Popularity {detailData?.popularity}</p>}

                  

                  {detailData.runtime && <p style={{ marginRight: "10px" }}>{detailData?.runtime}min</p>}

                  <Badge
                  sx={{}}
                    badgeContent={detailData?.vote_average}
                    color={detailData?.vote_average > 5 ? "success" : "error"}
                  >
                    <StarIcon />
                  </Badge>
                </Box>
                <Box sx={{ mt: 1 }}>
                  {detailData?.genres.map((item) => (
                    <Chip
                      sx={{ mr: 1,mt:1 }}
                      key={item.id}
                      label={item.name}
                      variant="contained"
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <UserScoreProgress score={detailData?.vote_average * 10} />
                  <Tooltip placement="top" title={"Favourites"}>
                    <IconButton sx={{ ml: 1 }}>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip placement="top" title={"PlayList"}>
                    <IconButton sx={{ ml: 1 }}>
                      <FormatListBulletedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip placement="top" title={"Play"}>
                    <IconButton
                      onClick={() => setModalOpen(!modalOpen)}
                      sx={{ ml: 1 }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                {detailData?.tagline && <Box sx={{ my: 1 }}>
                  <p>{detailData?.tagline}</p>
                </Box>}
                {detailData?.overview && <Box sx={{}}>
                  <h3>Overview</h3>
                  <p>{detailData?.overview}</p>
                </Box>}
              </Box>
            </Grid>
          </Grid>
        </Container>}
      </Box>
      {movieId && <CreditsScroller type='movie' id={movieId} />}
      {videoParams && <VideoTrailerRow videoParams={videoParams} />}
      {movieId && <Recommendations setDetailData={setDetailData}  id={movieId} type="movie"/>}
      {detailData?.production_companies &&  <Companies companies={detailData.production_companies}/> }
    </Box>
  );
}
