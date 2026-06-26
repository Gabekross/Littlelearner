import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.scss";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Little Learner Cards",
  description: "A fun learning app for kids — tap cards to hear words, letters, and numbers!",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
