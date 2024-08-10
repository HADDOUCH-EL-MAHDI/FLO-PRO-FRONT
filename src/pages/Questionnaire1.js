import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppAppBar from "../components/AppAppBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Card } from "@mui/material";
import bgimage from "../bgimage.jpg";

function Questionnaire1() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <h1 style={{ color: "white", marginTop: "90px" }}>Questionnaire</h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    href="/prediagnostique"
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
                    Retour à la sélection d'âge
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FormControl style={{ color: "white" }}>
                    <FormLabel
                      id="demo-controlled-radio-buttons-group"
                      style={{ color: "white" }}
                    >
                      Vous sentez-vous souvent découragé(es) et triste ?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="oui"
                        control={<Radio />}
                        label="Oui"
                      />
                      <FormControlLabel
                        value="non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{
                        ml: 2,
                        mt: 2,
                        mb: 2,
                        backgroundColor: "#FF3399",
                        "&:hover": {
                          backgroundColor: "#ff1744",
                        },
                      }}
                      style={{ borderRadius: "16px" }}
                    >
                      Précédent
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      type="submit"
                      href="/questionnaire2"
                      variant="contained"
                      sx={{
                        ml: 2,
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
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <br></br>
      </Container>
    </Box>
  );
}

export default Questionnaire1;
