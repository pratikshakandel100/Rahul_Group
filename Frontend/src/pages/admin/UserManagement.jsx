import React from 'react';
import UserHeader from '../../component/users/UserHeader';
import UserFilters from '../../component/users/UserFilters';
import UserStats from '../../component/users/UserStats';
import UserTable from '../../component/users/UserTable';

const UserManagementPage = () => {
  return (
    <div className="space-y-6">
      <UserHeader />
      <UserFilters />
      <UserStats />
      <UserTable />
    </div>
  );
};

export default UserManagementPage;