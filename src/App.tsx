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

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5 }}>
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              FirstHTML
            </Typography>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Button color="inherit" component={RouterLink} to="/">
                T1
              </Button>
              <Button color="inherit" component={RouterLink} to="/">
                Faker Tower
              </Button>
              <Button color="inherit" component={RouterLink} to="/achivements">
                Achivements
              </Button>
              <Button variant="contained">Contact</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
}
