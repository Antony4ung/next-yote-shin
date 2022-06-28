import {
  Card,
  CardMedia,
  Skeleton,
  CardContent,
  Box,
  Badge,
} from "@mui/material";
import React from "react";
import { unavailable, img_300 } from "../lib/config";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

export default function MovieCard({
  setDetailData,
  type,
  id,
  original_title,
  poster_path,
  vote_average,
  isSmall,
  original_name
}) {
  const router = useRouter();

  const handleClick = () =>{
    if(setDetailData){
      setDetailData(null)
    }

    router.push(`/${type}/${id}`).then(()=>{
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }).catch(err=>console.log(err))

    
  }

  return (
    <Card
      onClick={handleClick}
      sx={{ width: isSmall ? "95%": "100%" }}
      className="search_card"
    >
     <CardMedia
          component="img"
          alt={original_title}
          image={poster_path ? `${img_300}${poster_path}` : unavailable}
          sx={{ height: "auto" }}
        />
      <CardContent sx={{ minHeight: 70 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{original_title || original_name}</p>
          {vote_average ? (
            <Badge
              badgeContent={vote_average}
              color={vote_average > 5 ? "success" : "error"}
            >
              <StarIcon />
            </Badge>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}
