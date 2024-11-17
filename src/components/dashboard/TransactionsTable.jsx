import { motion } from "framer-motion";

const transactions = [
  { id: 1, customer: "John Doe", date: "2024-03-15", amount: "$299.99", status: "Completed" },
  { id: 2, customer: "Jane Smith", date: "2024-03-14", amount: "$199.50", status: "Pending" },
  { id: 3, customer: "Mike Johnson", date: "2024-03-13", amount: "$499.99", status: "Completed" },
  { id: 4, customer: "Sarah Williams", date: "2024-03-12", amount: "$150.00", status: "Failed" },
];

const TransactionsTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[400px] flex flex-col"
  >
    <div className="p-6 border-b border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
    </div>
    <div className="overflow-auto flex-1">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{transaction.customer}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{transaction.amount}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default TransactionsTable;