import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./utils/Fonts";
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
      <body className={`${montserrat.className} text-jet flex flex-col`}>
        <main className="grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
