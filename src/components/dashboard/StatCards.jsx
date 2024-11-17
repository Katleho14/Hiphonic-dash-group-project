import { motion } from "framer-motion";
import { ShoppingCart, DollarSign, Clock, Users } from "lucide-react";

const StatCard = ({ icon: Icon, title, value, change, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`p-6 rounded-xl bg-white shadow-sm border border-gray-100 ${className}`}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-gray-50">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h3 className="text-xl sm:text-2xl font-semibold mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${change > 0 ? "text-success" : "text-danger"}`}>
          {change > 0 ? "+" : ""}{change}%
        </p>
      </div>
    </div>
  </motion.div>
);

const StatCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard
      icon={ShoppingCart}
      title="Monthly Sales"
      value="$1,234.00"
      change={12}
    />
    <StatCard
      icon={DollarSign}
      title="Total Revenue"
      value="$10,566.01"
      change={35}
    />
    <StatCard
      icon={Clock}
      title="Returns"
      value="$956.00"
      change={-5}
    />
    <StatCard
      icon={Users}
      title="Active Users"
      value="10,320"
      change={-20}
    />
  </div>
);

export default StatCards;