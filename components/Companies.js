/* eslint-disable @next/next/no-img-element */
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';

export default function Companies({companies}) {
      if (!companies) {
        return <div></div>;
      }
    
      return (
        <Container sx={{ py: 3, }}>
          <h3 style={{ margin: "15px 0" }}>ProductionCompanies </h3>
          <Box sx={{width:"100%",display:"flex",overflowX:"scroll"}} >
        {companies?.map((company) => (
        <img style={{width: "70px", height: "auto", margin: "10px"}} key={company.id} src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} alt="" />
        ))}
          </Box>
        </Container>
      );
}
