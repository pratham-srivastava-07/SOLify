"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function Hero() {
    return <div>
        <div className="container mx-auto px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-green-400 to-indigo-400 text-transparent bg-clip-text">
              SOLify
            </h1>
            <p className="text-2xl text-indigo-300 mt-2">Simplify Your Solana Experience</p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your blockchain journey with SOLify - where speed meets simplicity on the Solana network.
          </p>
          <div className="flex justify-center gap-6">
            <Link href={"/main"}>
                <Button className="px-8 py-6 bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex font-semibold items-center gap-2">
                    Launch SOLify
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </Link>
            <button className="px-8 py-3 border border-green-400 rounded-lg hover:bg-green-900/50 transition-colors">
              Explore Features
            </button>
          </div>
        </motion.div>
      </div>
    </div>
}