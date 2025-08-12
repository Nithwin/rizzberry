import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights if not variable font
  display: 'swap',
  variable: "--font-poppins"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RizzBerry",
  description: "RizzBerry is your AI-powered wingman. Generate endless, personalized pickup lines, share them with community, and first inspiration for your next conversation",
   icons: {
    icon: "/Vector.svg", // path from public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
