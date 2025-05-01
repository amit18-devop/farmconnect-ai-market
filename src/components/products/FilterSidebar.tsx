
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, RefreshCw } from "lucide-react";

interface FilterSidebarProps {
  onFilter: (filters: any) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterSidebar = ({ onFilter, isMobile = false, onClose }: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [categories, setCategories] = useState<string[]>([]);
  const [location, setLocation] = useState<string>("");
  const [organic, setOrganic] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  
  const handleCategoryChange = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handleFilterSubmit = () => {
    onFilter({
      price: priceRange,
      categories,
      location,
      organic,
      rating,
    });
    
    if (isMobile && onClose) {
      onClose();
    }
  };

  const handleReset = () => {
    setPriceRange([0, 100]);
    setCategories([]);
    setLocation("");
    setOrganic(false);
    setRating(0);
    
    onFilter({
      price: [0, 100],
      categories: [],
      location: "",
      organic: false,
      rating: 0,
    });
  };

  return (
    <div className={`${isMobile ? 'p-4' : 'p-2'}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleReset}
          className="text-xs flex items-center"
        >
          <RefreshCw size={14} className="mr-1" />
          Reset
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={["categories", "price", "location"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Vegetables", "Fruits", "Dairy", "Grains", "Meat", "Herbs"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="pt-4 px-2">
                <Slider
                  value={priceRange}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={setPriceRange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="w-20">
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    min={0}
                    max={priceRange[1]}
                  />
                </div>
                <span>-</span>
                <div className="w-20">
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    min={priceRange[0]}
                    max={100}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <Input
              placeholder="Search by location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="rating">
          <AccordionTrigger>Minimum Rating</AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <Button
                  key={value}
                  type="button"
                  variant={rating >= value ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setRating(value)}
                >
                  {value}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="organic"
                  checked={organic}
                  onCheckedChange={(checked) => setOrganic(checked === true)}
                />
                <Label htmlFor="organic">Organic Products</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="ai-recommended"
                  // Add more checkbox state here for additional filters
                />
                <Label htmlFor="ai-recommended">AI Recommended</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        className="w-full mt-6"
        onClick={handleFilterSubmit}
      >
        <CheckIcon size={16} className="mr-2" />
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
