
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState("farmer");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    language: "en",
    state: "",
    district: "",
    village: "",
    acceptTerms: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for Step 1
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.phone) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all required fields",
        });
        return;
      }
      
      // Move to Step 2
      setStep(2);
      return;
    }
    
    // Submit form at Step 2
    setIsLoading(true);
    
    // Simulate registration API request
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple validation
      if (!formData.password) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please create a password",
        });
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords do not match",
        });
        return;
      }
      
      if (!formData.acceptTerms) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please accept the terms and conditions",
        });
        return;
      }
      
      toast({
        title: "Registration Successful",
        description: `Welcome to KRUSHI! Your account has been created.`,
      });
      
      // Redirect to login
      navigate("/login");
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
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>
            Join KRUSHI to connect directly with buyers and get the best prices
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
              <form onSubmit={handleNextStep} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="Your first name" 
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Your last name" 
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="Your mobile number" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input 
                        id="email" 
                        name="email"
                        placeholder="Your email address" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select 
                        defaultValue={formData.language}
                        onValueChange={(value) => handleSelectChange("language", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                          <SelectItem value="mr">Marathi</SelectItem>
                          <SelectItem value="ta">Tamil</SelectItem>
                          <SelectItem value="te">Telugu</SelectItem>
                          <SelectItem value="kn">Kannada</SelectItem>
                          <SelectItem value="ml">Malayalam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                    >
                      Continue
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select 
                        defaultValue={formData.state}
                        onValueChange={(value) => handleSelectChange("state", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="up">Uttar Pradesh</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input 
                        id="district" 
                        name="district"
                        placeholder="Your district" 
                        value={formData.district}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="village">Village/Town</Label>
                      <Input 
                        id="village" 
                        name="village"
                        placeholder="Your village or town" 
                        value={formData.village}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Create Password*</Label>
                      <div className="relative">
                        <Input 
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password*</Label>
                      <div className="relative">
                        <Input 
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="acceptTerms" 
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, acceptTerms: checked === true }))
                        }
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-sm leading-none"
                      >
                        I accept the{" "}
                        <a href="#" className="text-primary hover:underline">
                          terms and conditions
                        </a>
                      </label>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                            Creating Account...
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </TabsContent>
            <TabsContent value="buyer" className="space-y-4">
              <form onSubmit={handleNextStep} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="buyer-firstName">First Name*</Label>
                        <Input 
                          id="buyer-firstName" 
                          name="firstName"
                          placeholder="Your first name" 
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="buyer-lastName">Last Name*</Label>
                        <Input 
                          id="buyer-lastName" 
                          name="lastName"
                          placeholder="Your last name" 
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyer-email">Email*</Label>
                      <Input 
                        id="buyer-email" 
                        name="email"
                        placeholder="Your email address" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyer-phone">Phone Number*</Label>
                      <Input 
                        id="buyer-phone" 
                        name="phone"
                        placeholder="Your mobile number" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                    >
                      Continue
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="buyer-password">Create Password*</Label>
                      <div className="relative">
                        <Input 
                          id="buyer-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyer-confirmPassword">Confirm Password*</Label>
                      <div className="relative">
                        <Input 
                          id="buyer-confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyer-type">Buyer Type</Label>
                      <Select 
                        defaultValue="consumer"
                        onValueChange={(value) => handleSelectChange("buyerType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consumer">Individual Consumer</SelectItem>
                          <SelectItem value="retailer">Retailer/Grocery Store</SelectItem>
                          <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                          <SelectItem value="processor">Food Processor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="buyer-acceptTerms" 
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, acceptTerms: checked === true }))
                        }
                      />
                      <label
                        htmlFor="buyer-acceptTerms"
                        className="text-sm leading-none"
                      >
                        I accept the{" "}
                        <a href="#" className="text-primary hover:underline">
                          terms and conditions
                        </a>
                      </label>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                            Creating Account...
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
