import React from 'react';
import StatsGrid from '../../component/Dashboard/StatsGrid';
import RevenueChart from '../../component/Dashboard/RevenueChart';
import RecentActivity from '../../component/Dashboard/RecentActivity';
import RecentProjects from '../../component/Dashboard/RecentProjects';

const DashboardPage = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Stats Grid */}
      <StatsGrid />

      {/* Revenue & Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueChart />
        <RecentActivity />
      </div>

      {/* Recent Projects */}
      <RecentProjects />
    </div>
  );
};

export default DashboardPage;
