import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AnimatedNumber = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000,
  className = "",
  decimals = 0 
}) => {
  const [ref, , hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const animatedValue = useAnimatedCounter(
    hasIntersected ? value : 0, 
    duration
  );

  const formatNumber = (num) => {
    if (decimals > 0) {
      return (num / Math.pow(10, decimals)).toFixed(decimals);
    }
    return num.toLocaleString();
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{formatNumber(animatedValue)}{suffix}
    </motion.span>
  );
};

export default AnimatedNumber;