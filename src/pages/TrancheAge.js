import * as React from "react";
import Grid from "@mui/material/Grid";
import AppAppBar from "../components/AppAppBar";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BtnConsulter from "../components/BtnConsulter";
import enfant from "../enfant.png";
import adolescent from "../adolescent.png";
import adulte from "../adulte.png";
import bgimage from "../bgimage.jpg";
import backgroundimage from "../backgroundimage.png";
import agee from "../agee.png";

function TrancheAge() {
  return (
    <Box
      sx={{
        marginTop: "0px",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "102.5vh",
      }}
    >
      <AppAppBar />
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <h1 style={{ color: "white", marginTop: "100px" }}>
              Nouvelle consultation
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={enfant}
                alt="Enfant"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Enfant
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={adolescent}
                alt="Adolescent"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Adolescent
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={adulte}
                alt="Adulte"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Adulte
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={agee}
                alt="Agée"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Agée
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter href="/formpatient" size="small" />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TrancheAge;
