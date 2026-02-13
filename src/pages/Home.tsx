import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  const heroImage = `${import.meta.env.BASE_URL}billeder/i1700407912791821.jpeg`;
  const fakerTowerImage = `${import.meta.env.BASE_URL}billeder/unnamed.png`;

  return (
    <Container maxWidth="lg" sx={{ py: 6, px: 0 }}>
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
              sx={{ bgcolor: "white", color: "black" }}
            >
              Achivements
            </Button>
            <Button
              variant="contained"
              component={RouterLink}
              to="/team"
              sx={{ bgcolor: "white", color: "black" }}
            >
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
      <Stack>
        <Typography variant="h4" component="h2" sx={{ mt: 4 }}>
          About Faker
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Lee Sang-hyeok, better known as Faker, is a South Korean professional
          League of Legends player. He is widely regarded as one of the greatest
          players in the history of the game. Faker has been a key member of T1
          since 2013, leading the team to multiple domestic and international
          titles, including three World Championships. Known for his exceptional
          mechanical skill, game sense, and versatility, Faker has become an
          iconic figure in esports and continues to be a dominant force in the
          competitive scene.
        </Typography>
      </Stack>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          sx={{ mt: 6 }}
        >
          <Box
            component="img"
            src={fakerTowerImage}
            alt="Faker Tower"
            sx={{
              width: { xs: "100%", md: "50%" },
              maxWidth: 400,
              height: "auto",
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              The Faker Tower
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              The Faker Tower stands as a monument to one of esports' greatest
              legends. Located in Seoul, this iconic structure celebrates
              Faker's unparalleled achievements and his impact on the League of
              Legends community. The tower serves as both a tribute to his
              legacy and a symbol of T1's dominance in competitive gaming.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visitors can explore exhibits showcasing Faker's career
              highlights, championship trophies, and memorable moments that
              defined an era. The building features interactive displays, a hall
              of fame, and spaces dedicated to League of Legends history. It has
              become a popular destination for fans and tourists alike, offering
              a unique glimpse into the world of professional esports.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}
