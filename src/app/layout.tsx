import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamuna Chaudhry",
  description:
    "Problem Solver, Builder, & Student. Rising Senior studying Computer Science at City College. Interested in full-stack development, data science, and machine learning.",
  icons: {
    icon: "/images/M.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      {/* add ur own google tag for google analytics reports*/}
      {/* <GoogleTagManager gtmId="add here" />
      <GoogleAnalytics gaId="add here" /> */}
    </html>
  );
}
