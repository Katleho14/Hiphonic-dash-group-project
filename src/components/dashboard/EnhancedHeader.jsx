import React, { useState } from 'react';
import { Search, Bell, User, Settings, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const EnhancedHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [notifications] = useState(3);
  const { theme, setTheme } = useTheme();

  const allItems = [
    { id: 1, title: 'Watch Nike Series 7', type: 'product', price: '$399.00', category: 'Electronics' },
    { id: 2, title: 'iPhone 13 Pro', type: 'product', price: '$2,999.00', category: 'Electronics' },
    { id: 3, title: 'iPhone 12 Mini', type: 'product', price: '$2,699.00', category: 'Electronics' },
    { id: 4, title: 'Sales Report', type: 'report', category: 'Analytics' },
    { id: 5, title: 'Customer Analytics', type: 'analytics', category: 'Analytics' },
    { id: 6, title: 'Revenue Stats', type: 'stats', category: 'Analytics' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setShowResults(false);
      return;
    }

    const results = allItems.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(true);
    
    if (results.length > 0) {
      toast.success(`Found ${results.length} results for: ${searchQuery}`);
    } else {
      toast.info(`No results found for: ${searchQuery}`);
    }
  };

  const handleNotificationClick = () => {
    toast.info("You have 3 new notifications");
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="mb-6">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Dashboard Overview
          </motion.h1>
          <motion.p 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-2"
          >
            Welcome back! Here's what's happening with your business today.
          </motion.p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products, reports, analytics..."
                className="pl-10 pr-4 py-3 w-full bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value === '') {
                    setShowResults(false);
                  }
                }}
              />
            </form>
            
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-96 overflow-auto z-50"
                >
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-900">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.category}</div>
                            </div>
                            {item.price && (
                              <div className="text-sm font-semibold text-blue-600">{item.price}</div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center text-gray-500">
                      <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>No results found</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative rounded-xl hover:bg-gray-100"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNotificationClick}
              className="relative rounded-xl hover:bg-gray-100"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              {notifications > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {notifications}
                </motion.span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl hover:bg-gray-100"
            >
              <Settings className="h-5 w-5 text-gray-600" />
            </Button>

            <Avatar className="cursor-pointer ring-2 ring-gray-200 hover:ring-blue-300 transition-all">
              <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedHeader;