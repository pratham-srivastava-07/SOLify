import { Clock, Shield, Zap } from "lucide-react";

export default function Features() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Why Choose SOLify
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              SOLify leverages Solana&apos;s speed for instant transactions.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Bank-Grade Security</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Your assets are protected with military-grade encryption.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Always Available</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              24/7 support and continuous platform availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
