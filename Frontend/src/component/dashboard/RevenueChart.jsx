import React from 'react';
import { BarChart3, PieChart } from 'lucide-react';

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <BarChart3 className="w-5 h-5 text-gray-500" />
          <select className="text-sm border rounded-md px-2 py-1">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
      <div className="h-48 sm:h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <PieChart className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 text-sm sm:text-base">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;