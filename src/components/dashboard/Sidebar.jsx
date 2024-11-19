import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Overview", to: "/" },
  { icon: BarChart3, label: "Analytics", to: "/analytics" },
  { icon: ShoppingCart, label: "Orders", to: "/orders", badge: "10" },
  { icon: Package, label: "Products", to: "/products" },
  { icon: Users, label: "Customers", to: "/customers" },
];

const bottomNavItems = [
  { icon: Settings, label: "Settings", to: "/settings" },
  { icon: LogOut, label: "Log Out", to: "/logout" },
];

const NavItem = ({ icon: Icon, label, to, badge, isActive }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-2 mx-3 rounded-lg text-gray-600 hover:bg-sidebar-hover transition-colors",
      isActive && "bg-sidebar-active text-primary font-medium"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
    {badge && (
      <span className="ml-auto bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col fixed">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">Hiphonic</span>
        </div>
      </div>

      <nav className="flex-1 py-6">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              {...item}
              isActive={location.pathname === item.to}
            />
          ))}
        </div>
      </nav>

      <div className="border-t py-6">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavItem
              key={item.to}
              {...item}
              isActive={location.pathname === item.to}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;