import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinnor Institute | Occupational Excellence",
  description:
    "Accredited occupational training that transforms people, strengthens industries, and builds sustainable communities.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}