// "use client";

// import { Button } from "@/components/ui/button";
// import { WalletCard } from "@/components/WalletCard";
// import { useRouter } from "next/navigation";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Main() {
//   const router = useRouter();

//   const cardOptions = [
//     {
//       title: "Airdrop SOL",
//       description: "Request SOL from the Solana faucet.",
//       action: () => router.push("/sol-faucet"),
//     },
//     {
//       title: "Airdrop Yourself",
//       description: "Airdrop SOL directly to your wallet.",
//       action: () => router.push("/airdrop"),
//     },
//     {
//       title: "Send SOL",
//       description: "Transfer SOL to another wallet.",
//       action: () => router.push("/send"),
//     },
//     {
//       title: "Sign Message",
//       description: "Sign a message using your wallet.",
//       action: () => router.push("/sign-msg"),
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center space-y-6">
//       {/* Render WalletCard */}
//       <WalletCard className="max-w-md w-full" />

//       {/* Render Other Card Options */}
//       <div className="grid grid-cols-1 gap-6 w-full max-w-md">
//         {cardOptions.map((option, index) => (
//           <Card
//             key={index}
//             className="hover:shadow-lg transition-shadow duration-200"
//           >
//             <CardHeader>
//               <CardTitle>{option.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">
//                 {option.description}
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 className="w-full"
//                 onClick={option.action}
//               >
//                 {option.title}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { WalletCard } from "@/components/WalletCard";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Wallet, 
  SendHorizontal, 
  FileSignature, 
  Download 
} from "lucide-react";

export default function Main() {
  const router = useRouter();

  const cardOptions = [
    {
      title: "Airdrop SOL",
      description: "Request SOL from the Solana faucet to get started with your journey.",
      action: () => router.push("/sol-faucet"),
      icon: <Download className="w-6 h-6 text-purple-500" />,
      gradient: "from-purple-500/10 to-purple-500/5"
    },
    {
      title: "Airdrop Yourself",
      description: "Quickly airdrop SOL directly to your connected wallet address.",
      action: () => router.push("/airdrop"),
      icon: <Wallet className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-500/10 to-blue-500/5"
    },
    {
      title: "Send SOL",
      description: "Transfer SOL tokens securely to any other Solana wallet address.",
      action: () => router.push("/send"),
      icon: <SendHorizontal className="w-6 h-6 text-green-500" />,
      gradient: "from-green-500/10 to-green-500/5"
    },
    {
      title: "Sign Message",
      description: "Cryptographically sign a message to verify your wallet ownership.",
      action: () => router.push("/sign-msg"),
      icon: <FileSignature className="w-6 h-6 text-orange-500" />,
      gradient: "from-orange-500/10 to-orange-500/5"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            SOLify Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your SOL tokens with ease
          </p>
        </div>

        {/* Wallet Card */}
        <WalletCard className="w-full max-w-md shadow-xl" />

        {/* Card Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
          {cardOptions.map((option, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-md"
            >
              <CardHeader className={`bg-gradient-to-br ${option.gradient} p-6`}>
                <div className="flex items-center space-x-4">
                  {option.icon}
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {option.description}
                </p>
              </CardContent>
              <CardFooter className="pb-6">
                <Button
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 hover:opacity-90 transition-opacity text-white shadow-lg group-hover:shadow-xl"
                  onClick={option.action}
                >
                  {option.title}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}