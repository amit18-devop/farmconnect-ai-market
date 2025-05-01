
import { 
  Banknote,
  BarChart3,
  ShieldCheck, 
  Truck, 
  Search,
  Sprout,
  MessageSquare,
  CloudSun
} from "lucide-react";

const features = [
  {
    icon: <Banknote className="h-6 w-6 text-farm-600" />,
    title: "Fair Pricing",
    description: "Eliminate middlemen and ensure farmers receive fair market value for their produce."
  },
  {
    icon: <Search className="h-6 w-6 text-farm-600" />,
    title: "Easy Discovery",
    description: "Find specific products, farms, and quality levels with powerful search filters."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-farm-600" />,
    title: "AI Price Intelligence",
    description: "Get AI-powered price recommendations based on market demand and supply levels."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-farm-600" />,
    title: "Quality Verification",
    description: "Photo-based quality verification and ratings ensure you know what you're buying."
  },
  {
    icon: <Truck className="h-6 w-6 text-farm-600" />,
    title: "Delivery Options",
    description: "Choose from various delivery methods or arrange pickup directly from farms."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-farm-600" />,
    title: "Direct Communication",
    description: "Chat directly with farmers about their products, practices, and availability."
  },
  {
    icon: <Sprout className="h-6 w-6 text-farm-600" />,
    title: "Organic Options",
    description: "Easily find and verify organic and sustainably-grown produce options."
  },
  {
    icon: <CloudSun className="h-6 w-6 text-farm-600" />,
    title: "Weather Alerts",
    description: "Farmers receive timely weather alerts to protect crops and optimize harvests."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose FarmConnect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform brings innovation to agricultural commerce, 
            benefiting both farmers and buyers through technology and transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-farm-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
