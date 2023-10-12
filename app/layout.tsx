import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { montserrat } from "./utils/Fonts";

export const metadata: Metadata = {
  title: "InstaOja",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-nyanza ${montserrat.className} text-jet flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
