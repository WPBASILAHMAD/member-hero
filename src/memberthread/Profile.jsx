import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FadeMenu from "../components/menu";
const theme = createTheme();

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          component={Paper}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Grid container>
            <Grid xs={5}></Grid>
            <Grid xs={3}>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "primary.main",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Overview
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ paddingLeft: 29 }}>
              <FadeMenu />
            </Grid>
          </Grid>

          <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TableContainer sx={{ width: "850px", paddingBottom: 12 }}>
              <Table size="large" aria-label="spanning table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Username</strong>
                    </TableCell>
                    <TableCell>nmedia</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Email</strong>
                    </TableCell>
                    <TableCell>sales@najeebmedia.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>First Name</strong>
                    </TableCell>
                    <TableCell>Najeeb</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Last Name</strong>
                    </TableCell>
                    <TableCell>Ahmad</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Grid container sx={{ padding: 1 }}>
              <Grid item xs>
                <Typography component="p" variant="body2">
                  <strong>Last Page Visit:</strong> WPR Profile
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="p" variant="body2">
                  <strong> Last Login Date:</strong> March 27, 2023 3:43 pm
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
