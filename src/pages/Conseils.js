import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AppAppBar from "../components/AppAppBar";
import bgimage from "../bgimage.jpg";

function Conseils() {
  return (
    <Box
      sx={{
        marginTop: "0px",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "110vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppAppBar />
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <Button
                type="submit"
                href="/questionnaire2"
                variant="contained"
                sx={{
                  backgroundColor: "#f44336",
                  "&:hover": {
                    backgroundColor: "#ff1744",
                  },
                  color: "#fff",
                  marginBottom: "20px",
                  alignSelf: "flex-start",
                }}
                style={{ borderRadius: "8px" }}
              >
                Retour à la sélection de questionnaire
              </Button>

              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Conseils pour se sentir mieux au quotidien
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: "10px" }}
              >
                <strong style={{ color: "#76ff03" }}>
                  Écoutez votre corps :
                </strong>{" "}
                Si vous vous sentez fatigué(e), triste ou avez du mal à dormir,
                ne les ignorez pas.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: "10px" }}
              >
                <strong style={{ color: "#76ff03" }}>
                  Organisez votre journée :
                </strong>{" "}
                Une routine quotidienne peut vous aider à vous sentir plus en
                contrôle.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: "10px" }}
              >
                <strong style={{ color: "#76ff03" }}>
                  Prenez du temps pour vous :
                </strong>{" "}
                Des activités comme la méditation ou le yoga peuvent vraiment
                aider à apaiser le stress.
              </Typography>

              <Typography variant="body1" sx={{ color: "white" }}>
                <strong style={{ color: "#76ff03" }}>
                  Entourez-vous de soutien :
                </strong>{" "}
                Parlez à vos proches, partagez ce que vous ressentez. Cela peut
                faire toute la différence.
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Diag conseil
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    href="/conseilsalimentaire"
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Diag conseil alimentaire
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    href="/diagmedicament"
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Diag medicament
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Conseils;
