import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { incognito, gitlabmono } from "@/components/fonts/fonts";
import Appbar from "@/components/global/Appbar";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Raj Thombare",
  description: "My Portfolio Website",
  icons: "/logo-light.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} bg-zinc-900 text-white`}>
        <div id='page-container'>
          <Appbar />
          <div id='content-wrap'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
