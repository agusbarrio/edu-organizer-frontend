import "styles/globals.css";
import AppProviders from "./app-providers";

export const metadata = {
  title: { default: "Edu Organizer", template: "%s | Edu Organizer" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
