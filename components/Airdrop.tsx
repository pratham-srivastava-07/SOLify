"use client"

import { useState } from 'react';
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { Button } from './ui/button';  


export default function Airdrop() {
    const [recipient, setRecipient] = useState('')
    const {connection} = useConnection()
    
    async function handleClick() {
        try {
            setRecipient((document.getElementById("address") as HTMLDivElement).innerHTML);

            if(!recipient) throw new Error("Not valid address");
            const publicKey = new PublicKey(recipient);

            const amount : any = (document.getElementById("input") as HTMLInputElement).value
            const sign =  await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);


            alert("Airdrop successful! 1 SOL sent to " + recipient)
        } catch(e) {
            alert(e)
        }
    }
    
    return <div>
       <input type="text" className='address ' />
       <input type="text" name="" id="input" />
       <div className="ml-6">
            <Button variant={"outline"} className="p-4" onClick={handleClick}>Add Airdrop</Button>
        </div>
    </div>
}