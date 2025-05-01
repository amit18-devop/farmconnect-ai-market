
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PriceRecommendation from "@/components/ai/PriceRecommendation";
import {
  Home,
  Star,
  ShoppingCart,
  Check,
  Leaf,
  MessageSquare,
  MapPin,
  CalendarDays,
  Truck,
  Shield,
  FileText,
} from "lucide-react";
import { sampleProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find product by ID
  const product = sampleProducts.find((p) => p.id === id);
  
  // If product not found
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/marketplace">Return to Marketplace</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Handle quantity change
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  // Format date to display harvest date (current date minus 2 days)
  const harvestDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/marketplace">Marketplace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/marketplace?category=${product.category}`}>
                {product.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.organic && (
              <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                <Leaf className="h-3.5 w-3.5 mr-1" /> 
                Organic
              </Badge>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm">{product.rating.toFixed(1)} ({Math.floor(Math.random() * 50) + 10} reviews)</span>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <Link 
                to={`/farmer/${product.farmName.toLowerCase().replace(/\s+/g, '-')}`} 
                className="flex items-center hover:text-farm-600 transition-colors"
              >
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarFallback>{product.farmName[0]}</AvatarFallback>
                </Avatar>
                {product.farmName}
              </Link>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </div>
            </div>
            
            <div className="flex justify-between items-baseline mb-6">
              <div>
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">per {product.unit}</p>
              </div>
              {product.recommended && (
                <Badge variant="outline" className="flex items-center">
                  AI Recommended
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-md">
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <div className="w-12 text-center">{quantity}</div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </Button>
              </div>
              
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              
              <Button variant="outline">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <div className="bg-farm-50 p-1.5 rounded-full mr-3">
                  <CalendarDays className="h-4 w-4 text-farm-600" />
                </div>
                <div>
                  <p className="font-medium">Harvested on {harvestDate}</p>
                  <p className="text-muted-foreground">Fresh from the farm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-farm-50 p-1.5 rounded-full mr-3">
                  <Truck className="h-4 w-4 text-farm-600" />
                </div>
                <div>
                  <p className="font-medium">Free delivery on orders over $35</p>
                  <p className="text-muted-foreground">1-2 day delivery time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-farm-50 p-1.5 rounded-full mr-3">
                  <Shield className="h-4 w-4 text-farm-600" />
                </div>
                <div>
                  <p className="font-medium">Quality Guarantee</p>
                  <p className="text-muted-foreground">Not satisfied? Full refund within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="nutrition" className="flex-1">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
                <TabsTrigger value="farm" className="flex-1">Farm Info</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4">
                <div className="prose max-w-none">
                  <h3>Product Description</h3>
                  <p>
                    Our {product.name.toLowerCase()} are grown with care and harvested at peak ripeness to ensure
                    maximum flavor and nutritional value. These {product.organic ? "organic" : ""} 
                    {product.category.toLowerCase()} come directly from {product.farmName} in {product.location}.
                  </p>
                  
                  <p>
                    We take pride in our sustainable farming practices that respect the environment
                    and produce exceptional quality.
                  </p>
                  
                  <h4>Features</h4>
                  <ul>
                    <li>Fresh from the farm</li>
                    <li>Harvested at peak ripeness</li>
                    <li>No synthetic pesticides or fertilizers</li>
                    <li>Sustainably grown</li>
                    {product.organic && <li>Certified organic</li>}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Nutrition Information</CardTitle>
                    <CardDescription>Per 100g serving</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { name: "Calories", value: "45 kcal" },
                        { name: "Protein", value: "1.2g" },
                        { name: "Carbohydrates", value: "10.5g" },
                        { name: "Fat", value: "0.2g" },
                        { name: "Fiber", value: "2.5g" },
                        { name: "Vitamin C", value: "25% DV" },
                        { name: "Vitamin A", value: "15% DV" },
                        { name: "Potassium", value: "8% DV" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between pb-2 border-b">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah K.",
                      date: "3 days ago",
                      rating: 5,
                      comment: "Absolutely delicious and fresh! Will definitely order again."
                    },
                    {
                      name: "Michael R.",
                      date: "1 week ago",
                      rating: 4,
                      comment: "Very good quality, arrived promptly and well-packaged."
                    },
                    {
                      name: "Jennifer L.",
                      date: "2 weeks ago",
                      rating: 5,
                      comment: "The flavor is amazing, much better than anything from the grocery store."
                    }
                  ].map((review, i) => (
                    <div key={i} className="pb-4 border-b last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3.5 w-3.5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  View All Reviews
                </Button>
              </TabsContent>
              
              <TabsContent value="farm" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>{product.farmName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{product.farmName}</h3>
                    <p className="text-sm text-muted-foreground">{product.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < 4.8 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs ml-1">4.8 (32 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm">
                  {product.farmName} is a family-owned farm specializing in {product.organic ? "organic" : ""} 
                  {product.category.toLowerCase()}. Located in the fertile region of {product.location}, 
                  we've been farming for over 20 years using sustainable practices.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <Check className="h-4 w-4 text-farm-600 mb-1" />
                    <p className="text-sm font-medium">Sustainable Farming</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <Check className="h-4 w-4 text-farm-600 mb-1" />
                    <p className="text-sm font-medium">Family Owned</p>
                  </div>
                  {product.organic && (
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <Check className="h-4 w-4 text-farm-600 mb-1" />
                      <p className="text-sm font-medium">Certified Organic</p>
                    </div>
                  )}
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <Check className="h-4 w-4 text-farm-600 mb-1" />
                    <p className="text-sm font-medium">Local Production</p>
                  </div>
                </div>
                
                <Button asChild className="mt-4">
                  <Link to={`/farmer/${product.farmName.toLowerCase().replace(/\s+/g, '-')}`}>
                    View All Products from this Farm
                    <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* AI Price Recommendation */}
          <div>
            <PriceRecommendation
              productName={product.name}
              currentPrice={product.price}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
