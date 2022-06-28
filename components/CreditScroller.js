import { Container, Card, CardContent, CardMedia } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { img_300, noPicture } from "../lib/config";
import 'react-alice-carousel/lib/alice-carousel.css';

export default function CreditsScroller({ type, id }) {
  const [credits, setCredits] = useState(null);

  const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=143d8b8fb24e648fe921adc63cfb0c67&language=en-US`;

  const fetchCredits = async () => {
    const { data } = await axios.get(url);
    setCredits(data.cast);
  };

  useEffect(()=>{
    setCredits(null)
  },[])

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  const items = credits?.map((c,index) => (
    <Card key={index} sx={{ width:120 }}>
      <CardMedia
        component="img"
        alt={c?.name}
        image={c.profile_path ? `${img_300}${c.profile_path}` : noPicture}
        sx={{height:200}}
      />
      <CardContent sx={{height:70}}>
        <p>
          {c?.name}
        </p>
      </CardContent>
    </Card>
  )) 

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5
    },
    1024: {
      items: 8,
    },
  };

  
  
  return (
    <Container sx={{py:5}}>
      <h3 style={{margin:"15px 0"}}>Credits </h3>
      <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                // autoPlay
            />
    </Container>
  );
}