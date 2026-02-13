import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  const heroImage = `${import.meta.env.BASE_URL}billeder/i1700407912791821.jpeg`;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Box>
          <Typography variant="h2" component="h1" sx={{ mt: 1 }}>
            Lee Sang-hyeok
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Faker er en legendarisk League of Legends-spiller og ikon for T1.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/achivements"
            >
              Achivements
            </Button>
            <Button variant="outlined" component={RouterLink} to="/team">
              Team
            </Button>
          </Stack>
        </Box>

        <Box
          component="img"
          src={heroImage}
          alt="Hero image"
          sx={{
            width: "100%",
            height: { xs: 240, sm: 360, md: 420 },
            borderRadius: 3,
            objectFit: "cover",
            boxShadow: 3,
          }}
        />
      </Stack>
    </Container>
  );
}
