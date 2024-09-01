"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { incognito, gitlabmono } from "@/components/fonts/fonts";
import Appbar from "@/components/global/Appbar";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.rajthombare.xyz";
  const canonicalUrl = `${baseUrl}${pathname}`;

  console.log(canonicalUrl);
  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <link rel='canonical' href={canonicalUrl} />
      </Head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} bg-zinc-900 text-white`}>
        <div id='page-container'>
          <Appbar />
          <main id='content-wrap'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
