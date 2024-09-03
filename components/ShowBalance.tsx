"use client"

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function ShowBalance() {
    const [balance, setBalance] = useState<number | null>(null);
    const {connection}: any = useConnection()
    const wallet = useWallet()
   
    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
             (document.getElementById("id") as HTMLDivElement).innerHTML = (balance/1000000000).toString();

        }
    }
    getBalance()
    return <div className="flex space-x-3">
        <p>SOL Balance: </p> <div id="id"></div>
    </div>
}