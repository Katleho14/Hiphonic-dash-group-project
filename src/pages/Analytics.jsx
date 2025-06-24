import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedHeader from "../components/dashboard/EnhancedHeader";
import EnhancedSidebar from "../components/dashboard/EnhancedSidebar";
import GradientCard from "../components/ui/gradient-card";
import { Button } from "../components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Clock, 
  Globe,
  Calendar,
  Download,
  Filter
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");

  const trafficData = [
    { name: "Jan", visitors: 4000, pageViews: 2400, bounceRate: 45 },
    { name: "Feb", visitors: 3000, pageViews: 1398, bounceRate: 42 },
    { name: "Mar", visitors: 2000, pageViews: 9800, bounceRate: 38 },
    { name: "Apr", visitors: 2780, pageViews: 3908, bounceRate: 35 },
    { name: "May", visitors: 1890, pageViews: 4800, bounceRate: 40 },
    { name: "Jun", visitors: 2390, pageViews: 3800, bounceRate: 37 },
    { name: "Jul", visitors: 3490, pageViews: 4300, bounceRate: 33 },
  ];

  const deviceData = [
    { name: "Desktop", value: 45, color: "#3B82F6" },
    { name: "Mobile", value: 35, color: "#8B5CF6" },
    { name: "Tablet", value: 20, color: "#06B6D4" },
  ];

  const topPages = [
    { page: "/dashboard", views: 12543, change: 12 },
    { page: "/products", views: 8932, change: -5 },
    { page: "/analytics", views: 7621, change: 8 },
    { page: "/customers", views: 6543, change: 15 },
    { page: "/settings", views: 4321, change: -2 },
  ];

  const metrics = [
    {
      title: "Total Visitors",
      value: "24,567",
      change: 12.5,
      icon: Users,
      color: "blue"
    },
    {
      title: "Page Views",
      value: "89,432",
      change: 8.2,
      icon: Eye,
      color: "green"
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: -2.1,
      icon: Clock,
      color: "orange"
    },
    {
      title: "Bounce Rate",
      value: "34.2%",
      change: -5.3,
      icon: TrendingDown,
      color: "purple"
    }
  ];

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
                <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600 mt-2">Track your website performance and user behavior</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedPeriod}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                      <div className={`flex items-center gap-1 mt-2 text-sm ${
                        metric.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(metric.change)}%
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-${metric.color}-100`}>
                      <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Traffic Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <GradientCard className="p-6 h-[400px]">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Overview</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficData}>
                    <defs>
                      <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="visitors"
                      stroke="#3B82F6"
                      fill="url(#visitorsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </GradientCard>
            </motion.div>

            {/* Device Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GradientCard className="p-6 h-[400px]">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {deviceData.map((device) => (
                    <div key={device.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: device.color }}
                        />
                        <span className="text-sm text-gray-600">{device.name}</span>
                      </div>
                      <span className="text-sm font-semibold">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </GradientCard>
            </motion.div>
          </div>

          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GradientCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Page</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Views</th>
                      <th className="text-left py-3 text-sm font-semibold text-gray-600">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page, index) => (
                      <motion.tr
                        key={page.page}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">{page.page}</code>
                        </td>
                        <td className="py-4 text-sm font-semibold">{page.views.toLocaleString()}</td>
                        <td className="py-4">
                          <span className={`text-sm font-medium ${
                            page.change > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {page.change > 0 ? '+' : ''}{page.change}%
                          </span>
                        </td>
                      </motion.tr>
                    ))}
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

export default Analytics;