"use client"


import { Button } from "@/components/ui/button";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
  

export default function Airdrop() {
    const { connection } = useConnection();
    
    async function handleClick() {
        try {
            
            const recipientAddress = (document.getElementById("address") as HTMLInputElement).value;
            const amountStr = (document.getElementById("input") as HTMLInputElement).value;

            
            const amount = parseFloat(amountStr);

            if (!recipientAddress) throw new Error("Please enter a valid Solana address.");
           
            const lamports = Math.floor(amount * LAMPORTS_PER_SOL)
            

            const publicKey = new PublicKey(recipientAddress);

            // Request airdrop
            const signature = await connection.requestAirdrop(publicKey, lamports);

            alert(`Airdrop successful! ${amount} SOL sent to ${recipientAddress}`);
        } catch (e: any) {
            alert(`Airdrop failed: ${e.message}`);
        }
    }
    
    return (
        <div>
            <input 
                type="text" 
                id="address" 
                placeholder="Enter recipient's address" 
                className="p-2 border rounded mb-2" 
            />
            <input 
                type="text" 
                id="input" 
                placeholder="Enter amount" 
                className="p-2 border rounded mb-2" 
            />
            <div className="ml-6 flex justify-center pt-4">
                <Button variant={"outline"} className="p-4" onClick={handleClick}>
                    Receive Solana
                </Button>
            </div>
        </div>
    );
}
