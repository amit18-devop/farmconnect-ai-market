
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Menu, 
  X, 
  ShoppingCart, 
  User,
  Tractor,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <Tractor size={24} className="text-farm-600" />
            <span className="text-lg font-bold text-farm-800">FarmConnect</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 mx-6 flex-1">
          <Link to="/" className="text-sm font-medium hover:text-farm-600 transition-colors">
            Home
          </Link>
          <Link to="/marketplace" className="text-sm font-medium hover:text-farm-600 transition-colors">
            Marketplace
          </Link>
          <Link to="/farmers" className="text-sm font-medium hover:text-farm-600 transition-colors">
            Farmers
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-farm-600 transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <div className="relative flex w-64">
              <Input 
                className="pr-10"
                placeholder="Search products..." 
              />
              <Button size="icon" variant="ghost" className="absolute right-0 top-0">
                <Search size={18} />
              </Button>
            </div>
          )}
          
          <Button size="icon" variant="ghost">
            <ShoppingCart size={20} />
          </Button>
          
          <Link to="/account">
            <Button size="icon" variant="ghost">
              <User size={20} />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 bg-background z-40 transition-transform transform",
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col p-4 space-y-4 border-b">
          <div className="relative flex w-full mb-4">
            <Input 
              className="pr-10 w-full"
              placeholder="Search products..." 
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0">
              <Search size={18} />
            </Button>
          </div>
          
          <Link to="/" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/marketplace" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
            Marketplace
          </Link>
          <Link to="/farmers" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
            Farmers
          </Link>
          <Link to="/about" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          
          <div className="pt-4 border-t">
            <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
              <User size={18} className="mr-2" /> Sign In / Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
