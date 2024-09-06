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
        {session ? <>
            <div>
             <div>
          <Input placeholder='airdrop' type='text'/>
        </div>
        </div>
        <div className="flex items-center justify-center">
            <SignMsg />
        </div>
       <div className='flex items-center justify-center'>
         <div className="flex items-center justify-center mt-10">
            <Airdrop />
        </div>
       </div>
        <div className='flex items-center justify-center pt-10'>
            <ShowBalance/>
        </div>
        <div className='flex items-center justify-center pt-10'>
            <SendTokens/>
        </div>
        </> : <div className='flex items-center justify-center mt-10'>
                <Button onClick={() => signIn()}>Sign in First</Button>
            </div>}
        {session && <div className='flex items-center justify-center mt-10'>
            <Button onClick={() => signOut()}>Log Out</Button>
        </div>}
    </div>
}
