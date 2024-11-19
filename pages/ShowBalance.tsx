import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {

            const balance = await connection.getBalance(wallet.publicKey);
           (document.getElementById("balance") as HTMLDivElement).innerHTML = (balance / LAMPORTS_PER_SOL).toString();
        }
    }
    
    getBalance();
    return <div>
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}