import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  // Fetch balance whenever the wallet is connected or publicKey changes
  useEffect(() => {
    async function fetchBalance() {
      if (wallet.connected && wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error("Failed to fetch balance:", error);
        }
      } else {
        setBalance(null); // Reset balance if wallet is disconnected
      }
    }

    fetchBalance();
  }, [wallet.connected, wallet.publicKey, connection]);

  return (
    <div>
      <p className="text-sm font-medium leading-none">SOL Balance:</p>
      <p className="text-lg font-bold">{balance !== null ? `${balance} SOL` : "Not Connected"}</p>
    </div>
  );
}
