"use client"

import React, { useEffect,  useState } from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { WalletCard } from '@/components/WalletCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter()

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }
    return <div>
        
         <div>
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
                    <WalletCard />
                </div>
            </div>
    </div>
}
