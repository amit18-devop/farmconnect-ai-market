
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/products/ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    image: "https://images.unsplash.com/photo-1592924357228-91b9bb6b5b42?q=80&w=600&auto=format&fit=crop",
    category: "Vegetables",
    price: 2.99,
    unit: "lb",
    rating: 4.7,
    farmName: "Green Valley Farm",
    location: "Springfield County",
    organic: true,
    recommended: true
  },
  {
    id: "2",
    name: "Golden Honey",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=600&auto=format&fit=crop",
    category: "Specialty",
    price: 8.99,
    unit: "jar",
    rating: 4.9,
    farmName: "Hillside Apiaries",
    location: "Mountain Region"
  },
  {
    id: "3",
    name: "Fresh Strawberries",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=600&auto=format&fit=crop",
    category: "Fruits",
    price: 4.49,
    unit: "basket",
    rating: 4.5,
    farmName: "Berry Good Farm",
    location: "Riverside County",
    recommended: true
  },
  {
    id: "4",
    name: "Organic Kale Bunch",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=600&auto=format&fit=crop",
    category: "Vegetables",
    price: 3.29,
    unit: "bunch",
    rating: 4.3,
    farmName: "Green Valley Farm",
    location: "Springfield County",
    organic: true
  },
  {
    id: "5",
    name: "Fresh Farm Eggs",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=600&auto=format&fit=crop",
    category: "Dairy",
    price: 5.99,
    unit: "dozen",
    rating: 4.8,
    farmName: "Happy Hen Farm",
    location: "Eastland Village"
  },
  {
    id: "6",
    name: "Artisan Goat Cheese",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
    category: "Dairy",
    price: 6.99,
    unit: "8oz",
    rating: 4.6,
    farmName: "Mountain Dairy",
    location: "North Hills"
  },
  {
    id: "7",
    name: "Fresh Basil",
    image: "https://images.unsplash.com/photo-1600512134534-5619582f40e0?q=80&w=600&auto=format&fit=crop",
    category: "Herbs",
    price: 2.49,
    unit: "bunch",
    rating: 4.2,
    farmName: "Herbology Gardens",
    location: "Green Valley",
    organic: true
  },
  {
    id: "8",
    name: "Grass-Fed Ground Beef",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=600&auto=format&fit=crop",
    category: "Meat",
    price: 7.99,
    unit: "lb",
    rating: 4.7,
    farmName: "Sunny Meadow Farm",
    location: "Western Plains"
  }
];

interface FeaturedProductsProps {
  limit?: number;
}

const FeaturedProducts = ({ limit = 8 }: FeaturedProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Simulate loading products from an API
  useEffect(() => {
    setLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      setProducts(sampleProducts.slice(0, limit));
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [limit]);
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2">
              Fresh from the farm to your table
            </p>
          </div>
          
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/marketplace">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        {loading ? (
          <div className="product-grid">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="bg-background rounded-lg shadow-sm p-4 animate-pulse">
                <div className="aspect-square bg-muted rounded-md mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
