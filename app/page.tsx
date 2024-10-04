"use client"

import React, { useEffect,  useState } from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter()

  const {data : session}: any = useSession()

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return <div>
        {/* {session ? <>
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
        </div>} */}
        
        {session ? <div>
                <div className="grid grid-col-2">
                    <div className="flex items-center justify-center space-x-3">
                        <div>
                            <Button onClick={()=>{router.push("/sol-faucet")}}>Airdrop SOL</Button>
                        </div>
                        <div>
                            <Button onClick={()=>{router.push("/airdrop")}}>Airdrop Yourself</Button>
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-center space-x-3 pt-5">
                        <div>
                            <Button onClick={()=>{router.push("/show-balance")}}>Balance</Button>
                        </div>
                        <div>
                            <Button onClick={()=>{router.push("/send")}}>Send SOL</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3 pt-5">
                        <div>
                            <Button onClick={()=>{router.push("/sign-msg")}}>Sign Message</Button>
                        </div>
                    </div>
                </div>
            </div> : <div className='flex items-center justify-center mt-10'>
                <Button onClick={() => signIn()}>Sign in First</Button>
            </div>}
    </div>
}
