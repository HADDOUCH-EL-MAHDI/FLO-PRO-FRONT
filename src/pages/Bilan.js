import React, { useState } from "react";
import {
  Button,
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
} from "@mui/material";
import AppAppBar from "../components/AppAppBar";
import bgimage from "../bgimage.jpg";

const medicamentsData = {
  section1: [
    { name: "Medicament 1" },
    { name: "Medicament 2" },
    { name: "Medicament 3" },
    { name: "Medicament 4" },
  ],
  section2: [
    { name: "Medicament 1" },
    { name: "Medicament 2" },
    { name: "Medicament 3" },
    { name: "Medicament 4" },
  ],
};

function Bilan() {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
  });

  const [panier, setPanier] = useState([]);

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const addToBasket = (medicament) => {
    setPanier((prevPanier) => [
      ...prevPanier,
      { ...medicament, quantity1: 1, quantity2: 1, remark: "" },
    ]);
  };

  const handleNext = () => {
    localStorage.setItem("BilanPanier", JSON.stringify(panier));
    window.location.href = "/ordonnancemedicale";
  };

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
              <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid item xs={12}>
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
                          <TableRow key={index}>
                            <TableCell sx={{ color: "white" }}>
                              {med.name}
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
                                  setPanier(
                                    panier.filter((_, i) => i !== index)
                                  )
                                }
                              >
                                Supprimer
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Grid container spacing={4}></Grid>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    flexDirection: "column",
                  }}
                >
                  <br></br>
                  <br></br>
                  {/* Section 1 */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleSection("section1")}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      PRECONISATION FLO°
                    </strong>
                  </Typography>

                  {openSections.section1 && (
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Table>
                        <TableBody>
                          {medicamentsData.section1.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ color: "white" }}>
                                {med.name}
                              </TableCell>
                              <TableCell
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => addToBasket(med)}
                                  style={{
                                    backgroundColor: "#795548",
                                  }}
                                >
                                  Ajouter au panier
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}

                  {/* Section 2 */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleSection("section2")}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      ACTES TECHNIQUES
                    </strong>
                  </Typography>
                  {openSections.section2 && (
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Table>
                        <TableBody>
                          {medicamentsData.section2.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ color: "white" }}>
                                {med.name}
                              </TableCell>
                              <TableCell
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => addToBasket(med)}
                                  style={{
                                    backgroundColor: "#795548",
                                  }}
                                >
                                  Ajouter au panier
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={2}>
                  <Button
                    href="/pharmacielocateur"
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
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Suivant
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <br></br>
      </Container>
    </Box>
  );
}

export default Bilan;
