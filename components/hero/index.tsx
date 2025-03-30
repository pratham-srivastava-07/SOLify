"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-700 rounded-full filter blur-3xl opacity-10"></div>
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-20 md:pt-36 md:pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Floating elements */}
          <motion.div 
            className="absolute -top-16 right-1/4"
            variants={floatingIconVariants}
            animate="animate"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg rotate-12 flex items-center justify-center shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-8 left-1/4"
            variants={floatingIconVariants}
            animate="animate"
            transition={{ 
              duration: 3.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-full rotate-45 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <div className="mb-8 md:mb-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-block">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 rounded-2xl filter blur-xl opacity-70"
                  variants={glowVariants}
                  animate="animate"
                ></motion.div>
                <h1 className="relative text-5xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text py-2 px-4">
                  SOLify
                </h1>
              </div>
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl md:text-3xl font-light text-indigo-300 mt-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Simplify Your Solana Experience
            </motion.p>
          </div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 md:mb-14 max-w-lg md:max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your blockchain journey with SOLify - where speed meets simplicity 
            on the Solana network. Experience the future of decentralized finance today.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-green-500 to-green-700 p-9 hover:from-green-600 hover:to-green-800 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 flex justify-center items-center gap-3 font-bold text-base sm:text-lg group">
                <span>Launch SOLify</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <button className="w-full sm:w-auto px-8 py-5 bg-transparent border-2  border-green-500/50 hover:border-green-400 rounded-xl hover:bg-green-900/30 transition-all duration-300 text-base sm:text-lg font-semibold backdrop-blur-sm">
              Explore Features
            </button>
          </motion.div>

          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="px-6 py-2 bg-indigo-900/50 rounded-full backdrop-blur-md border border-indigo-700/50">
              <p className="text-sm text-indigo-300 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Over 10,000+ active users trust SOLify
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}