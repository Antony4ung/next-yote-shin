import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Switch,
  Pagination,
  Container,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Skeleton,
} from "@mui/material";
import axios from "axios";
import { img_300, unavailable } from "../lib/config";
import SearchForm from "../components/SearchForm";
import MovieCard from "../components/MovieCard";
import SelectForm from "../components/Select";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setpage] = useState(1);
  const [searchText, setsearchText] = useState("spider man");
  const [content, setcontent] = useState(null);
  const [NumOfPages, setNumOfPages] = useState(1);

  const url = `https://api.themoviedb.org/3/search/${
    type ? "tv" : "movie"
  }?api_key=143d8b8fb24e648fe921adc63cfb0c67&language=en-US&query=${searchText}&page=${page}&include_adult=true`;

  const formSearch = async (url) => {
    try {
      const { data } = await axios.get(url);
      setcontent(data.results);
      setNumOfPages(data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    formSearch(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, type, page]);

  return (
    <Box>
      <SearchForm
        searchText={searchText}
        setsearchText={setsearchText}
        formSearch={formSearch}
        url={url}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mr: 3,
          alignItems: "center",
        }}
      >
        <SelectForm type={type} setType={setType} />
      </Box>
      {content ? (
        <Container maxWidth="xl" sx={{ my: 3 }}>
          <Grid container spacing={2}>
            {content?.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3} lg={2}>
                {/* <Badge badgeContent={4} color="primary"> */}
                <MovieCard
                  type={type ? "tv" : "movie"}
                  id={item.id}
                  original_title={item.original_title || item.original_name}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
                {/* </Badge> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container sx={{ minHeight: "80vh" }}></Container>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Pagination
          count={Number(NumOfPages)}
          onChange={(event, value) => setpage(value)}
        />
      </Box>
    </Box>
  );
};

export default Search;
