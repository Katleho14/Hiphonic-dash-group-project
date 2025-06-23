import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedHeader from "../components/dashboard/EnhancedHeader";
import EnhancedStatCards from "../components/dashboard/EnhancedStatCards";
import EnhancedProductsTable from "../components/dashboard/EnhancedProductsTable";
import EnhancedTransactionsTable from "../components/dashboard/EnhancedTransactionsTable";
import EnhancedSalesChart from "../components/charts/EnhancedSalesChart";
import EnhancedBarChart from "../components/charts/EnhancedBarChart";
import EnhancedSidebar from "@/components/dashboard/EnhancedSidebar";
import QuickActions from "@/components/dashboard/QuickActions";
import GradientCard from "@/components/ui/gradient-card";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, TrendingUp } from "lucide-react";

const data = [
  { name: "Jun", value: 30000 },
  { name: "Jul", value: 40000 },
  { name: "Aug", value: 45000 },
  { name: "Sep", value: 35000 },
  { name: "Oct", value: 50000 },
  { name: "Nov", value: 45000 },
  { name: "Dec", value: 40000 },
];

const EnhancedIndex = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Year");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <EnhancedSidebar />
      <div className="flex-1 min-h-screen">
        <EnhancedHeader />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <EnhancedStatCards />
          <QuickActions />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GradientCard className="p-6 h-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      Revenue Overview
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        $48,574.21
                      </span>
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        +20.1%
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Compared to last month</p>
                  </div>
                  <div className="flex gap-2 mt-4 sm:mt-0">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedPeriod}
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </Button>
                  </div>
                </div>
                <EnhancedSalesChart data={data} />
              </GradientCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GradientCard className="p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">User Activity</h2>
                    <p className="text-sm text-gray-500 mt-1">Weekly visitor statistics</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">1,847</div>
                    <div className="text-sm text-gray-500">Total this week</div>
                  </div>
                </div>
                <EnhancedBarChart />
              </GradientCard>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EnhancedProductsTable />
            <EnhancedTransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedIndex;