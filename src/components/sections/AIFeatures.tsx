
import { CircleCheck, Brain, LineChart, ImagePlus, CloudRain, TruckDelivery } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI-Powered Price Recommendations",
      description: "Get market-driven price recommendations based on current supply, demand, and quality of your produce."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Market Trend Analysis",
      description: "Stay ahead with AI-powered forecasts of market trends and demand patterns for your crops."
    },
    {
      icon: <ImagePlus className="h-10 w-10 text-primary" />,
      title: "Image-Based Crop Quality Assessment",
      description: "Upload photos of your produce and get instant AI quality assessments to help with pricing."
    },
    {
      icon: <CloudRain className="h-10 w-10 text-primary" />,
      title: "Weather & Crop Advisories",
      description: "Receive personalized alerts about weather conditions and crop disease risks for your region."
    },
    {
      icon: <TruckDelivery className="h-10 w-10 text-primary" />,
      title: "Logistics Optimization",
      description: "Our AI finds the most efficient delivery routes and matches your produce with nearby buyers."
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-primary" />,
      title: "Multilingual Voice Support",
      description: "Low-literacy friendly voice interface in multiple regional languages to assist all farmers."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Farming Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KRUSHI leverages cutting-edge artificial intelligence to help farmers maximize profits and connect with the right buyers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
