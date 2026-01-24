import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Fleet X Logistics | Amazon Delivery Driver Jobs in Havant',
  description: 'Join Fleet X Logistics as an Amazon delivery driver. Free electric vans, weekly pay, flexible hours. Immediate starts available in Havant.',
  keywords: 'Amazon delivery driver jobs Havant, delivery driver Hampshire, DSP jobs, self-employed courier',
  openGraph: {
    title: 'Delivery Driver Jobs in Havant | Fleet X Logistics',
    description: 'Apply now for delivery driver positions with Fleet X Logistics',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
