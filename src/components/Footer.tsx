import { Box, Container, Stack, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        bgcolor: "#f5f5f5",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
              FirstHTML
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © 2026 FirstHTML. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="row" spacing={3}>
            <Link href="#" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
