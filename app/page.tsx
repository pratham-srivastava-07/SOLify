"use client"

import React, { FC, useMemo } from 'react';
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

import Image from "next/image";
import Input from '@/components/Input';

export default function Home() {
  return (
          <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className="text-3xl font-bold flex items-center justify-center pt-20">
                       hi there
                    </div>
                   <div className='p-4 flex items-center justify-center'> <WalletMultiButton /></div>
                   <div className='p-4 flex items-center justify-center'><WalletDisconnectButton/></div>
                   <div className="p-4 flex items-center justify-center"><Input type='text' placeholder='Add airdrop' /></div>
                </WalletModalProvider>
            </WalletProvider>
         </ConnectionProvider>
  );
}
