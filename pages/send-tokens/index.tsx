"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SendTokens() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function sendToken() {
    const to: any = (document.getElementById("to") as HTMLInputElement).value;
    const amount: any = (document.getElementById("amount") as HTMLInputElement).value;

    if (!to || isNaN(amount)) {
      alert("Please enter a valid address and amount.");
      return;
    }

    if (!wallet.publicKey) {
      alert("Wallet not connected!");
      return;
    }

    const transaction: any = new Transaction();

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700 backdrop-blur-sm border-0 shadow-md w-full max-w-lg">
        <CardHeader className="bg-gradient-to-br from-green-400 to-indigo-400 text-white p-6 rounded-t-md">
          <div className="flex flex-col items-start">
            <CardTitle className="text-2xl font-bold">Send Tokens using SOLify</CardTitle>
            <p className="text-sm font-medium mt-2 text-gray-200">
              Transfer SOL tokens to any Solana address instantly for any purpose.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Use this tool to send SOL tokens to any recipient. Enter the recipient`&apos;`s address and the amount of SOL to send.
          </p>
          <div>
            <label
              htmlFor="to"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Recipient Address
            </label>
            <input
              id="to"
              type="text"
              placeholder="Enter recipient's address"
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Amount (SOL)
            </label>
            <input
              id="amount"
              type="text"
              placeholder="Enter amount"
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            className="w-full bg-gradient-to-r from-green-400 to-indigo-400 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity"
            onClick={sendToken}
          >
            Send SOL
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Note: Ensure that the recipient`&apos;`s address is correct before proceeding with the transfer.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Transfer tokens quickly and securely within the Solana network. 🌐
      </p>
    </div>
  );
}
