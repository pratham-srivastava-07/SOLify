"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-indigo-400 text-transparent bg-clip-text">
              SOLify
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-300 mt-2">
              Simplify Your Solana Experience
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-lg md:max-w-2xl mx-auto">
            Transform your blockchain journey with SOLify - where speed meets simplicity on the Solana network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex justify-center items-center gap-2 font-semibold text-base sm:text-lg">
                Launch SOLify
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-green-400 rounded-lg hover:bg-green-900/50 transition-colors text-base sm:text-lg">
              Explore Features
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
