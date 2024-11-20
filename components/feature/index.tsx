interface FeatureCardProps {
    title: string;
    description: string;
    color: string;
  }
  
  export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, color }) => {
    return (
      <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${color} text-white`}>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
          {/* Placeholder for Icon */}
          <span className="text-2xl font-bold text-gray-800">⚡</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    );
  };
  
  
  