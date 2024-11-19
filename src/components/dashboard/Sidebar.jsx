import { Link } from "react-router-dom";
import {
  LayoutGrid,
  LineChart,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, label: "Overview", path: "/" },
    { icon: <LineChart size={20} />, label: "Analytics", path: "/analytics" },
    {
      icon: <ShoppingCart size={20} />,
      label: "Orders",
      path: "/orders",
      badge: "10",
    },
    { icon: <Package size={20} />, label: "Products", path: "/products" },
    { icon: <Users size={20} />, label: "Customers", path: "/customers" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">Hiphonic</span>
        </div>
      </div>

      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors relative"
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="absolute right-3 bg-pink-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 pb-6">
        <button className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors w-full">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;