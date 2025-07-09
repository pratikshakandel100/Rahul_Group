import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  CreditCard,
  PieChart,
  BarChart3,
  Calendar,
  Download,
  Filter,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Receipt,
  Users,
  FolderOpen
} from 'lucide-react';

const Financials = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  const financialStats = {
    totalRevenue: 125750,
    monthlyRevenue: 18450,
    totalExpenses: 45300,
    monthlyExpenses: 12200,
    netProfit: 80450,
    monthlyProfit: 6250,
    pendingPayments: 23400,
    averageProjectValue: 8750
  };

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

  const monthlyData = [
    { month: 'Jan', revenue: 18450, expenses: 12200, profit: 6250 },
    { month: 'Dec', revenue: 22100, expenses: 11800, profit: 10300 },
    { month: 'Nov', revenue: 19800, expenses: 13400, profit: 6400 },
    { month: 'Oct', revenue: 21500, expenses: 12900, profit: 8600 },
    { month: 'Sep', revenue: 17200, expenses: 11500, profit: 5700 },
    { month: 'Aug', revenue: 25600, expenses: 14200, profit: 11400 }
  ];

  const paymentMethods = [
    { method: 'Bank Transfer', amount: 45650, percentage: 65 },
    { method: 'PayPal', amount: 18200, percentage: 26 },
    { method: 'Credit Card', amount: 6320, percentage: 9 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Dashboard</h2>
          <p className="text-gray-600 mt-1">Track revenue, expenses, and financial performance</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="bg-[#d97757] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#c86a4a] transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5% from last month
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.monthlyRevenue.toLocaleString()}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.3% from last month
              </p>
            </div>
            <div className="p-3 bg-[#d97757] bg-opacity-20 rounded-full">
              <TrendingUp className="w-6 h-6 text-[#d97757]" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-red-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +3.2% from last month
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <CreditCard className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Net Profit</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.netProfit.toLocaleString()}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15.7% from last month
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Wallet className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue vs Expenses</h3>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64">
            <div className="h-full flex items-end justify-between space-x-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center space-y-1">
                    <div 
                      className="w-6 bg-[#d97757] rounded-t"
                      style={{ height: `${(data.revenue / 30000) * 150}px` }}
                    ></div>
                    <div 
                      className="w-6 bg-red-400 rounded-t"
                      style={{ height: `${(data.expenses / 30000) * 150}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#d97757] rounded"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                <span className="text-sm text-gray-600">Expenses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
            <PieChart className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#d97757]" style={{ 
                    backgroundColor: index === 0 ? '#d97757' : index === 1 ? '#3b82f6' : '#10b981' 
                  }}></div>
                  <span className="text-sm font-medium text-gray-900">{method.method}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${method.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{method.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full flex">
              <div className="bg-[#d97757] h-full" style={{ width: '65%' }}></div>
              <div className="bg-blue-500 h-full" style={{ width: '26%' }}></div>
              <div className="bg-green-500 h-full" style={{ width: '9%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Payments</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.pendingPayments.toLocaleString()}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Project Value</p>
              <p className="text-2xl font-bold text-gray-900">${financialStats.averageProjectValue.toLocaleString()}</p>
            </div>
            <FolderOpen className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Clients</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-900">+12.5%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-500">{transaction.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
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
    </div>
  );
};

export default Financials;