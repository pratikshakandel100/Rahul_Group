import React, { useState } from 'react';
import { FiDollarSign, FiTrendingUp, FiDownload, FiCreditCard, FiCalendar, FiCheck } from 'react-icons/fi';

const DeveloperPayments = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bank');
  const [showWithdrawalForm, setShowWithdrawalForm] = useState(false);

  const [paymentData] = useState({
    availableBalance: 3250.75,
    pendingPayments: 1850.00,
    totalEarnings: 12450.50,
    thisMonthEarnings: 2100.25
  });

  const [transactions] = useState([
    {
      id: 1,
      type: 'payment',
      description: 'E-commerce Website Project',
      amount: 2500.00,
      date: '2024-01-15',
      status: 'completed',
      client: 'TechCorp Inc.'
    },
    {
      id: 2,
      type: 'withdrawal',
      description: 'Bank Transfer Withdrawal',
      amount: -1000.00,
      date: '2024-01-12',
      status: 'completed',
      client: null
    },
    {
      id: 3,
      type: 'payment',
      description: 'Mobile App Backend',
      amount: 1800.00,
      date: '2024-01-10',
      status: 'pending',
      client: 'StartupXYZ'
    },
    {
      id: 4,
      type: 'payment',
      description: 'WordPress Plugin Development',
      amount: 950.00,
      date: '2024-01-08',
      status: 'completed',
      client: 'Digital Agency'
    },
    {
      id: 5,
      type: 'withdrawal',
      description: 'PayPal Withdrawal',
      amount: -500.00,
      date: '2024-01-05',
      status: 'completed',
      client: null
    }
  ]);

  const handleWithdrawal = () => {
    if (withdrawalAmount && parseFloat(withdrawalAmount) <= paymentData.availableBalance) {
      alert(`Withdrawal request of $${withdrawalAmount} submitted successfully!`);
      setWithdrawalAmount('');
      setShowWithdrawalForm(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">${value.toLocaleString()}</p>
          {trend && (
            <p className="text-sm text-green-600 mt-1">
              <FiTrendingUp size={14} className="inline mr-1" />
              {trend}
            </p>
          )}
        </div>
        <div className={`${color} p-3 rounded-full`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  const TransactionRow = ({ transaction }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white border border-gray-200 rounded-lg gap-2">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
          transaction.type === 'payment' ? 'bg-green-100' : 'bg-blue-100'
        }`}>
          {transaction.type === 'payment' ? (
            <FiDollarSign size={20} className="text-green-600" />
          ) : (
            <FiDownload size={20} className="text-blue-600" />
          )}
        </div>
        <div>
          <p className="font-medium text-gray-800">{transaction.description}</p>
          {transaction.client && (
            <p className="text-sm text-gray-600">from {transaction.client}</p>
          )}
          <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${
          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
        </p>
        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
          transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
          transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {transaction.status}
        </span>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payments & Withdrawals</h2>
        <p className="text-gray-600">Manage your earnings and withdrawal requests</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard
          title="Available Balance"
          value={paymentData.availableBalance}
          icon={FiDollarSign}
          color="bg-[#d97757]"
        />
        <StatCard
          title="Pending Payments"
          value={paymentData.pendingPayments}
          icon={FiCreditCard}
          color="bg-yellow-500"
        />
        <StatCard
          title="Total Earnings"
          value={paymentData.totalEarnings}
          icon={FiTrendingUp}
          color="bg-green-500"
        />
        <StatCard
          title="This Month"
          value={paymentData.thisMonthEarnings}
          icon={FiCalendar}
          color="bg-blue-500"
          trend="+15% from last month"
        />
      </div>

      {/* Withdrawal Section */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Withdrawal</h3>
          <button
            onClick={() => setShowWithdrawalForm(!showWithdrawalForm)}
            className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
          >
            {showWithdrawalForm ? 'Cancel' : 'Request Withdrawal'}
          </button>
        </div>

        {showWithdrawalForm && (
          <div className="border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Withdrawal Amount
                </label>
                <input
                  type="number"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                  placeholder="Enter amount"
                  max={paymentData.availableBalance}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Available: ${paymentData.availableBalance.toLocaleString()}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select
                  value={selectedPaymentMethod}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                  <option value="stripe">Stripe</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleWithdrawal}
                disabled={!withdrawalAmount || parseFloat(withdrawalAmount) > paymentData.availableBalance}
                className="px-6 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <FiCheck size={16} className="mr-2 inline" />
                Submit Request
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent">
                <option>All Transactions</option>
                <option>Payments Only</option>
                <option>Withdrawals Only</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent">
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPayments;
