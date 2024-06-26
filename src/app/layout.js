import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "so elegant",
  description: "welcome to the so elegant homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[white]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
