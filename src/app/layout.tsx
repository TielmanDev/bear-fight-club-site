// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // ⚠️ CRITICAL: Make sure this import is exactly here!

export const metadata: Metadata = {
  title: "Bear Fight Club",
  description: "Wrestling, jiu-jitsu, boxing & MMA classes in George.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}