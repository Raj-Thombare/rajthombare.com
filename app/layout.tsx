"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { incognito, gitlabmono } from "@/components/fonts/fonts";
import Appbar from "@/components/global/Appbar";
import Footer from "@/components/global/Footer";

import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
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

  return (
    <html lang='en' suppressHydrationWarning>
      <Head>
        <link rel='canonical' href={canonicalUrl} />
      </Head>
      <body
        className={`${bricolageGrotesque.variable} ${bricolageGrotesque.className} ${bricolageGrotesque.variable} bg-zinc-900 text-white`}>
        <div id='page-container'>
          {/* <Appbar /> */}
          <main id='content-wrap'>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
