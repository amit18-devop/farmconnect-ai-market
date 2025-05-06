
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart } from "@/components/ui/chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Users,
  IndianRupee,
  Plus,
  Tractor,
  CloudRain,
  LineChart as LineChartIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const mockInsights = {
    totalSales: 58420,
    salesChange: 24.5,
    totalOrders: 42,
    ordersChange: 18.2,
    newCustomers: 12,
    customersChange: 32.1,
    pendingPayments: 12500,
    pendingPaymentsChange: -8.4,
  };

  // Mock sales data for charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [4200, 5800, 4900, 6800, 5500, 7200],
        borderColor: 'hsl(142.1,76.2%,36.3%)',
        backgroundColor: 'hsl(142.1,76.2%,36.3%,0.1)',
        fill: true,
      },
    ],
  };

  // Mock products data
  const products = [
    { id: '1', name: 'Organic Rice', quantity: '200 kg', price: 45, status: 'active' },
    { id: '2', name: 'Red Tomatoes', quantity: '50 kg', price: 30, status: 'active' },
    { id: '3', name: 'Sweet Potatoes', quantity: '100 kg', price: 25, status: 'active' },
    { id: '4', name: 'Fresh Spinach', quantity: '20 kg', price: 40, status: 'low' },
  ];

  // Mock orders data
  const orders = [
    { id: 'ORD-001', customer: 'Priya Food Suppliers', items: 3, total: 5450, status: 'delivered' },
    { id: 'ORD-002', customer: 'Green Grocers', items: 1, total: 2800, status: 'processing' },
    { id: 'ORD-003', customer: 'Organic Markets', items: 2, total: 3600, status: 'pending' },
  ];

  // Mock weather data
  const weatherForecast = {
    today: { temp: '32°C', condition: 'Sunny', humidity: '65%', rain: '0%' },
    tomorrow: { temp: '30°C', condition: 'Partly Cloudy', humidity: '70%', rain: '20%' },
    day3: { temp: '29°C', condition: 'Light Rain', humidity: '80%', rain: '60%' },
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Rajesh Kumar! Here's your farm overview.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link to="/add-product">
                <Plus className="mr-2 h-4 w-4" /> Add New Product
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/analytics">
                <LineChartIcon className="mr-2 h-4 w-4" /> Analytics
              </Link>
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="weather">Weather & Advisory</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Sales */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                      <div className="flex items-baseline">
                        <IndianRupee className="h-3 w-3 mr-1" />
                        <h3 className="text-2xl font-bold">{mockInsights.totalSales.toLocaleString()}</h3>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs flex items-center ${mockInsights.salesChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {mockInsights.salesChange > 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(mockInsights.salesChange)}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <IndianRupee className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Orders */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                      <h3 className="text-2xl font-bold">{mockInsights.totalOrders}</h3>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs flex items-center ${mockInsights.ordersChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {mockInsights.ordersChange > 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(mockInsights.ordersChange)}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* New Customers */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">New Customers</p>
                      <h3 className="text-2xl font-bold">{mockInsights.newCustomers}</h3>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs flex items-center ${mockInsights.customersChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {mockInsights.customersChange > 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(mockInsights.customersChange)}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pending Payments */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                      <div className="flex items-baseline">
                        <IndianRupee className="h-3 w-3 mr-1" />
                        <h3 className="text-2xl font-bold">{mockInsights.pendingPayments.toLocaleString()}</h3>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs flex items-center ${mockInsights.pendingPaymentsChange > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {mockInsights.pendingPaymentsChange > 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(mockInsights.pendingPaymentsChange)}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full">
                      <IndianRupee className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sales Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Your sales performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <LineChart data={salesData} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders for your products</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>{order.customer[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{order.customer}</p>
                            <p className="text-xs text-muted-foreground">{order.id} · {order.items} items</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="font-medium">₹{order.total}</p>
                          <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                            'bg-amber-100 text-amber-800'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Price Trends</CardTitle>
                  <CardDescription>Average market prices for your top crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[220px]">
                    <BarChart 
                      data={{
                        labels: ['Rice', 'Tomatoes', 'Potatoes', 'Spinach'],
                        datasets: [
                          {
                            label: 'Current Price (₹/kg)',
                            data: [45, 30, 25, 40],
                            backgroundColor: 'rgba(34, 197, 94, 0.6)',
                          },
                          {
                            label: 'Last Month (₹/kg)',
                            data: [42, 35, 22, 38],
                            backgroundColor: 'rgba(34, 197, 94, 0.2)',
                          },
                        ],
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your Products</CardTitle>
                  <CardDescription>Manage your product listings and inventory</CardDescription>
                </div>
                <Button asChild>
                  <Link to="/add-product">
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-medium">Product</th>
                        <th className="text-left p-3 font-medium">Quantity</th>
                        <th className="text-left p-3 font-medium">Price (₹/kg)</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-t">
                          <td className="p-3">{product.name}</td>
                          <td className="p-3">{product.quantity}</td>
                          <td className="p-3">₹{product.price}</td>
                          <td className="p-3">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              product.status === 'active' ? 'bg-green-100 text-green-800' :
                              product.status === 'low' ? 'bg-amber-100 text-amber-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {product.status === 'active' ? 'In Stock' : 
                               product.status === 'low' ? 'Low Stock' : 'Out of Stock'}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage your incoming and fulfilled orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-medium">Order ID</th>
                        <th className="text-left p-3 font-medium">Customer</th>
                        <th className="text-left p-3 font-medium">Items</th>
                        <th className="text-left p-3 font-medium">Total</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-t">
                          <td className="p-3">{order.id}</td>
                          <td className="p-3">{order.customer}</td>
                          <td className="p-3">{order.items}</td>
                          <td className="p-3">₹{order.total}</td>
                          <td className="p-3">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">View</Button>
                              <Button variant="ghost" size="sm">Invoice</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                  <CardDescription>3-day weather forecast for your farm location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Today */}
                    <div className="bg-card border rounded-lg p-3 text-center">
                      <h3 className="font-medium mb-1">Today</h3>
                      <div className="text-4xl font-light mb-2">{weatherForecast.today.temp}</div>
                      <p className="text-sm">{weatherForecast.today.condition}</p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        <p>Humidity: {weatherForecast.today.humidity}</p>
                        <p>Rain: {weatherForecast.today.rain}</p>
                      </div>
                    </div>

                    {/* Tomorrow */}
                    <div className="bg-card border rounded-lg p-3 text-center">
                      <h3 className="font-medium mb-1">Tomorrow</h3>
                      <div className="text-4xl font-light mb-2">{weatherForecast.tomorrow.temp}</div>
                      <p className="text-sm">{weatherForecast.tomorrow.condition}</p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        <p>Humidity: {weatherForecast.tomorrow.humidity}</p>
                        <p>Rain: {weatherForecast.tomorrow.rain}</p>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="bg-card border rounded-lg p-3 text-center">
                      <h3 className="font-medium mb-1">Day After</h3>
                      <div className="text-4xl font-light mb-2">{weatherForecast.day3.temp}</div>
                      <p className="text-sm">{weatherForecast.day3.condition}</p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        <p>Humidity: {weatherForecast.day3.humidity}</p>
                        <p>Rain: {weatherForecast.day3.rain}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <div className="flex items-start">
                      <CloudRain className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Weather Advisory</h4>
                        <p className="text-sm text-yellow-700">
                          Light rain expected in next 2-3 days. Consider postponing any new sowing and protect harvested crops from moisture.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Crop Health Advisory</CardTitle>
                  <CardDescription>AI-powered recommendations for your crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                      <div className="flex items-start">
                        <Tractor className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-green-800">Rice (Primary Crop)</h4>
                          <p className="text-sm text-green-700">
                            Your rice crop is in good health based on recent imagery. With the expected rainfall, monitor for excess water in the fields to prevent fungal diseases.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
                      <div className="flex items-start">
                        <Tractor className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-amber-800">Tomatoes</h4>
                          <p className="text-sm text-amber-700">
                            Early signs of leaf spot detected in tomato crops. Consider applying organic fungicide before the rainfall to prevent spread.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                      <div className="flex items-start">
                        <Tractor className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-green-800">Potatoes</h4>
                          <p className="text-sm text-green-700">
                            Potato crop development is on track. Current soil moisture is optimal. Consider harvesting before the rain if crops are mature enough.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
