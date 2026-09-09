import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fast News Network",
  description: "Breaking news, politics, business, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased">{children}</body>
    </html>
  );
}
