import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { getWord } from "../components/getWord";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Englisher",
  description: "Learn a new english word everyday!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
