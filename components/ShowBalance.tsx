"use client"

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function ShowBalance() {
    const {connection}: any = useConnection()
    const wallet = useWallet()
    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            (document.getElementById("id") as HTMLDivElement).innerHTML = (balance/1000000000).toString()
        }
    }
    getBalance();
    return <div>
        <p>SOL Balance: </p> <div id="id"></div>
    </div>
}