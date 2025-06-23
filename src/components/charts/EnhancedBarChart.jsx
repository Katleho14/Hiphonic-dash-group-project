import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-4 rounded-lg shadow-lg border border-gray-100"
      >
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-lg font-bold text-purple-600">
          {payload[0].value} visitors
        </p>
      </motion.div>
    );
  }
  return null;
};

const EnhancedBarChart = () => {
  const data = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 160 },
    { day: "Wed", visitors: 180 },
    { day: "Thu", visitors: 140 },
    { day: "Fri", visitors: 200 },
    { day: "Sat", visitors: 220 },
    { day: "Sun", visitors: 190 }
  ];

  const colors = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE', '#F3F4F6', '#9CA3AF'];

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="visitors" 
            radius={[8, 8, 0, 0]}
            fill="#8B5CF6"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnhancedBarChart;