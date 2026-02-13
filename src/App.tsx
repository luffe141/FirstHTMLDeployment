import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="sticky" sx={{ bgcolor: "#f5f5f5" }} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5 }}>
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: "#000",
                textDecoration: "none",
                border: "none",
                outline: "none",
                "&:focus": { outline: "none" },
              }}
            >
              FirstHTML
            </Typography>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Button sx={{ color: "#000" }} component={RouterLink} to="/">
                T1
              </Button>
              <Button sx={{ color: "#000" }} component={RouterLink} to="/">
                Faker Tower
              </Button>
              <Button
                sx={{ color: "#000" }}
                component={RouterLink}
                to="/achivements"
              >
                Achivements
              </Button>
              <Button
                variant="contained"
                sx={{ color: "black", bgcolor: "white" }}
              >
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Footer />
    </Box>
  );
}
