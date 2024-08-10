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

function PharmacieLocateur() {
  const pharmacies = [
    {
      name: "Rémy",
      address: "Rue Elodie Pons 40408",
      city: "Marque Arnaud, SA",
      postalCode: "1234",
      status: "Abonnée",
    },
    {
      name: "Dupré",
      address: "Rue Elodie Pons 40408",
      city: "Marque Arnaud, SA",
      postalCode: "4158",
      status: "Abonnée",
    },
    // Ajoutez plus de pharmacies si nécessaire
  ];

  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [postalCode, setPostalCode] = useState("");

  const handlePharmacyChange = (event) => {
    const pharmacyName = event.target.value;
    const pharmacy = pharmacies.find((pharma) => pharma.name === pharmacyName);
    setSelectedPharmacy(pharmacy);
  };

  const isPharmacySelected = selectedPharmacy && postalCode;

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
                      Pharmacie Locator
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
                      id="pharmacy-select-label"
                      sx={{ color: "white" }}
                    >
                      Choisissez la pharmacie
                    </InputLabel>
                    <Select
                      labelId="pharmacy-select-label"
                      id="pharmacy-select"
                      value={selectedPharmacy?.name || ""}
                      onChange={handlePharmacyChange}
                      label="Choisissez la pharmacie"
                      sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    >
                      {pharmacies.map((pharmacy, index) => (
                        <MenuItem key={index} value={pharmacy.name}>
                          {pharmacy.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Colonne de droite avec les informations des pharmacies */}
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
                  {/* Affichage de la pharmacie préférée */}
                  <Typography
                    variant="body1"
                    sx={{ color: "white", marginBottom: "10px" }}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      Pharmacie Préférée
                    </strong>
                  </Typography>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      width: "100%", // Ajouté pour s'assurer que la largeur soit prise en compte
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#616161",
                      borderRadius: "10px",
                      paddingLeft: "10px",
                      marginBottom: isPharmacySelected ? "20px" : 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Nom :</strong> Rémy
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Adresse :</strong>{" "}
                      Rue Elodie Pons 40408
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Ville :</strong>{" "}
                      Marque Arnaud, SA
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>
                        Code postal :
                      </strong>{" "}
                      4158
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", marginBottom: "10px" }}
                    >
                      <strong style={{ color: "#76ff03" }}>Status :</strong>{" "}
                      Abonnée
                    </Typography>
                  </Grid>

                  {/* Affichage conditionnel de la pharmacie sélectionnée */}
                  {isPharmacySelected && (
                    <>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", marginBottom: "10px" }}
                      >
                        <strong style={{ color: "#FF3399" }}>
                          Pharmacie Sélectionnée
                        </strong>
                      </Typography>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        sx={{
                          width: "100%", // Ajouté pour s'assurer que la largeur soit prise en compte
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "#616161",
                          borderRadius: "10px",
                          paddingLeft: "10px",
                          marginBottom: isPharmacySelected ? "20px" : 0,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Nom :</strong>{" "}
                          {selectedPharmacy?.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>
                            Adresse :
                          </strong>{" "}
                          {selectedPharmacy?.address}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Ville :</strong>{" "}
                          {selectedPharmacy?.city}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>
                            Code postal :
                          </strong>{" "}
                          {selectedPharmacy?.postalCode}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", marginBottom: "10px" }}
                        >
                          <strong style={{ color: "#76ff03" }}>Status :</strong>{" "}
                          {selectedPharmacy?.status}
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
                    href="/laboratoirlocator"
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

export default PharmacieLocateur;
