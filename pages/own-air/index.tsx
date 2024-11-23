"use client"

import {  useWallet } from "@solana/wallet-adapter-react"
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "@/components/ui/button";

export default function OwnAirdrop({type, placeholder}: {type: string, placeholder: string}) {
    const wallet: any = useWallet()
    const { connection }: any = useConnection()

    async function getSol() {
        const amount: any = (document.getElementById("input") as HTMLInputElement).value 
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return <div className="flex justify-center items-center space-x-3">
        <input id="input" className="p-3" type={type} placeholder={placeholder} />
        <div className="ml-6">
            <Button variant={"outline"} className="p-4" onClick={getSol}>Add Airdrop</Button>
        </div>
    </div>
}