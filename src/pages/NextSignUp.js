import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import bgimage from "../bgimage.jpg";

import logo from "../logo.png";
import Copyright from "../components/Copyright";
import AppAppBar from "../components/AppAppBar";

const defaultTheme = createTheme();

function NextSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box 
    sx={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ThemeProvider theme={defaultTheme}>
      <AppAppBar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginTop: '90px',
          borderRadius: "16px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Clear background
          padding: '16px',
          marginBottom:"20px"
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          style={{ marginTop: "10px", borderRadius: "16px" }}
        >
          <img
            src={logo}
            alt="avatar"
            style={{ width: "20%", height: "20%" }}
          />
          <Typography component="h1" variant="h5">
          S'inscrire
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date naissance"
                    name="date"
                    onChange={handleSubmit}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-city"
                  name="ville"
                  required
                  fullWidth
                  id="ville"
                  label="Ville"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Choisissez une spécialité
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Choisissez une spécialité"                    
                    onChange={handleSubmit}
                  >
                    <MenuItem value={10}>spécialité 1</MenuItem>
                    <MenuItem value={20}>spécialité 2</MenuItem>
                    <MenuItem value={30}>spécialité 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Choisissez une entité
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="entite"
                    label="Choisissez une entité"
                    onChange={handleSubmit}
                  >
                    <MenuItem value={10}>Entité 1</MenuItem>
                    <MenuItem value={20}>Entité 2</MenuItem>
                    <MenuItem value={30}>Entité 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Code postale"
                  type="number"
                  id="codepostale"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="adresse"
                  label="Adresse"
                  type="text"
                  size="small"
                  id="adresse"
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  type="submit"
                  href="/signup"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, backgroundColor: "#FF3399" ,
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                  }}
                  style={{ borderRadius: "16px" }}
                >
                  Avant
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  type="submit"
                  href="/nextsignup"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, backgroundColor: "#FF3399" ,
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                  }}
                  style={{ borderRadius: "16px" }}
                >
                  Enregistrer
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
    </Box>
  );
}

export default NextSignUp;
