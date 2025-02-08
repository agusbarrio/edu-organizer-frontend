import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Stack,
  Grid,
} from "@mui/material";


import { School } from "@mui/icons-material";
import Link from "next/link";
import LinkMui from "@mui/material/Link";
import Image from "next/image";
import PATHS from "constants/PATHS";
import Redirect from "components/navigation/Redirect";
import useLocaleContext from "hooks/useLocaleContext";
import TEXTS from "constants/TEXTS";

export default function LandingPage() {
  const { translate } = useLocaleContext()


  if (process.env.NEXT_PUBLIC_SHOW_LANDING_PAGE === "true") return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <School />
            <Button color="inherit" component={Link} href="#features">
              {translate(TEXTS.LANDING_PAGE_BENEFITS_BUTTON)}
            </Button>
            <Button color="inherit" component={Link} href="#about">
              {translate(TEXTS.LANDING_PAGE_ABOUT_US_BUTTON)}
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button
              color="inherit"
              component={Link}
              href={PATHS.AUTH_REDIRECT}
              variant="outlined"
            >
              {translate(TEXTS.LANDING_PAGE_PLATFORM_BUTTON)}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h3" gutterBottom>
          {translate(TEXTS.LANDING_PAGE_TITLE)}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {translate(TEXTS.LANDING_PAGE_DESCRIPTION)}
        </Typography>
        <br />
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {translate(TEXTS.LANDING_PAGE_BENEFITS_TITLE)}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: translate(TEXTS.LANDING_PAGE_BENEFITS_TITLE_1),
              description: translate(TEXTS.LANDING_PAGE_BENEFITS_DESCRIPTION_1),
            },
            {
              title: translate(TEXTS.LANDING_PAGE_BENEFITS_TITLE_2),
              description: translate(TEXTS.LANDING_PAGE_BENEFITS_DESCRIPTION_2),
            },
            {
              title: translate(TEXTS.LANDING_PAGE_BENEFITS_TITLE_3),
              description: translate(TEXTS.LANDING_PAGE_BENEFITS_DESCRIPTION_3),
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Container id="about" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" color="textSecondary" component={"p"}>
          {translate(TEXTS.LANDING_PAGE_ABOUT_US_DESCRIPTION)}
        </Typography>
      </Container>

      {/* Footer */}
      <AppBar position="static" color="primary" component={"footer"}>
        <Toolbar sx={{ justifyContent: "center", alignItems: "center", gap: 1, py: 1 }}>
          <Typography variant="body2" color="white">
            {translate(TEXTS.LANDING_PAGE_FOOTER_DEVELOPER)}
          </Typography>
          <LinkMui
            href={process.env.NEXT_PUBLIC_DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
          >
            <Image
              style={{ display: "block" }}
              src="/marca-personal-blanco.png"
              alt="logo"
              width={105}
              height={55}
            />
          </LinkMui>
        </Toolbar>
      </AppBar>
    </>
  )
  return (
    <Redirect url={PATHS.LOGIN}></Redirect>
  )
}
