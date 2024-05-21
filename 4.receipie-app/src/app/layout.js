import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import LoadingPage from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "You found your favourite recipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<LoadingPage />}>{children}</Suspense>
      </body>
    </html>
  );
}
