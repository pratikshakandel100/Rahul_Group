import React from 'react';
import { ArrowUpRight, ArrowDownRight, Eye } from 'lucide-react';

const TransactionTable = () => {
  const recentTransactions = [
    {
      id: 1,
      type: 'income',
      description: 'Payment from TechCorp Inc.',
      amount: 12500,
      date: '2024-01-25',
      project: 'E-commerce Platform',
      status: 'completed',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 2,
      type: 'expense',
      description: 'Server hosting costs',
      amount: 299,
      date: '2024-01-24',
      project: 'Infrastructure',
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 3,
      type: 'income',
      description: 'Payment from StartupXYZ',
      amount: 8750,
      date: '2024-01-23',
      project: 'Mobile App Development',
      status: 'completed',
      paymentMethod: 'PayPal'
    },
    {
      id: 4,
      type: 'expense',
      description: 'Software licenses',
      amount: 450,
      date: '2024-01-22',
      project: 'General',
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 5,
      type: 'income',
      description: 'Payment from Creative Agency',
      amount: 5200,
      date: '2024-01-21',
      project: 'Website Redesign',
      status: 'pending',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 6,
      type: 'expense',
      description: 'Marketing campaign',
      amount: 1200,
      date: '2024-01-20',
      project: 'Marketing',
      status: 'completed',
      paymentMethod: 'Credit Card'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <button className="text-[#d97757] hover:text-[#c86a4a] text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Date
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Project
              </th>
              {/* <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                Status
              </th> */}
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`ml-2 text-sm font-medium ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? 'Income' : 'Expense'}
                    </span>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{transaction.description}</div>
                  <div className="text-sm text-gray-500">{transaction.paymentMethod}</div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell">
                  {transaction.date}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                  {transaction.project}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-[#d97757] hover:text-[#c86a4a] transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;