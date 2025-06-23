import { motion } from "framer-motion";
import { Plus, Upload, Download, Settings, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientCard from "@/components/ui/gradient-card";

const QuickActions = () => {
  const actions = [
    {
      icon: Plus,
      label: "Add Product",
      description: "Create new product",
      gradient: "from-blue-500 to-blue-600",
      onClick: () => console.log("Add product")
    },
    {
      icon: Users,
      label: "Add Customer",
      description: "Register new customer",
      gradient: "from-green-500 to-green-600",
      onClick: () => console.log("Add customer")
    },
    {
      icon: Upload,
      label: "Import Data",
      description: "Bulk import CSV",
      gradient: "from-purple-500 to-purple-600",
      onClick: () => console.log("Import data")
    },
    {
      icon: Download,
      label: "Export Report",
      description: "Download analytics",
      gradient: "from-orange-500 to-orange-600",
      onClick: () => console.log("Export report")
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-8"
    >
      <GradientCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <p className="text-sm text-gray-500 mt-1">Frequently used operations</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Customize
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.onClick}
              className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all group text-left"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{action.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </GradientCard>
    </motion.div>
  );
};

export default QuickActions;