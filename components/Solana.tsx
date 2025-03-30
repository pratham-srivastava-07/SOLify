"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
  CoinbaseWalletAdapter,

  PhantomWalletAdapter,
  CloverWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css")

interface SolanaContextType {
  connected: boolean
  connecting: boolean
  setConnecting: (connecting: boolean) => void
  connectWallet: () => Promise<void>
  wallet: any
}

const SolanaContext = createContext<SolanaContextType | undefined>(undefined)

export const SolanaProvider = ({ children }: { children: React.ReactNode }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet

  const endpoint = clusterApiUrl(network)

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CloverWalletAdapter(),
      new SolflareWalletAdapter(),
      new CloverWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    [],
  )

  const { setVisible } = useWalletModal()
  const { connected, connect, disconnect, connecting, wallet } = useWallet()
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = useCallback(async () => {
    setIsConnecting(true)
    setVisible(true)
    try {
      await connect()
    } catch (error: any) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }, [connect, setVisible])

  const contextValue: SolanaContextType = {
    connected,
    connecting: isConnecting,
    setConnecting: setIsConnecting,
    connectWallet,
    wallet,
  }

  return <SolanaContext.Provider value={contextValue}>{children}</SolanaContext.Provider>
}

const useSolana = () => {
  const context = useContext(SolanaContext)
  if (!context) {
    throw new Error("useSolana must be used within a SolanaProvider")
  }
  return context
}

export { useSolana }

import type React from "react"
import { useMemo } from "react"

