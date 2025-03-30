"use client";

import { motion } from "framer-motion";
import { Users, Activity, Globe, ChevronUp } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Active Users",
      description: "Trusted by over 100,000 users globally",
      color: "from-green-400 to-green-600",
      growth: "+27%",
      delay: 0
    },
    {
      icon: Activity,
      value: "$2.4B",
      label: "Transactions",
      description: "Total value processed on our platform",
      color: "from-blue-400 to-blue-600",
      growth: "+43%",
      delay: 0.1
    },
    {
      icon: Globe,
      value: "0.2s",
      label: "Avg. Speed",
      description: "Lightning fast transaction confirmation",
      color: "from-indigo-400 to-indigo-600",
      growth: "-15%",
      delay: 0.2
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 w-96 h-96 bg-green-600/10 rounded-full filter blur-3xl opacity-30 -top-48"></div>
        <div className="absolute right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl opacity-30 -bottom-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-900 to-indigo-900 rounded-full text-sm font-medium text-green-400 mb-4">
            PROVEN PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-6">
            SOLify by the Numbers
          </h2>
          <p className="text-gray-400 text-lg">
            Our platform continues to set industry benchmarks for speed, adoption, and volume
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-indigo-900/30 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 -z-10"></div>
              <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 h-full group-hover:border-green-500/30 transition-all duration-300">
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/5 to-indigo-500/5 rounded-full blur-xl -mr-16 -mt-16"></div>

                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center bg-black/30 px-3 py-1 rounded-full border border-white/10">
                    <ChevronUp className={`w-3 h-3 ${stat.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'} mr-1`} />
                    <span className={`text-xs font-medium ${stat.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.growth}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</h3>
                  <p className="text-gray-500">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
