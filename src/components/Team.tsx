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
        <Container></Container>
      </Container>
    </Box>
  );
}
