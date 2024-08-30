import {  useWallet } from "@solana/wallet-adapter-react"
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Input({type, placeholder}: {type: string, placeholder: string}) {
    const wallet: any = useWallet()
    const { connection }: any = useConnection()

    async function getSol() {
        const amount: any = (document.getElementById("input") as HTMLInputElement).value 
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return <div>
        <input id="input" type={type} placeholder={placeholder} />
        <button  onClick={getSol}>Add Airdrop</button>
    </div>
}