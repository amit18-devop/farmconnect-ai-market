
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Tractor
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-farm-50 border-t">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tractor size={24} className="text-farm-600" />
              <span className="text-xl font-bold text-farm-800">FarmConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting farmers and buyers directly, eliminating middlemen and ensuring fair market value.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-farm-100">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-farm-100">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-farm-100">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-farm-100">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-farm-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-farm-600 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="hover:text-farm-600 transition-colors">
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-farm-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-farm-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/for-farmers" className="hover:text-farm-600 transition-colors">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link to="/for-buyers" className="hover:text-farm-600 transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-farm-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/ai-tools" className="hover:text-farm-600 transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-farm-600 transition-colors">
                  Delivery Options
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-farm-600 flex-shrink-0" />
                <span>123 Farm Way, Agricultural District, Country</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-farm-600 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-farm-600 flex-shrink-0" />
                <span>contact@farmconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-farm-100 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-farm-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-farm-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
