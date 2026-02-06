import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DriverPopup from "./components/DriverPopup";
import CookieConsentBanner from "./components/CookieBanner";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: 'Delivery Driver Jobs Portsmouth | Fleet X Logistics Hampshire',
  description: 'Apply for delivery driver jobs in Portsmouth with Fleet X Logistics. Weekly pay, free vans, flexible rotas and full training across Hampshire.',
  keywords: 'Amazon delivery driver jobs Havant, delivery driver Hampshire, DSP jobs, self-employed courier',
  openGraph: {
    title: 'Delivery Driver Jobs in Havant | Fleet X Logistics',
    description: 'Apply now for delivery driver positions with Fleet X Logistics',
  },
    icons: {
  icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YHMC0TLRC"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1YHMC0TLRC');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <DriverPopup />
          <CookieConsentBanner/>
        {children}
      </body>
    </html>
  );
}
