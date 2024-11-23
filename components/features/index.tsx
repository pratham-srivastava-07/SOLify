import { Clock, Shield, Zap } from "lucide-react";

export default function Features() {
    return <div>
        <div className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose SOLify</h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-300">SOLify leverages Solana`&apos;`s speed for instant transactions.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Bank-Grade Security</h3>
            <p className="text-gray-300">Your assets are protected with military-grade encryption.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Always Available</h3>
            <p className="text-gray-300">24/7 support and continuous platform availability.</p>
          </div>
        </div>
      </div>
    </div>
}