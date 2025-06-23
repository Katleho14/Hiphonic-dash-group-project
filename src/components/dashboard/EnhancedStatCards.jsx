import { motion } from "framer-motion";
import { ShoppingCart, DollarSign, Clock, Users, TrendingUp, TrendingDown } from "lucide-react";
import AnimatedNumber from "@/components/ui/animated-number";
import GradientCard from "@/components/ui/gradient-card";

const StatCard = ({ icon: Icon, title, value, change, prefix = "", suffix = "", gradient, index }) => {
  const isPositive = change > 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GradientCard 
        className="p-6 h-full"
        gradient={gradient}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <TrendIcon className={`w-4 h-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{change}%
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <AnimatedNumber
                value={value}
                prefix={prefix}
                suffix={suffix}
                className="text-3xl font-bold text-gray-900"
                duration={2000}
              />
              <p className="text-xs text-gray-500">vs last month</p>
            </div>
          </div>
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-full transform translate-x-16 -translate-y-16`} />
        </div>
      </GradientCard>
    </motion.div>
  );
};

const EnhancedStatCards = () => {
  const stats = [
    {
      icon: ShoppingCart,
      title: "Monthly Sales",
      value: 1234,
      change: 12,
      prefix: "$",
      suffix: ".00",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Total Revenue",
      value: 10566,
      change: 35,
      prefix: "$",
      suffix: ".01",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Returns",
      value: 956,
      change: -5,
      prefix: "$",
      suffix: ".00",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Active Users",
      value: 10320,
      change: 20,
      prefix: "",
      suffix: "",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} index={index} />
      ))}
    </div>
  );
};

export default EnhancedStatCards;