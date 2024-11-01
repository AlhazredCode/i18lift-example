import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import { dir } from 'i18next';
import theme from '@/config/Theme';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

//Import i18n.ts
import "../i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uplift | Miami, FL Car Services",
  description: "Elevate your car care with Uplift in Miami, FL. We offer professional and detailed cleaning services to make your vehicle look flawless. Book your appointment today!",};
  export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
  }
  

  export default function RootLayout({
    children,
    params: { locale }
  }: {
    children: ReactNode;
    params: { locale: string };
  }) {
    if (!i18nConfig.locales.includes(locale)) {
      notFound();
    }
  
  return (
    <html lang="en"  dir={dir(locale)}>
    <ThemeProvider theme={theme}>

      <body className={inter.className}  >
        {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
