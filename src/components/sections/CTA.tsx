
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Tractor } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-farm-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join the FarmConnect Community</h2>
            <p className="text-farm-50 mb-8">
              Whether you're a farmer looking for better market access or a buyer seeking 
              fresh, quality produce, FarmConnect has you covered.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/for-farmers">
                <div className="bg-farm-700 hover:bg-farm-800 p-6 rounded-lg transition-colors">
                  <div className="flex items-center mb-4">
                    <Tractor className="mr-3" />
                    <h3 className="text-xl font-semibold">For Farmers</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-farm-100">
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      List your products for direct sales
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Receive AI-powered pricing recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Access market analytics and trends
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Connect with a variety of buyers
                    </li>
                  </ul>
                  
                  <Button variant="secondary" className="mt-6 w-full">
                    Register as Farmer 
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Link>
              
              <Link to="/for-buyers">
                <div className="bg-farm-700 hover:bg-farm-800 p-6 rounded-lg transition-colors">
                  <div className="flex items-center mb-4">
                    <Users className="mr-3" />
                    <h3 className="text-xl font-semibold">For Buyers</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-farm-100">
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Source farm-fresh products directly
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Verify product quality and origin
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Negotiate directly with farmers
                    </li>
                    <li className="flex items-start">
                      <span className="text-farm-300 mr-2">✓</span>
                      Support sustainable local agriculture
                    </li>
                  </ul>
                  
                  <Button variant="secondary" className="mt-6 w-full">
                    Register as Buyer 
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="lg:order-first">
            <img 
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1000&auto=format&fit=crop"
              alt="Farmers and buyers connecting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
