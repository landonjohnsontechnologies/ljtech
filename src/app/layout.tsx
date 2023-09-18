import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Comfortaa, Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
