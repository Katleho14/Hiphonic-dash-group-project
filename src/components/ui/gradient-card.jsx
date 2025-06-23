import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const GradientCard = ({ 
  children, 
  className = "", 
  gradient = "from-blue-500 to-purple-600",
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-0 before:transition-opacity",
        `before:${gradient}`,
        hover && "hover:before:opacity-5 hover:shadow-lg hover:border-gray-200",
        className
      )}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientCard;