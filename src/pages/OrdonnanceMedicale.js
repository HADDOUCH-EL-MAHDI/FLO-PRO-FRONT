import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import AppAppBar from "../components/AppAppBar";
import bgimage from "../bgimage.jpg";

function OrdonnanceMedicale() {
  // État pour le panier
  const [panier, setPanier] = useState([]);

  // Récupérer le panier depuis localStorage lors du chargement du composant
  useEffect(() => {
    const panierData = localStorage.getItem("panier");
    if (panierData) {
      setPanier(JSON.parse(panierData));
    }
  }, []);

  // Optionnel : Nettoyage de localStorage lorsque le composant est démonté
  useEffect(() => {
    return () => {
      localStorage.removeItem("panier");
    };
  }, []);

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
              marginBottom: "10px",
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
                  backgroundColor: "#f50057",
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
                Ordonnance Médicale
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "10px",
                  backgroundColor: "#FF3399",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Panier
              </Typography>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "transparent" }}
              >
                <Table>
                  <TableBody>
                    {panier.map((med, index) => (
                      <React.Fragment key={index}>
                        <TableRow>
                          <TableCell sx={{ color: "white" }}>
                            {med.name}
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            {med.quantity1}
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            {med.quantity2}
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            {med.remark}
                          </TableCell>
                          <TableCell
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ backgroundColor: "#795548" }}
                              onClick={() =>
                                setPanier(panier.filter((_, i) => i !== index))
                              }
                            >
                              Supprimer
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            sx={{
                              color: "white",
                              textAlign: "left",
                              paddingLeft: "16px",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: "#76ff03" }}
                            >
                              Utilisation: 1 fois par jour pondant une semaine{" "}
                              {med.usage}{" "}
                              {/* This is the new line showing the usage instructions */}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Button
                type="submit"
                href="/bilan"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#FF3399",
                  "&:hover": {
                    backgroundColor: "#ff1744",
                  },
                }}
                style={{ borderRadius: "16px", alignSelf: "center" }}
              >
                Faire le Bilan
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OrdonnanceMedicale;
