import React from 'react';
import StatsGrid from '../../component/Dashboard/StatsGrid';
import RevenueChart from '../../component/Dashboard/RevenueChart';
import RecentActivity from '../../component/Dashboard/RecentActivity';
import RecentProjects from '../../component/Dashboard/RecentProjects';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <RecentActivity />
      </div>
      
      <RecentProjects />
    </div>
  );
};

export default DashboardPage;