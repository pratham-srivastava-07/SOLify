"use client"
import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
;
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import RenderProvider from '@/providers/RenderProvider';

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
       
  return (
    <html lang="en">
      <body className={inter.className}>
          <RenderProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                  <WalletProvider wallets={[]} autoConnect>
                  <WalletModalProvider>
                      {/* <Appbar/> */}
                        {children} 
                  </WalletModalProvider>
                  </WalletProvider>
              </ConnectionProvider>
              </ThemeProvider>
          </RenderProvider>
      </body>
    </html>
  );
}
