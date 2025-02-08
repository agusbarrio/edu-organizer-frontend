import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Box,
  Stack,
  Grid,
} from "@mui/material";


import { School, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import LinkMui from "@mui/material/Link";
import Image from "next/image";
import PATHS from "constants/PATHS";
import Redirect from "components/navigation/Redirect";

export default function LandingPage() {

  if (process.env.NEXT_PUBLIC_SHOW_LANDING_PAGE === "true") return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <School />
            <Button color="inherit" component={Link} href="#features">
              Beneficios
            </Button>
            <Button color="inherit" component={Link} href="#about">
              Sobre Nosotros
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button
              color="inherit"
              component={Link}
              href={PATHS.AUTH_REDIRECT}
              variant="outlined"
            >
              Plataforma
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h3" gutterBottom>
          Organiza tu Aprendizaje de Forma Eficiente
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Planifica tareas, establece objetivos y mejora tu rendimiento académico.
        </Typography>
        <br />
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Beneficios Clave
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Gestión de Tareas",
              description: "Organiza y prioriza tus tareas para mantenerte al día con tus estudios.",
            },
            {
              title: "Recordatorios y Notificaciones",
              description: "Recibe alertas para nunca olvidar entregas o exámenes importantes.",
            },
            {
              title: "Colaboración en Grupo",
              description: "Trabaja en equipo con compañeros en proyectos y asignaciones.",
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
          Nuestra aplicación está diseñada para estudiantes y profesionales que buscan una forma efectiva de administrar su aprendizaje y optimizar su tiempo.
        </Typography>
      </Container>

      {/* Footer */}
      <AppBar position="static" color="primary" component={"footer"}>
        <Toolbar sx={{ justifyContent: "center", alignItems: "center", gap: 1, py: 1 }}>
          <Typography variant="body2" color="white">
            Desarrollo de
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
