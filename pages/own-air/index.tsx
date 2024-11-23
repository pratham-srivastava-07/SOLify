"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OwnAirdrop({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  const wallet: any = useWallet();
  const { connection }: any = useConnection();

  async function getSol() {
    try {
      const amount: any = (document.getElementById("input") as HTMLInputElement)
        .value;

      if (!wallet.publicKey) {
        alert("Please connect your wallet first!");
        return;
      }

      if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
      alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
    } catch (error: any) {
      alert(`Airdrop failed: ${error.message}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700 backdrop-blur-sm border-0 shadow-md w-full max-w-lg">
        <CardHeader className="bg-gradient-to-br from-blue-900 to-purple-600 text-white p-6 rounded-t-md">
          <div className="flex flex-col items-start">
            <CardTitle className="text-2xl font-bold">
              Wallet Airdrop Tool
            </CardTitle>
            <p className="text-sm font-medium mt-2 text-gray-200">
              Easily request SOL tokens for your connected wallet to kickstart your Solana journey.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            With this tool, you can request an airdrop of SOL tokens to your connected wallet for development or testing purposes.
          </p>
          <div>
            <label
              htmlFor="input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Amount (SOL)
            </label>
            <input
              id="input"
              type={type}
              placeholder={placeholder}
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Enter the amount of SOL you want to airdrop to your connected wallet.
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            className="w-full bg-gradient-to-r from-blue-900 to-purple-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity"
            onClick={getSol}
          >
            Add Airdrop
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Note: Ensure your wallet is connected and you’re operating on the testnet for airdrops.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Start building and experimenting with Solana's powerful ecosystem. 🚀
      </p>
    </div>
  );
}
