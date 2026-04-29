import "styles/globals.css";
import AppProviders from "./app-providers";
import PWARegister from "components/pwa/PWARegister";

export const metadata = {
  title: { default: "Edu Organizer", template: "%s | Edu Organizer" },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PWARegister />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
