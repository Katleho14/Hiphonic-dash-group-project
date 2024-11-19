import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/dashboard/Header";
import StatCards from "../components/dashboard/StatCards";
import ProductsTable from "../components/dashboard/ProductsTable";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import SalesChart from "../components/charts/SalesChart";
import VisitorsBarChart from "../components/charts/VisitorsBarChart";
import Sidebar from "@/components/dashboard/Sidebar";

const data = [
  { name: "Jun", value: 30000 },
  { name: "Jul", value: 40000 },
  { name: "Aug", value: 45000 },
  { name: "Sep", value: 35000 },
  { name: "Oct", value: 50000 },
  { name: "Nov", value: 45000 },
  { name: "Dec", value: 40000 },
];

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Year");

  return (
    <div className="flex min-h-screen bg-secondary">
      <Sidebar className="w-64" /> {/* Fixed width for sidebar */}
      <div className="flex-1 min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <StatCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Overall revenue</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold text-foreground">$48,574.21</span>
                    <span className="text-sm text-success">+20%</span>
                  </div>
                </div>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="mt-2 sm:mt-0 px-4 py-2 border border-gray-200 rounded-lg bg-white text-foreground"
                >
                  <option>This Year</option>
                  <option>Last Year</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              <SalesChart data={data} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">User  Activity</h2>
              <VisitorsBarChart />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductsTable />
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;