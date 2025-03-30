"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Zap, RefreshCw, Wallet, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "SOLify leverages Solana's speed for instant transactions that complete in milliseconds.",
      color: "from-green-400 to-green-600",
      delay: 0
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your assets are protected with military-grade encryption and multi-layered security protocols.",
      color: "from-blue-400 to-blue-600",
      delay: 0.1
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 support and continuous platform availability ensure you're never left waiting.",
      color: "from-indigo-400 to-indigo-600",
      delay: 0.2
    },
    {
      icon: RefreshCw,
      title: "Seamless Integration",
      description: "Connect with any Solana dApp or service with just a single click.",
      color: "from-purple-400 to-purple-600",
      delay: 0.3
    },
    {
      icon: Wallet,
      title: "Smart Wallet",
      description: "AI-powered wallet recommendations to optimize your asset management.",
      color: "from-pink-400 to-pink-600",
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights into market trends and your portfolio performance.",
      color: "from-orange-400 to-orange-600",
      delay: 0.5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-950/50 to-transparent opacity-80"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-600 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-900 to-indigo-900 rounded-full text-sm font-medium text-green-400 mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-6">
            Why Choose SOLify
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Experience the next generation of Solana tools designed to maximize your blockchain potential.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              transition={{ delay: feature.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-indigo-900/50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 -z-10"></div>
              <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 h-full overflow-hidden group-hover:border-green-500/30 transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-indigo-500/10 rounded-full blur-xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-green-500/10 rounded-full blur-xl -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}