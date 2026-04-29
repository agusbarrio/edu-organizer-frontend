export default function manifest() {
  return {
    name: "Escuela de Vida",
    short_name: "EdV",
    description:
      "Organizá la información de tu escuela.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
