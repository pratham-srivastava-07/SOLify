"use client"

import React, { useEffect, useState } from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import Input from '@/components/ownAirdrop';
import Main from '@/components/Main';
import SignMsg from '@/components/SignMsg';
import SendTokens from '@/components/SendTokens';
import ShowBalance from '@/components/ShowBalance';
import Airdrop from '@/components/Airdrop';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const {data : session}: any = useSession()

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return <div>
        <div>
             <div>
          <Main/>
          <Input placeholder='airdrop' type='text'/>
        </div>
        </div>
        {/* <div className='flex items-center justify-center'>
            <WalletCard/>
        </div> */}
        <div className="flex items-center justify-center">
            <SignMsg />
        </div>
       <div className='flex items-center justify-center'>
        
        { session ? <div className="flex items-center justify-center mt-10">
            <Airdrop />
        </div>: <div>
                <Button onClick={() => signIn()}>Sign in first</Button>
            </div>}
       </div>
        <div className='flex items-center justify-center pt-10'>
            <ShowBalance/>
        </div>
        <div className='flex items-center justify-center pt-10'>
            <SendTokens/>
        </div>
        <div>
            {session && <div className="flex items-center justify-center">
            <Button onClick={() => signOut()}>Signout</Button>
        </div>}
        </div>
    </div>
   
}
