import { Box, Container } from "@mui/material";
import styles from "./Team.module.css";

export default function Team() {
  const fakerImage = `${import.meta.env.BASE_URL}billeder/T1_Faker_2022_Split_1.webp`;
  const DoranImage = `${import.meta.env.BASE_URL}billeder/doran.webp`;
  const OnerImage = `${import.meta.env.BASE_URL}billeder/T1_Oner_2026_LCK_Cup.webp`;
  const peysImage = `${import.meta.env.BASE_URL}billeder/JDG_Peyz_2025_Split_1.webp`;
  const keriaImage = `${import.meta.env.BASE_URL}billeder/keria.webp`;

  return (
    <Box id="team" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Box>
          <h1>Current T1 Roster</h1>
        </Box>
        <Container className={styles.cardplacement}>
          <Box className={styles.card}>
            <img className={styles.cardImage} src={DoranImage} alt="Doran" />
            <h2>Doran</h2>
            <p>Top Laner</p>
          </Box>
          <Box className={styles.card}>
            <img className={styles.cardImage} src={OnerImage} alt="Oner" />
            <h2>Oner</h2>
            <p>Jungle</p>
          </Box>
          <Box className={styles.card}>
            <img className={styles.cardImage} src={fakerImage} alt="Faker" />
            <h2>Faker</h2>
            <p>Mid Laner</p>
          </Box>
          <Box className={styles.card}>
            <img className={styles.cardImage} src={peysImage} alt="Peys" />
            <h2>Peys</h2>
            <p>Bottom laner</p>
          </Box>
          <Box className={styles.card}>
            <img className={styles.cardImage} src={keriaImage} alt="Keria" />
            <h2>Keria</h2>
            <p>Support</p>
          </Box>
        </Container>
        <Container>
          <Box>
            <h1>About T1</h1>
          </Box>
          <Box>
            <p>
              The current T1 roster represents one of the most dominant lineups
              in League of Legends history. Led by the legendary Faker in the
              mid lane, T1 continues to set the standard for excellence in
              competitive play. Doran brings aggressive top lane prowess, while
              Oner controls the jungle with precision and game sense. Faker
              remains the cornerstone of the team, known for his unmatched skill
              and clutch performances. Peyz joined as the bot laner, adding
              fresh talent and mechanical skill to the roster. Keria, widely
              regarded as one of the best supports in the world, rounds out the
              lineup with incredible playmaking ability. Together, this roster
              has claimed multiple LCK titles and competed at the highest level
              internationally. T1's synergy and strategic depth make them a
              constant threat in every tournament they enter. With a mix of
              veteran leadership and emerging talent, the team continues to
              evolve and adapt. Fans around the world rally behind T1 as they
              chase another World Championship title.
            </p>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
