
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, MapPin } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  unit: string;
  rating: number;
  farmName: string;
  location: string;
  organic?: boolean;
  recommended?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          {product.organic && (
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
              Organic
            </Badge>
          )}
          {product.recommended && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              AI Recommended
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 className="font-medium text-lg hover:text-farm-600 transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">per {product.unit}</p>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <Link to={`/farmer/${product.farmName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-farm-600">
            {product.farmName}
          </Link>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
            <span className="text-xs ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="mt-2 flex items-center text-xs text-muted-foreground">
          <MapPin size={14} className="mr-1" />
          {product.location}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button size="sm" variant="outline" className="w-full">
          Details
        </Button>
        <Button size="sm" className="w-full">
          <ShoppingCart size={16} className="mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
