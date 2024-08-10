import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Card,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AppAppBar from "../components/AppAppBar";
import bgimage from "../bgimage.jpg";
import TextField from "@mui/material/TextField";

function LaboratoireLocateur() {
  const laboratoires = [
    {
      name: "Laboratoire Alpha",
      address: "Avenue des Sciences 123",
      city: "Technoville",
      postalCode: "4000",
      status: "Certifié",
    },
    {
      name: "Laboratoire Beta",
      address: "Rue de la Recherche 456",
      city: "InnovCity",
      postalCode: "5000",
      status: "Accrédité",
    },
    // Ajoutez plus de laboratoires si nécessaire
  ];

  const [selectedLaboratoire, setSelectedLaboratoire] = useState(null);
  const [postalCode, setPostalCode] = useState("");

  const handleLaboratoireChange = (event) => {
    const laboratoireName = event.target.value;
    const laboratoire = laboratoires.find(
      (lab) => lab.name === laboratoireName
    );
    setSelectedLaboratoire(laboratoire);
  };

  const isLaboratoireSelected = selectedLaboratoire && postalCode;

  return (
    <Box
      sx={{
        marginTop: 0,
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "110vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppAppBar />
      <Container maxWidth="lg" sx={{ marginTop: 0 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm={8}
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
              <Grid container spacing={2}>
                {/* Colonne de gauche avec les champs de texte */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "white", marginBottom: "10px" }}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      Laboratoire Locator
                    </strong>
                  </Typography>

                  <TextField
                    required
                    fullWidth
                    id="codepostal"
                    label="Entrer code postal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  />

                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel
                      id="laboratoire-select-label"
                      sx={{ color: "white" }}
                    >
                      Choisissez le laboratoire
                    </InputLabel>
                    <Select
                      labelId="laboratoire-select-label"
                      id="laboratoire-select"
                      value={selectedLaboratoire?.name || ""}
                      onChange={handleLaboratoireChange}
                      label="Choisissez le laboratoire"
                      sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    >
                      {laboratoires.map((laboratoire, index) => (
                        <MenuItem key={index} value={laboratoire.name}>
                          {laboratoire.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Colonne de droite avec les informations des laboratoires */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  {/* Affichage du laboratoire préféré */}
                  <Typography
                    variant="body1"
                    sx={{ color: "white", marginBottom: "10px" }}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      Laboratoire Préféré
                    </strong>
                  </Typography>

                  <Grid
                    sx={{
                      backgroundColor: "#616161",
                      borderRadius: "10px",
                      paddingLeft: "10px",
                      marginBottom: isLaboratoireSelected ? "20px" : 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Nom :</strong>{" "}
                      Laboratoire Alpha
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Adresse :</strong>{" "}
                      Avenue des Sciences 123
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Ville :</strong>{" "}
                      Technoville
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>
                        Code postal :
                      </strong>{" "}
                      4000
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Status :</strong>{" "}
                      Certifié
                    </Typography>
                  </Grid>

                  {/* Affichage conditionnel du laboratoire sélectionné */}
                  {isLaboratoireSelected && (
                    <>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", marginBottom: "10px" }}
                      >
                        <strong style={{ color: "#FF3399" }}>
                          Laboratoire Sélectionné
                        </strong>
                      </Typography>

                      <Grid
                        sx={{
                          backgroundColor: "#616161",
                          borderRadius: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Nom :</strong>{" "}
                          {selectedLaboratoire?.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>
                            Adresse :
                          </strong>{" "}
                          {selectedLaboratoire?.address}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Ville :</strong>{" "}
                          {selectedLaboratoire?.city}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>
                            Code postal :
                          </strong>{" "}
                          {selectedLaboratoire?.postalCode}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Status :</strong>{" "}
                          {selectedLaboratoire?.status}
                        </Typography>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>

              <hr style={{ width: "100%", color: "white" }}></hr>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={2}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    href="/prescription" // Mettez ici le lien de votre prochaine page
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      borderRadius: "16px",
                    }}
                  >
                    Suivant
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

export default LaboratoireLocateur;
