import * as React from "react";
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
import AccountMenu from "../components/menu";

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
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Overview
          </Typography>
          <Box onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TableContainer sx={{ width: "850px", paddingBottom: 12 }}>
              <Table size="large" aria-label="spanning table">
                <TableBody>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>nmedia</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>sales@najeebmedia.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Najeeb</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Last Name</TableCell>
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
