import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';
import NextAuthSessionProvider from './provider';
import { Toaster } from '@/components/ui/sonner';
import Footer from './_components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className={outfit.className}>
        <NextAuthSessionProvider>
          <Header />
          <div className="mx-6 md:mx-16">{children}</div>
          <Footer />
          <Toaster />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
