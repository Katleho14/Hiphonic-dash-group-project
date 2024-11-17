import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Watch Nike Series 7", brand: "Apple", stock: 100, sales: 1234, price: "$399.00" },
  { id: 2, name: "iPhone 13 Pro", brand: "Apple", stock: 2, sales: 500, price: "$2,999.00" },
  { id: 3, name: "iPhone 12 Mini", brand: "Apple", stock: 110, sales: 789, price: "$2,699.00" },
];

const ProductsTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[400px] flex flex-col"
  >
    <div className="p-6 border-b border-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Products</h2>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          Dec 20 - Dec 31
        </button>
      </div>
    </div>
    <div className="overflow-auto flex-1">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Brand
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sales
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{product.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{product.brand}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{product.stock}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{product.sales}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{product.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default ProductsTable;