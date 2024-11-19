import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export default function SendTokens() {
    
    const {connection} = useConnection()
    const wallet = useWallet()


    async function sendToken() {

        const to: any = (document.getElementById("to") as HTMLInputElement).value;
        const amount: any = (document.getElementById("amount") as HTMLInputElement).value;

        if(!to || isNaN(amount)) {
            alert("Please enter a valid address and amount.");
            return;
        }

        if (!wallet.publicKey) {
            alert("Wallet not connected!");
            return;
        }

        const transaction: any = new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }))

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div>
         <input id="to" type="text" placeholder="To" />
         <input id="amount" type="text" placeholder="Amount" />
         <button onClick={sendToken}>Send SOL</button>
    </div>
}