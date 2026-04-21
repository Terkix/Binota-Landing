import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Binota Protocol',
  description: 'A stablecoin experience built on BNB Smart Chain. Features the B1 stablecoin and BNT governance token.',
  manifest: '/site.webmanifest',
  icons: '/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <NavigationBar/> */}
        {children}
      </body>
    </html>
  );
}
