import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LoadingSpinner = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <motion.div
      className={cn("relative", sizeClasses[size], className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
      <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full" />
    </motion.div>
  );
};

export default LoadingSpinner;