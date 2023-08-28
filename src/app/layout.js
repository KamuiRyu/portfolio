import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        <div
          className={`bg-site h-screen w-full overflow-hidden text-white bg-cover bg-no-repeat relative`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
