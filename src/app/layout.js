import { Inter } from "next/font/google";
import NavBar from "./NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MystiqueBites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBar />{children}</body>
    </html>
  );
}
