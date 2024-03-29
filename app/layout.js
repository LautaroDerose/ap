import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      
      <body className={inter.className}>
        <Link href={"/"} className=" flex items-center justify-center p-4"><RiHomeLine className="" size={30} /></Link>
        {children}
      </body>
    </html>
  );
}
