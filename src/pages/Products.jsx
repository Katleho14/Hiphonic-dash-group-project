import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedHeader from "../components/dashboard/EnhancedHeader";
import EnhancedSidebar from "../components/dashboard/EnhancedSidebar";
import GradientCard from "../components/ui/gradient-card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  MoreHorizontal,
  Package,
  TrendingUp,
  TrendingDown,
  Star
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      category: "Electronics",
      price: "$399.00",
      stock: 45,
      sales: 1234,
      rating: 4.8,
      trend: 12,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      category: "Electronics",
      price: "$999.00",
      stock: 23,
      sales: 856,
      rating: 4.9,
      trend: -5,
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "MacBook Pro 14\"",
      category: "Computers",
      price: "$1,999.00",
      stock: 12,
      sales: 432,
      rating: 4.7,
      trend: 8,
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      name: "AirPods Pro",
      category: "Audio",
      price: "$249.00",
      stock: 67,
      sales: 2341,
      rating: 4.6,
      trend: 15,
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 5,
      name: "iPad Air",
      category: "Tablets",
      price: "$599.00",
      stock: 34,
      sales: 678,
      rating: 4.5,
      trend: -2,
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const productStats = [
    { label: "Total Products", value: "1,247", change: "+12%", color: "blue" },
    { label: "Low Stock", value: "23", change: "+5%", color: "red" },
    { label: "Out of Stock", value: "8", change: "-2%", color: "orange" },
    { label: "Categories", value: "45", change: "+3%", color: "green" }
  ];

  const getStockStatus = (stock) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-red-100 text-red-800" };
    if (stock < 20) return { label: "Low Stock", color: "bg-yellow-100 text-yellow-800" };
    return { label: "In Stock", color: "bg-green-100 text-green-800" };
  };

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
                <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
                <p className="text-gray-600 mt-2">Manage your product inventory and catalog</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Product
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {productStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className={`text-sm mt-1 ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>

          {/* Products Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GradientCard className="overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Product Catalog</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage your product inventory</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Sales
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Rating
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Trend
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {products.map((product, index) => {
                      const stockStatus = getStockStatus(product.stock);
                      return (
                        <motion.tr
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="hover:bg-gray-50/50 transition-colors group"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{product.name}</div>
                                <div className="text-xs text-gray-500">ID: {product.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-gray-900">{product.price}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-medium text-gray-900">{product.stock} units</span>
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${stockStatus.color}`}>
                                {stockStatus.label}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{product.sales.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`flex items-center gap-1 text-sm font-medium ${
                              product.trend > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {product.trend > 0 ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              {Math.abs(product.trend)}%
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="gap-2">
                                  <Eye className="w-4 h-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Edit className="w-4 h-4" />
                                  Edit Product
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Package className="w-4 h-4" />
                                  Update Stock
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 text-red-600">
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </GradientCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;