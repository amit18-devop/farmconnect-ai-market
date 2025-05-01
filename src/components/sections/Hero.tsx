
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-farm-50 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-25">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" className="text-farm-200 fill-current"></circle>
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#pattern)"></rect>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-farm-900 leading-tight">
              Connecting Farmers 
              <span className="text-farm-600 block"> Directly to Buyers</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              FarmConnect eliminates middlemen, ensuring farmers get fair market value 
              while buyers receive fresher produce at better prices.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/marketplace">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/for-farmers">
                  Join as Farmer
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="h-10 w-10 rounded-full bg-farm-100 flex items-center justify-center mb-2">
                  <Sprout className="h-5 w-5 text-farm-600" />
                </div>
                <p className="font-medium">100+ Farms</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="h-10 w-10 rounded-full bg-farm-100 flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-farm-600" />
                </div>
                <p className="font-medium">5,000+ Users</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="h-10 w-10 rounded-full bg-farm-100 flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-farm-600" />
                </div>
                <p className="font-medium">30% Better Prices</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
              alt="Farmer with fresh produce"
              className="rounded-lg shadow-xl max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=100&auto=format&fit=crop"
                    alt="Farmer profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">John's Family Farm</h3>
                  <p className="text-sm text-muted-foreground">Organic Vegetables</p>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        className="h-4 w-4 text-yellow-400 fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
