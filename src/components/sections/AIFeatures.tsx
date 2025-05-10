
import React from "react";
import { 
  Zap, 
  Truck, 
  BarChart3, 
  Users 
} from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-farm-600" />,
      title: "Smart Matching",
      description: "AI-powered algorithms connect farmers with buyers based on product needs, location, and pricing preferences."
    },
    {
      icon: <Truck className="h-10 w-10 text-farm-600" />,
      title: "Logistics Optimization",
      description: "Optimize delivery routes and reduce transportation costs with intelligent scheduling and coordination."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-farm-600" />,
      title: "Dynamic Pricing",
      description: "Get real-time price recommendations based on market trends, supply/demand, and seasonal factors."
    },
    {
      icon: <Users className="h-10 w-10 text-farm-600" />,
      title: "Community Insights",
      description: "Access shared knowledge from other farmers and buyers in your area to improve practices and profitability."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Agricultural Marketplace</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge technology transforms how farmers and buyers connect, enabling efficient,
            profitable, and sustainable agricultural commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
