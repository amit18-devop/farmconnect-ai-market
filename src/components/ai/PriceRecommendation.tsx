
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Sparkles, TrendingUp, TrendingDown, Info, RefreshCw } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PriceRecommendationProps {
  productName: string;
  currentPrice: number;
  recommendedPrice?: number;
}

const PriceRecommendation = ({ 
  productName, 
  currentPrice, 
  recommendedPrice
}: PriceRecommendationProps) => {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(recommendedPrice);
  
  // This is a simulated calculation in a real app, this would call an API
  const calculateRecommendation = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Random price within 20% of current price
      const variance = currentPrice * 0.2;
      const min = currentPrice - variance;
      const max = currentPrice + variance;
      const newRecommendation = +(min + Math.random() * (max - min)).toFixed(2);
      
      setRecommendation(newRecommendation);
      setLoading(false);
    }, 1500);
  };
  
  const priceIsBetter = recommendation && recommendation > currentPrice;
  const priceDifference = recommendation ? ((recommendation - currentPrice) / currentPrice * 100).toFixed(1) : "0";
  const confidenceScore = Math.floor(Math.random() * 30) + 70; // Random between 70-99
  
  return (
    <Card>
      <CardHeader className="bg-farm-50 py-3 px-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="mr-2 text-amber-500" size={20} />
            <h3 className="font-medium">AI Price Recommendation</h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-72">
                <p className="text-xs">
                  Our AI analyzes market demand, supply levels, seasonal trends, and competitive prices
                  to recommend the optimal price for your products.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1">Current Market Price:</p>
          <p className="text-lg font-bold">${currentPrice.toFixed(2)} per unit</p>
        </div>
        
        {recommendation ? (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground mb-1">Recommended Price:</p>
                <div className="flex items-center">
                  {priceIsBetter ? (
                    <TrendingUp className="text-green-500 mr-1" size={16} />
                  ) : (
                    <TrendingDown className="text-amber-500 mr-1" size={16} />
                  )}
                  <span className={`text-xs font-medium ${priceIsBetter ? 'text-green-500' : 'text-amber-500'}`}>
                    {priceDifference}%
                  </span>
                </div>
              </div>
              <p className="text-lg font-bold text-farm-600">${recommendation.toFixed(2)} per unit</p>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-muted-foreground">Confidence:</p>
                <p className="text-xs font-medium">{confidenceScore}%</p>
              </div>
              <Progress value={confidenceScore} className="h-2" />
            </div>
            
            <div className="bg-muted/50 rounded-md p-3 text-xs text-muted-foreground mb-4">
              <p>
                Based on current market conditions and regional supply data, we recommend 
                {priceIsBetter ? ' increasing ' : ' adjusting '} 
                your price for {productName}.
              </p>
            </div>
          </>
        ) : (
          <div className="bg-muted/50 rounded-md p-3 mb-4 text-center text-sm">
            <BarChart className="mx-auto mb-2" />
            <p>Generate an AI-powered price recommendation based on current market trends and demand.</p>
          </div>
        )}
        
        <Button 
          className="w-full" 
          onClick={calculateRecommendation} 
          disabled={loading}
        >
          {loading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Analyzing Market Data...
            </>
          ) : recommendation ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Recommendation
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Recommendation
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceRecommendation;
