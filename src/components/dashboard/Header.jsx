import React, { useState } from 'react';
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Sample data that represents all items on your website
  const allItems = [
    { id: 1, title: 'Watch Nike Series 7', type: 'product', price: '$399.00' },
    { id: 2, title: 'iPhone 13 Pro', type: 'product', price: '$2,999.00' },
    { id: 3, title: 'iPhone 12 Mini', type: 'product', price: '$2,699.00' },
    { id: 4, title: 'Sales Report', type: 'report' },
    { id: 5, title: 'Customer Analytics', type: 'analytics' },
    { id: 6, title: 'Revenue Stats', type: 'stats' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setShowResults(false);
      return;
    }

    const results = allItems.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
    toast.info("Notifications clicked");
  };

  const handleProfileClick = () => {
    toast.info("Profile clicked");
  };

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <div className="relative flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search anything..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value === '') {
                    setShowResults(false);
                  }
                }}
              />
            </form>
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 max-h-96 overflow-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="font-medium text-gray-900">{item.title}</div>
                        {item.price && (
                          <div className="text-sm text-gray-600">{item.price}</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-600">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
          <button 
            className="relative p-2 hover:bg-gray-100 rounded-full"
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <Avatar onClick={handleProfileClick} className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;