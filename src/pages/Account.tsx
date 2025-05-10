
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  User,
  MapPin,
  Tractor,
  CreditCard,
  FileText,
  Settings,
  Edit,
} from "lucide-react";

// Mock data for demonstration
const mockFarmerData = {
  farmer_id: "123e4567-e89b-12d3-a456-426614174000",
  first_name: "Rajesh",
  last_name: "Kumar",
  email: "rajesh.kumar@example.com",
  phone_number: "+91 9876543210",
  gender: "Male",
  date_of_birth: "1985-05-15",
  profile_picture_url: "/placeholder.svg",
  profile_status: "active",
  verification_status: true,
  preferred_language: "en",
  registration_date: "2023-01-15T10:30:00Z"
};

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Layout>
      <div className="container max-w-7xl py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-80 shrink-0">
            <Card>
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="relative mb-2 group">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarImage src={mockFarmerData.profile_picture_url} alt={`${mockFarmerData.first_name}'s profile`} />
                    <AvatarFallback className="text-2xl">
                      {mockFarmerData.first_name.charAt(0)}
                      {mockFarmerData.last_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="absolute -bottom-2 -right-2 rounded-full bg-background"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit profile picture</span>
                  </Button>
                </div>
                <CardTitle className="text-xl mt-2">{mockFarmerData.first_name} {mockFarmerData.last_name}</CardTitle>
                <CardDescription>
                  {mockFarmerData.verification_status ? (
                    <span className="text-green-600 flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12.5L11 15.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      Verified Farmer
                    </span>
                  ) : "Pending Verification"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  <TabsList className="flex flex-col w-full h-auto gap-1">
                    <TabsTrigger 
                      value="profile" 
                      onClick={() => setActiveTab("profile")}
                      className={`w-full justify-start px-3 ${activeTab === "profile" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Personal Information
                    </TabsTrigger>
                    <TabsTrigger 
                      value="addresses" 
                      onClick={() => setActiveTab("addresses")}
                      className={`w-full justify-start px-3 ${activeTab === "addresses" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Addresses
                    </TabsTrigger>
                    <TabsTrigger 
                      value="farms" 
                      onClick={() => setActiveTab("farms")}
                      className={`w-full justify-start px-3 ${activeTab === "farms" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <Tractor className="mr-2 h-4 w-4" />
                      Farm Details
                    </TabsTrigger>
                    <TabsTrigger 
                      value="banking" 
                      onClick={() => setActiveTab("banking")}
                      className={`w-full justify-start px-3 ${activeTab === "banking" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Banking Details
                    </TabsTrigger>
                    <TabsTrigger 
                      value="documents" 
                      onClick={() => setActiveTab("documents")}
                      className={`w-full justify-start px-3 ${activeTab === "documents" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Documents
                    </TabsTrigger>
                    <TabsTrigger 
                      value="settings" 
                      onClick={() => setActiveTab("settings")}
                      className={`w-full justify-start px-3 ${activeTab === "settings" ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="profile" className="mt-0">
                <PersonalInfoTab farmer={mockFarmerData} />
              </TabsContent>
              <TabsContent value="addresses" className="mt-0">
                <AddressesTab farmerId={mockFarmerData.farmer_id} />
              </TabsContent>
              <TabsContent value="farms" className="mt-0">
                <FarmsTab farmerId={mockFarmerData.farmer_id} />
              </TabsContent>
              <TabsContent value="banking" className="mt-0">
                <BankingDetailsTab farmerId={mockFarmerData.farmer_id} />
              </TabsContent>
              <TabsContent value="documents" className="mt-0">
                <DocumentsTab farmerId={mockFarmerData.farmer_id} />
              </TabsContent>
              <TabsContent value="settings" className="mt-0">
                <SettingsTab farmer={mockFarmerData} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Tab components
const PersonalInfoTab = ({ farmer }: { farmer: any }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Manage your personal details and contact information</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Name</h4>
            <p className="text-base">{farmer.first_name} {farmer.last_name}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Email</h4>
            <p className="text-base">{farmer.email || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Phone Number</h4>
            <p className="text-base">{farmer.phone_number}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Gender</h4>
            <p className="text-base">{farmer.gender || "Not specified"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Date of Birth</h4>
            <p className="text-base">{new Date(farmer.date_of_birth).toLocaleDateString() || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Preferred Language</h4>
            <p className="text-base">{farmer.preferred_language === 'en' ? 'English' : farmer.preferred_language}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Registration Date</h4>
            <p className="text-base">{new Date(farmer.registration_date).toLocaleDateString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AddressesTab = ({ farmerId }: { farmerId: string }) => {
  // Mock address data for demonstration
  const addresses = [
    {
      address_id: "addr-123",
      address_type: "Home",
      address_line1: "123 Farming Village",
      address_line2: "Near River Bank",
      village: "Green Meadows",
      district: "Fertile District",
      state: "Agricultural State",
      postal_code: "123456",
      country: "India",
      is_primary: true
    },
    {
      address_id: "addr-456",
      address_type: "Farm",
      address_line1: "45 Crop Fields",
      address_line2: "",
      village: "Harvest Village",
      district: "Sowing District",
      state: "Agricultural State",
      postal_code: "123457",
      country: "India",
      is_primary: false
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Addresses</CardTitle>
          <CardDescription>Manage your residential and farm addresses</CardDescription>
        </div>
        <Button>
          <MapPin className="mr-2 h-4 w-4" />
          Add New Address
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {addresses.map(address => (
            <Card key={address.address_id} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-base">{address.address_type}</CardTitle>
                    {address.is_primary && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-1">{address.address_line1}</p>
                {address.address_line2 && <p className="text-sm mb-1">{address.address_line2}</p>}
                <p className="text-sm mb-1">
                  {address.village && `${address.village}, `}
                  {address.district}
                </p>
                <p className="text-sm mb-1">{address.state}, {address.postal_code}</p>
                <p className="text-sm">{address.country}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const FarmsTab = ({ farmerId }: { farmerId: string }) => {
  // Mock farm data for demonstration
  const farms = [
    {
      farm_id: "farm-123",
      farm_name: "Green Valley Farm",
      farm_size: 5.5,
      farm_size_unit: "acres",
      soil_type: "Loamy",
      irrigation_source: "Well",
      is_organic: true,
      is_primary: true
    },
    {
      farm_id: "farm-456",
      farm_name: "River Side Plantation",
      farm_size: 3.2,
      farm_size_unit: "acres",
      soil_type: "Sandy Loam",
      irrigation_source: "River",
      is_organic: false,
      is_primary: false
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Farms</CardTitle>
          <CardDescription>Manage your farm properties and details</CardDescription>
        </div>
        <Button>
          <Tractor className="mr-2 h-4 w-4" />
          Add New Farm
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {farms.map(farm => (
            <Card key={farm.farm_id} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-base">{farm.farm_name}</CardTitle>
                    {farm.is_primary && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Size</h4>
                    <p className="text-sm">{farm.farm_size} {farm.farm_size_unit}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Soil Type</h4>
                    <p className="text-sm">{farm.soil_type}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Irrigation</h4>
                    <p className="text-sm">{farm.irrigation_source}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Farming Type</h4>
                    <p className="text-sm">{farm.is_organic ? 'Organic' : 'Conventional'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const BankingDetailsTab = ({ farmerId }: { farmerId: string }) => {
  // Mock banking data for demonstration
  const bankAccounts = [
    {
      bank_detail_id: "bank-123",
      account_holder_name: "Rajesh Kumar",
      bank_name: "State Bank of India",
      account_number: "XXXX XXXX XXXX 5678",
      ifsc_code: "SBIN0001234",
      branch_name: "City Branch",
      is_verified: true,
      is_primary: true
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Banking Details</CardTitle>
          <CardDescription>Manage your bank accounts for payments</CardDescription>
        </div>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Add Bank Account
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {bankAccounts.map(account => (
            <Card key={account.bank_detail_id} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-base">{account.bank_name}</CardTitle>
                    {account.is_primary && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Primary
                      </span>
                    )}
                    {account.is_verified && (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Account Holder</h4>
                    <p className="text-sm">{account.account_holder_name}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Account Number</h4>
                    <p className="text-sm">{account.account_number}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">IFSC Code</h4>
                    <p className="text-sm">{account.ifsc_code}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground">Branch</h4>
                    <p className="text-sm">{account.branch_name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const DocumentsTab = ({ farmerId }: { farmerId: string }) => {
  // Mock documents data for demonstration
  const documents = [
    {
      document_id: "doc-123",
      document_type: "Aadhaar Card",
      document_number: "XXXX XXXX 1234",
      verification_status: "verified",
      document_url: "/placeholder.svg"
    },
    {
      document_id: "doc-456",
      document_type: "PAN Card",
      document_number: "ABCDE1234F",
      verification_status: "pending",
      document_url: "/placeholder.svg"
    },
    {
      document_id: "doc-789",
      document_type: "Land Records",
      document_number: "LR-12345-2023",
      verification_status: "verified",
      document_url: "/placeholder.svg"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Documents</CardTitle>
          <CardDescription>Manage your identification and farming documents</CardDescription>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Upload New Document
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map(doc => (
            <Card key={doc.document_id} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardTitle className="text-base">{doc.document_type}</CardTitle>
                    {doc.verification_status === "verified" ? (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Verified
                      </span>
                    ) : (
                      <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground">Document Number</h4>
                  <p className="text-sm">{doc.document_number}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SettingsTab = ({ farmer }: { farmer: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences and notification settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Notification Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["SMS", "Email", "Push Notifications", "WhatsApp"].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`notify-${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked={item === "SMS" || item === "WhatsApp"}
                />
                <label htmlFor={`notify-${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Update Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="market-updates" className="text-sm font-medium mb-1 block">
                Market Update Frequency
              </label>
              <select
                id="market-updates"
                className="w-full rounded-md border border-input bg-background px-3 h-10"
                defaultValue="daily"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div>
              <label htmlFor="crop-advisory" className="text-sm font-medium mb-1 block">
                Crop Advisory Frequency
              </label>
              <select
                id="crop-advisory"
                className="w-full rounded-md border border-input bg-background px-3 h-10"
                defaultValue="weekly"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Language Preference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="language" className="text-sm font-medium mb-1 block">
                Preferred Language
              </label>
              <select
                id="language"
                className="w-full rounded-md border border-input bg-background px-3 h-10"
                defaultValue={farmer.preferred_language}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="kn">Kannada</option>
                <option value="ml">Malayalam</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Account;
