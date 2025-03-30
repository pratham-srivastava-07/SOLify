"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Wallet, SendHorizontal, FileSignature, Download, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { WalletCard } from "@/components/WalletCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ParticleBackground } from "@/components/Particle";

type CardOption = {
  title: string;
  description: string;
  action: () => void;
  icon: JSX.Element;
  color: string;
  gradient: string;
};

export default function Main() {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const cardOptions: CardOption[] = [
    {
      title: "Airdrop SOL",
      description: "Request SOL from the Solana faucet to get started with your journey.",
      action: () => router.push("/sol-faucet"),
      icon: <Download className="w-6 h-6" />, 
      color: "#8B5CF6",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "Airdrop Yourself",
      description: "Quickly airdrop SOL directly to your connected wallet address.",
      action: () => router.push("/airdrop"),
      icon: <Wallet className="w-6 h-6" />, 
      color: "#3B82F6",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Send SOL",
      description: "Transfer SOL tokens securely to any other Solana wallet address.",
      action: () => router.push("/send"),
      icon: <SendHorizontal className="w-6 h-6" />, 
      color: "#10B981",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Sign Message",
      description: "Cryptographically sign a message to verify your wallet ownership.",
      action: () => router.push("/sign-msg"),
      icon: <FileSignature className="w-6 h-6" />, 
      color: "#F59E0B",
      gradient: "from-orange-600 to-amber-600"
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <ParticleBackground />
      
      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          <motion.div 
            className="text-center space-y-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <GradientHeading text="SOLify Dashboard" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center space-x-2"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Manage your SOL tokens with ease
              </p>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2,
                  repeatDelay: 3
                }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <WalletCard className="shadow-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.2
                }
              }
            }}
          >
            {cardOptions.map((option, index) => (
              <AnimatedCard key={index} option={option} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

type AnimatedCardProps = {
  option: CardOption;
  index: number;
};

function AnimatedCard({ option, index }: AnimatedCardProps) {
  return (
    <motion.div>
      <Card>
        <CardHeader>
          <CardTitle>{option.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{option.description}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={option.action}>{option.title}</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Animated gradient heading component
function GradientHeading({ text }: {text: string}) {
  return (
    <motion.h1 
      className="text-4xl font-bold relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 animate-gradient-x">
        {text}
      </span>
      <motion.span 
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.h1>
  );
}
