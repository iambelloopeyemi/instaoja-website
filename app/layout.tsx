import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./utils/Fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "InstaOja",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-nyanza ${montserrat.className} text-jet flex flex-col`}
      >
        <Header />
        <main className="grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
