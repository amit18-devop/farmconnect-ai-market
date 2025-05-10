
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, PieChart } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ArrowLeft, Download, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState("6months");
  
  // Mock data for sales over time
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [42000, 38000, 50000, 58000, 52000, 69000],
        borderColor: 'hsl(142.1,76.2%,36.3%)',
        backgroundColor: 'hsl(142.1,76.2%,36.3%,0.1)',
        fill: true,
      },
    ],
  };
  
  // Mock data for product category distribution
  const categoryData = {
    labels: ['Rice', 'Vegetables', 'Fruits', 'Spices', 'Dairy'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };
  
  // Mock data for customer type distribution
  const customerData = {
    labels: ['Retailers', 'Direct Consumers', 'Restaurants', 'Food Processors'],
    datasets: [
      {
        label: 'Orders by Customer Type',
        data: [40, 30, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };
  
  // Mock data for top products
  const topProductsData = {
    labels: ['Organic Rice', 'Red Tomatoes', 'Sweet Potatoes', 'Fresh Spinach', 'Mangoes'],
    datasets: [
      {
        label: 'Sales Volume (kg)',
        data: [350, 280, 220, 180, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/dashboard")}
              className="mb-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track your sales performance and market insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex items-center bg-muted/30 rounded-md px-3 py-1">
              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
              <Select 
                value={timeRange} 
                onValueChange={setTimeRange}
              >
                <SelectTrigger className="border-0 p-0 h-auto bg-transparent">
                  <SelectValue placeholder="Select a time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="3months">Last 3 months</SelectItem>
                  <SelectItem value="6months">Last 6 months</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
        
        {/* Revenue Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Your farm's sales performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <LineChart data={salesData} />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Product Category Sales */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>Distribution of sales across product categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <PieChart data={categoryData} />
              </div>
            </CardContent>
          </Card>
          
          {/* Customer Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Analysis</CardTitle>
              <CardDescription>Breakdown of your customer types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <PieChart data={customerData} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Top Products */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Top Products by Sales Volume</CardTitle>
            <CardDescription>Your best-selling products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart data={topProductsData} />
            </div>
          </CardContent>
        </Card>
        
        {/* Market Insights */}
        <Card>
          <CardHeader>
            <CardTitle>AI Market Insights</CardTitle>
            <CardDescription>Intelligent market trends and suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">Pricing Opportunity</h3>
                <p className="text-green-800">
                  Our AI detected that organic rice prices have increased by 15% in nearby markets. 
                  Consider adjusting your prices to optimize revenue while remaining competitive.
                </p>
              </div>
              
              <div className="p-4 border rounded-md bg-blue-50">
                <h3 className="font-semibold text-blue-900 mb-2">Demand Forecast</h3>
                <p className="text-blue-800">
                  Upcoming festival season indicates a 30% increase in demand for vegetables and fruits.
                  Consider increasing your inventory of tomatoes, onions, and seasonal fruits.
                </p>
              </div>
              
              <div className="p-4 border rounded-md bg-amber-50">
                <h3 className="font-semibold text-amber-900 mb-2">Crop Suggestion</h3>
                <p className="text-amber-800">
                  Based on your farm profile and current market trends, adding organic spinach to your crop 
                  rotation could increase your revenue by approximately 22% in the next season.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button>View All Insights</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
