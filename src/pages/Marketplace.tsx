import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductCard, { Product } from "@/components/products/ProductCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Filter, X, SortDesc } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sample product data - would come from an API in a real app
import { sampleProducts } from "@/data/products";

const Marketplace = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(!isMobile);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("featured");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    price: [0, 100],
    categories: [] as string[],
    location: "",
    organic: false,
    rating: 0,
  });
  
  // Load products on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle filter application
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    
    // Apply filters to products
    let results = [...products];
    
    // Price filter
    results = results.filter((product) => 
      product.price >= newFilters.price[0] && product.price <= newFilters.price[1]
    );
    
    // Category filter
    if (newFilters.categories.length > 0) {
      results = results.filter((product) => 
        newFilters.categories.includes(product.category)
      );
    }
    
    // Location filter
    if (newFilters.location) {
      results = results.filter((product) =>
        product.location.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }
    
    // Organic filter
    if (newFilters.organic) {
      results = results.filter((product) => product.organic);
    }
    
    // Rating filter
    if (newFilters.rating > 0) {
      results = results.filter((product) => product.rating >= newFilters.rating);
    }
    
    // Search query
    if (searchQuery) {
      results = results.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.farmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(results);
  };
  
  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      handleFilterChange(filters);
      return;
    }
    
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.farmName.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(results);
  };
  
  // Handle sort
  const handleSort = (value: string) => {
    setSortOrder(value);
    let sorted = [...filteredProducts];
    
    switch (value) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for "featured"
        sorted = [...filteredProducts];
    }
    
    setFilteredProducts(sorted);
  };
  
  return (
    <Layout>
      <div className="bg-muted/30 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Browse fresh products directly from local farmers
          </p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          {!isMobile && (
            <div className={`w-64 flex-shrink-0 ${showFilters ? "block" : "hidden"}`}>
              <div className="bg-card rounded-lg shadow-sm border sticky top-20">
                <FilterSidebar onFilter={handleFilterChange} />
              </div>
            </div>
          )}
          
          {/* Filters - Mobile */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between mb-4">
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    {Object.values(filters).flat().filter(Boolean).length || 0}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-md w-full">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  <FilterSidebar
                    onFilter={handleFilterChange}
                    isMobile={true}
                  />
                </div>
              </SheetContent>
            </Sheet>
          )}
          
          {/* Product Listing */}
          <div className="flex-grow">
            {/* Search and Controls */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-xs">
                <Input
                  placeholder="Search products, farms..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                {searchQuery && (
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => handleSearch("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4 justify-between sm:justify-end w-full">
                <div className="flex items-center">
                  <SortDesc className="h-4 w-4 mr-2" />
                  <Select
                    value={sortOrder}
                    onValueChange={handleSort}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {!isMobile && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    {showFilters ? "Hide Filters" : "Show Filters"}
                  </Button>
                )}
              </div>
            </div>
            
            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filteredProducts.length} products
            </p>
            
            {/* Products Grid */}
            {isLoading ? (
              <div className="product-grid">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-card rounded-lg shadow-sm p-4 animate-pulse">
                    <div className="aspect-square bg-muted rounded-md mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search criteria
                </p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    handleFilterChange({
                      price: [0, 100],
                      categories: [],
                      location: "",
                      organic: false,
                      rating: 0,
                    });
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
