"use client"
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';



import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';

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
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mounted) {
            return null; 
        }
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
              <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                  <Appbar/>
                    {children} 
              </WalletModalProvider>
              </WalletProvider>
          </ConnectionProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
