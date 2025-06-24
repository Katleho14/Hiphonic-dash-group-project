import { HomeIcon, LineChart, ShoppingCart, Package, Users, Settings } from "lucide-react";
import EnhancedIndex from "./pages/EnhancedIndex.jsx";
import Analytics from "./pages/Analytics.jsx";
import Orders from "./pages/Orders.jsx";
import Products from "./pages/Products.jsx";
import Customers from "./pages/Customers.jsx";
import SettingsPage from "./pages/Settings.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <EnhancedIndex />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <LineChart className="h-4 w-4" />,
    page: <Analytics />,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <Orders />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <Package className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "Customers",
    to: "/customers",
    icon: <Users className="h-4 w-4" />,
    page: <Customers />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <SettingsPage />,
  },
];