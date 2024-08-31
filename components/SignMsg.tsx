"use client"

import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';
import Input from './Input';
import { Button } from './ui/button';
import { endianness } from 'os';

export default function SignMsg() {
    const {publicKey, privateKey, signMessage}: any = useWallet()
   async function handler() {
        

        if(!publicKey) throw new Error("Wallet not connected");
        // if(!privateKey) throw new Error("Wallet not available");

        const message = (document.getElementById("id") as HTMLInputElement).value
        const encodedMessage = new TextEncoder().encode(message);
       

       try {
            const sign = await signMessage(encodedMessage);
            if(ed25519.verify(sign, encodedMessage, privateKey.toBase58())) {throw new Error("Could not sign message");}

            alert("Message signed successfully")
       } catch(e: any) {
            alert(e)
            // console.log("error", e);
       }
   }
    return <div className='fleex items-center justify-center space-x-3'>
        <div className='p-4'>
            <input id="id" type='text' placeholder='Sign'/>
        </div>
        <div>
            <Button onClick={handler}>Sign Message</Button>
        </div>
    </div>
    
}