
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState("farmer");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API request
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple validation
      if (!formData.phone || !formData.password) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all fields",
        });
        return;
      }
      
      toast({
        title: "Login Successful",
        description: `Welcome back to KRUSHI!`,
      });
      
      // Redirect to dashboard or marketplace based on user type
      if (userType === "farmer") {
        navigate("/dashboard");
      } else {
        navigate("/marketplace");
      }
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <img 
              src="/placeholder.svg" 
              alt="KRUSHI Logo" 
              className="h-12 w-auto" 
            />
          </div>
          <CardTitle className="text-2xl">Welcome to KRUSHI</CardTitle>
          <CardDescription>
            The farm-to-market platform that empowers farmers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs 
            defaultValue={userType} 
            className="w-full"
            onValueChange={(value) => setUserType(value)}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="farmer">Farmer</TabsTrigger>
              <TabsTrigger value="buyer">Buyer</TabsTrigger>
            </TabsList>
            <TabsContent value="farmer" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="buyer" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="buyer-phone">Phone Number / Email</Label>
                  <Input 
                    id="buyer-phone" 
                    name="phone"
                    placeholder="Enter your phone number or email" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buyer-password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="buyer-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register now
            </Link>
          </div>
          
          <div className="text-center text-xs text-muted-foreground">
            By logging in, you agree to our{" "}
            <a href="#" className="hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
