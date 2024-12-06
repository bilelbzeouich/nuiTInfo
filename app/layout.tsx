import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ModalProvider from "@/components/modals/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Navbar from "@/components/global/NavBar/Nav";
import Footer from "@/components/global/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizy - Test Your Knowledge!",
  description: "A Quiz App built using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider />
        <Navbar/>
        {children}
        <Footer/>
        <Toaster position="top-center" duration={5000} richColors />
      </body>
    </html>
  );
}
