import { Box, Container } from "@mui/material";
import axios from "axios";
import React, { useState,useEffect  } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MovieCard from "./MovieCard";

export default function Recommendations({setDetailData,id,type }) {


  const [recommendations,setRecommendations] = useState(null)

    const getRecommentations = async (id) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=143d8b8fb24e648fe921adc63cfb0c67&language=en-US`
    );
    setRecommendations(data.results);
  };

  useEffect(()=>{
    getRecommentations(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const items = recommendations?.map((item, index) => (
    <Box
      key={index}
      sx={{
        maxWidth:"200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MovieCard
        setDetailData={setDetailData}
        isSmall
        type={type}
        id={item.id}
        original_title={item.original_title}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        original_name={item?.original_name}
      />
    </Box>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };


  return (
    <Container sx={{ py: 3 }}>
      <h3 style={{ margin: "15px 0" }}>Recommendations </h3>
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
