import React, { useState } from 'react';
import { 
  CreditCardIcon, 
  BanknotesIcon, 
  ArrowDownTrayIcon,
  EyeIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  const transactions = [
    {
      id: 1,
      type: 'payment',
      description: 'Payment to Alice Johnson - React Development',
      amount: -2250,
      date: '2024-01-15',
      status: 'completed',
      method: 'Credit Card'
    },
    {
      id: 2,
      type: 'refund',
      description: 'Refund from Bob Wilson - Cancelled Project',
      amount: 1500,
      date: '2024-01-12',
      status: 'completed',
      method: 'Bank Transfer'
    },
    {
      id: 3,
      type: 'payment',
      description: 'Payment to Carol Davis - UI Design',
      amount: -800,
      date: '2024-01-10',
      status: 'pending',
      method: 'PayPal'
    },
    {
      id: 4,
      type: 'payment',
      description: 'Payment to David Brown - Backend Development',
      amount: -3200,
      date: '2024-01-08',
      status: 'completed',
      method: 'Credit Card'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'credit',
      last4: '4242',
      brand: 'Visa',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'credit',
      last4: '8888',
      brand: 'Mastercard',
      expiry: '08/26',
      isDefault: false
    },
    {
      id: 3,
      type: 'paypal',
      email: 'john.doe@example.com',
      isDefault: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTransactionIcon = (type) => {
    return type === 'payment' ? '↗' : '↙';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Payments</h2>
        <p className="text-gray-600 mt-2">Manage your payment methods and view transaction history.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <BanknotesIcon className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">$12,450</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <CreditCardIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$3,250</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-[#d97757] bg-opacity-20 p-3 rounded-lg">
              <ArrowDownTrayIcon className="w-6 h-6 text-[#d97757]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">$800</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'transactions'
                  ? 'border-[#d97757] text-[#d97757]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'methods'
                  ? 'border-[#d97757] text-[#d97757]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Payment Methods
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'transactions' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                <button className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Transaction</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Method</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              transaction.type === 'payment' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                            }`}>
                              {getTransactionIcon(transaction.type)}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{transaction.method}</td>
                        <td className="py-4 px-4">
                          <span className={`text-sm font-medium ${
                            transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                          }`}>
                            ${Math.abs(transaction.amount).toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-gray-400 hover:text-[#d97757] transition-colors">
                            <EyeIcon className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'methods' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                <button className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Payment Method
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <CreditCardIcon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="ml-3">
                          {method.type === 'credit' ? (
                            <>
                              <p className="font-medium text-gray-900">{method.brand} •••• {method.last4}</p>
                              <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                            </>
                          ) : (
                            <>
                              <p className="font-medium text-gray-900">PayPal</p>
                              <p className="text-sm text-gray-600">{method.email}</p>
                            </>
                          )}
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {method.isDefault && (
                      <div className="flex items-center justify-between">
                        <span className="inline-flex px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Default
                        </span>
                      </div>
                    )}
                    
                    {!method.isDefault && (
                      <button className="text-sm text-[#d97757] hover:text-orange-600 transition-colors">
                        Set as Default
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
