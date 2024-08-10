import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import AppAppBar from "../components/AppAppBar";
import { Box, Container, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BtnConsulter from "../components/BtnConsulter";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cardsData from '../cardsData.json'; 
import bgimage from "../bgimage.jpg"
const CARDS_PER_PAGE = 3;

function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => 
      Math.min(prevPage + 1, Math.ceil(cardsData.length / CARDS_PER_PAGE) - 1)
    );
  };

  const currentCards = cardsData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <Box
    sx={{
      marginTop: "0px",
      backgroundImage: `url(${bgimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh' 
    }}>
      <AppAppBar />
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} >          
          <IconButton style={{color:"#FF3399"}} onClick={handlePrevPage} disabled={currentPage === 0}>
            <ArrowBackIosIcon style={{ fontSize: 40 }}/>
          </IconButton>
          <Grid container spacing={2} sx={{ flexGrow: 1 }} >
            {currentCards.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <Card sx={{ maxWidth: 345, borderRadius: "16px" }}>
                <Box
                component="img"
                sx={{ 
                  height: 100, 
                  width: '20%', 
                  display: 'block', 
                  margin: 'auto',  
                  objectFit: 'contain' 
                }}
                src={card.image}
                alt="Adolescent"
              />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <BtnConsulter size="small" href={card.buttonLink}>
                      {card.buttonText}
                    </BtnConsulter>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <IconButton style={{color:"#FF3399"}} onClick={handleNextPage} disabled={(currentPage + 1) * CARDS_PER_PAGE >= cardsData.length}>
            <ArrowForwardIosIcon style={{ fontSize: 40 }}/>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
