"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export default function Airdrop() {
  const { connection } = useConnection();

  async function handleClick() {
    try {
      const recipientAddress = (
        document.getElementById("address") as HTMLInputElement
      ).value;
      const amountStr = (
        document.getElementById("input") as HTMLInputElement
      ).value;

      const amount = parseFloat(amountStr);

      if (!recipientAddress)
        throw new Error("Please enter a valid Solana address.");
      if (isNaN(amount) || amount <= 0)
        throw new Error("Please enter a valid amount.");

      const lamports = Math.floor(amount * LAMPORTS_PER_SOL);

      const publicKey = new PublicKey(recipientAddress);

      // Request airdrop
      await connection.requestAirdrop(publicKey, lamports);

      alert(`Airdrop successful! ${amount} SOL sent to ${recipientAddress}`);
    } catch (e: any) {
      alert(`Airdrop failed: ${e.message}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700 backdrop-blur-sm border-0 shadow-md w-full max-w-lg">
        <CardHeader className="bg-gradient-to-br from-blue-900 to-purple-600 text-white p-6 rounded-t-md">
          <div className="flex flex-col items-start">
            <CardTitle className="text-2xl font-bold">
              Empower with SOLify
            </CardTitle>
            <p className="text-sm font-medium mt-2 text-gray-200">
              Instantly access free SOL tokens on the testnet to experiment, build, and innovate.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Recipient Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter recipient's address"
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Provide a valid Solana wallet address where the airdrop will be sent.
            </p>
          </div>
          <div>
            <label
              htmlFor="input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Amount (SOL)
            </label>
            <input
              type="text"
              id="input"
              placeholder="Enter amount"
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Specify the amount of SOL to request (e.g., 0.1, 1, 10).
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity"
            onClick={handleClick}
          >
            Receive Solana
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        ⚠️ <strong>Testnet Only:</strong> This tool is designed for Solana testnet usage. Ensure that you use this for development purposes only.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Build fearlessly. Experiment freely. The testnet is your playground. 🚀
      </p>
    </div>
  );
}
