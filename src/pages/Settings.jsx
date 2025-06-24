import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedHeader from "../components/dashboard/EnhancedHeader";
import EnhancedSidebar from "../components/dashboard/EnhancedSidebar";
import GradientCard from "../components/ui/gradient-card";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard,
  Database,
  Mail,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  Save,
  Upload
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  });

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Hiphonic Inc.",
    role: "Administrator"
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <EnhancedSidebar />
      <div className="flex-1 min-h-screen">
        <EnhancedHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-2">Manage your account preferences and system settings</p>
              </div>
              <Button className="gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </motion.div>

          {/* Settings Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="appearance" className="gap-2">
                  <Palette className="w-4 h-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="billing" className="gap-2">
                  <CreditCard className="w-4 h-4" />
                  Billing
                </TabsTrigger>
                <TabsTrigger value="system" className="gap-2">
                  <Database className="w-4 h-4" />
                  System
                </TabsTrigger>
              </TabsList>

              {/* Profile Settings */}
              <TabsContent value="profile">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <GradientCard className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="gap-2">
                        <Upload className="w-4 h-4" />
                        Upload New Photo
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </GradientCard>

                  <div className="lg:col-span-2">
                    <GradientCard className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            value={profile.name}
                            onChange={(e) => setProfile({...profile, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            value={profile.phone}
                            onChange={(e) => setProfile({...profile, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Input
                            value={profile.company}
                            onChange={(e) => setProfile({...profile, company: e.target.value})}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                          </label>
                          <Input
                            value={profile.role}
                            onChange={(e) => setProfile({...profile, role: e.target.value})}
                          />
                        </div>
                      </div>
                    </GradientCard>
                  </div>
                </div>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications">
                <GradientCard className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-green-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Push Notifications</h4>
                          <p className="text-sm text-gray-500">Receive push notifications in browser</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-purple-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                          <p className="text-sm text-gray-500">Receive important updates via SMS</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.sms}
                        onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Marketing Communications</h4>
                          <p className="text-sm text-gray-500">Receive product updates and promotions</p>
                        </div>
                      </div>
                      <Switch
                        checked={notifications.marketing}
                        onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                      />
                    </div>
                  </div>
                </GradientCard>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security">
                <div className="space-y-6">
                  <GradientCard className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4 text-gray-400" />
                            ) : (
                              <Eye className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <Input
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <Button className="gap-2">
                        <Lock className="w-4 h-4" />
                        Update Password
                      </Button>
                    </div>
                  </GradientCard>

                  <GradientCard className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Enable 2FA</h4>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">
                        Setup 2FA
                      </Button>
                    </div>
                  </GradientCard>
                </div>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance">
                <GradientCard className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Appearance Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Theme</h4>
                      <div className="grid grid-cols-3 gap-4 max-w-md">
                        <div className="border-2 border-blue-500 rounded-lg p-3 cursor-pointer">
                          <div className="w-full h-16 bg-white rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">Light</p>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-3 cursor-pointer">
                          <div className="w-full h-16 bg-gray-900 rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">Dark</p>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-3 cursor-pointer">
                          <div className="w-full h-16 bg-gradient-to-r from-white to-gray-900 rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">Auto</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Language</h4>
                      <select className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>
                </GradientCard>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing">
                <div className="space-y-6">
                  <GradientCard className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Current Plan</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Pro Plan</h4>
                        <p className="text-sm text-gray-500">$29/month • Billed monthly</p>
                      </div>
                      <Button variant="outline">
                        Change Plan
                      </Button>
                    </div>
                  </GradientCard>

                  <GradientCard className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Method</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline">
                        Update
                      </Button>
                    </div>
                  </GradientCard>
                </div>
              </TabsContent>

              {/* System Settings */}
              <TabsContent value="system">
                <GradientCard className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">System Preferences</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Auto-save</h4>
                        <p className="text-sm text-gray-500">Automatically save changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Data Export</h4>
                        <p className="text-sm text-gray-500">Download your data</p>
                      </div>
                      <Button variant="outline">
                        Export Data
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Delete Account</h4>
                        <p className="text-sm text-gray-500">Permanently delete your account</p>
                      </div>
                      <Button variant="destructive">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </GradientCard>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;