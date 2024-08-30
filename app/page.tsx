"use client"

import React, { useEffect, useState } from 'react';

import {
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


import '@solana/wallet-adapter-react-ui/styles.css';


import Input from '@/components/Input';
import Appbar from '@/components/Appbar';
import Main from '@/components/Main';


export default function Home() {
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

  return (
         <div className=''>
            <Main/>
            <Input type='text' placeholder='Enter' />
         </div>   
  );
}
