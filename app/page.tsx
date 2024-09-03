"use client"

import React, { useEffect, useState } from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import Input from '@/components/ownAirdrop';
import Appbar from '@/components/Appbar';
import Main from '@/components/Main';
import SignMsg from '@/components/SignMsg';
import { WalletCard } from '@/components/WalletCard';
import SendTokens from '@/components/SendTokens';
import ShowBalance from '@/components/ShowBalance';
import Airdrop from '@/components/Airdrop';
import { useSession } from 'next-auth/react';

export default function Home() {
  const [mounted, setMounted] = useState(false);


  const session = useSession()

  

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return <div>
        <div>
            { session.status && <div>
          <Main/>
          <Input placeholder='airdrop' type='text'/>
        </div>}
        </div>
        {/* <div className='flex items-center justify-center'>
            <WalletCard/>
        </div> */}
        <div className="flex items-center justify-center mt-10">
            <Airdrop />
        </div>
        <div className='flex items-center justify-center pt-10'>
            <ShowBalance/>
        </div>
        <div className='flex items-center justify-center pt-10'>
            <SendTokens/>
        </div>
    </div>
   
}
