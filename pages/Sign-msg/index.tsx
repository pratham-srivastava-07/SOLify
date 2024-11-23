"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignMsg() {
  const { publicKey, signMessage }: any = useWallet();

  async function handler() {
    try {
      if (!publicKey) throw new Error("Wallet not connected");

      const message = (document.getElementById("id") as HTMLInputElement)
        .value;
      const encodedMessage = new TextEncoder().encode(message);

      const signature = await signMessage(encodedMessage);
      alert(
        "Message signed successfully. Signature: " +
          Buffer.from(signature).toString("base64")
      );
    } catch (error: any) {
      alert("Error signing message: " + error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700 backdrop-blur-sm border-0 shadow-md w-full max-w-lg">
        <CardHeader className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-6 rounded-t-md">
          <div className="flex flex-col items-start">
            <CardTitle className="text-2xl font-bold">Sign a Message</CardTitle>
            <p className="text-sm font-medium mt-2 text-gray-200">
              Use your Solana wallet to sign messages for authentication or
              validation purposes.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This tool allows you to sign any message securely using your Solana
            wallet. Simply enter your message, and your wallet will sign it for
            you.
          </p>
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message to Sign
            </label>
            <input
              id="id"
              type="text"
              placeholder="Enter message here"
              className="w-full mt-2 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity"
            onClick={handler}
          >
            Sign Message
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Note: Signing a message proves ownership of your Solana wallet. Make
        sure to only sign messages from trusted sources.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Secure and private signing for your decentralized applications.
      </p>
    </div>
  );
}
