export default function Stats() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-6 bg-green-900/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">100K+</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">SOLify Users</p>
          </div>
          <div className="p-6 bg-green-900/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">$10M+</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">SOL Volume</p>
          </div>
          <div className="p-6 bg-green-900/20 rounded-xl backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">1M+</h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
