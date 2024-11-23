"use client"
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "solana",    // Solana
    "ethereum",  // Ethereum
    "usdc",      // USD Coin
    "usdt",      // Tether
    "polkadot",  // Polkadot
    "bnb",       // Binance Coin
    "ada",       // Cardano
    "matic",     // Polygon
    "dogecoin",  // Dogecoin
    "shib",      // Shiba Inu
    "ltc",       // Litecoin
    "avax",      // Avalanche
    "uni",       // Uniswap
    "chainlink", // Chainlink
    "atom",      // Cosmos
    "near",      // Near Protocol
    "xlm",       // Stellar
    "tron",      // Tron
    "filecoin",  // Filecoin
  ];

export default function IconCloudComponent() {
    return <div>
        <div className="container mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-8">Powered by Modern Tech Stack</h2>
            <p className="text-center text-gray-300 mb-12">Built with industry-leading technologies for reliability and performance</p>
            <div className="flex justify-center">
                <div className="relative w-full max-w-4xl p-12 backdrop-blur-sm">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
      </div>
    </div>
}