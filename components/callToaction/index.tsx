"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

export default function CallToAction() {
  const benefits = [
    "Instant transactions on the Solana network",
    "Lower fees than traditional platforms",
    "Advanced security protocols",
    "Seamless dApp integrations"
  ];

  return (
    <div className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-950/70"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-green-600 to-green-800 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-indigo-600 rounded-3xl opacity-50 blur-xl"></div>

          <motion.div 
            className="relative bg-gradient-to-r from-black to-indigo-950 border border-white/10 rounded-3xl p-1 backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-green-900/40 to-indigo-900/40 rounded-2xl p-12 md:p-16 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-10 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full filter blur-3xl opacity-10 -ml-32 -mb-32"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-12 right-12 hidden lg:block"
                animate={{ 
                  y: [0, -15, 0], 
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <motion.span 
                    className="inline-block px-4 py-1 bg-gradient-to-r from-green-900 to-indigo-900 rounded-full text-sm font-medium text-green-400 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    GET STARTED TODAY
                  </motion.span>
                  
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Ready to SOLify Your Future?
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Join the thousands of users who&apos;ve simplified their Solana experience with SOLify.
                    Take control of your blockchain journey today.
                  </motion.p>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <div className="mt-1 min-w-6">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-300">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-center mb-4">
                      <span className="text-green-400 font-medium">EARLY ADOPTER SPECIAL</span>
                      <h3 className="text-2xl font-bold mt-1">Free Premium Features</h3>
                      <p className="text-gray-400 mt-2">Limited time offer for new users</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/40 to-indigo-900/40 p-4 rounded-lg mt-4">
                      <p className="text-sm text-center text-gray-300">
                        &quot;SOLify transformed how I interact with Solana. Everything is faster and simpler now!&quot;
                      </p>
                      <p className="text-sm text-center text-green-400 mt-2">— Alex K., Early Adopter</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/dashboard">
                    <Button className="px-10 py-6 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 text-lg font-bold group">
                      <span>Get Started with SOLify</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-gray-500 mt-4 text-sm">No credit card required</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
)}