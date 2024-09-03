"use client"

import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from './ui/button';

export default function SignMsg() {
    const { publicKey, signMessage }: any = useWallet();

    async function handler() {
        try {
            if (!publicKey) throw new Error("Wallet not connected");

            const message = (document.getElementById("id") as HTMLInputElement).value;
            const encodedMessage = new TextEncoder().encode(message);

            const signature = await signMessage(encodedMessage);
            alert("Message signed successfully. Signature: " + Buffer.from(signature).toString('base64'));
        } catch (error: any) {
            alert("Error signing message: " + error.message);
        }
    }

    return (
        <div className='flex items-center justify-center space-x-3'>
            <div className='p-4'>
                <input id="id" type='text' placeholder='Sign' />
            </div>
            <div>
                <Button onClick={handler}>Sign Message</Button>
            </div>
        </div>
    );
}
