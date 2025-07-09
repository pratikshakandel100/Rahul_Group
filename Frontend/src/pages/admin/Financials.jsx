import React from 'react';
import FinancialHeader from '../../component/financials/FinancialHeader';
import FinancialStats from '../../component/financials/FinancialStats';
import FinancialCharts from '../../component/financials/FinancialCharts';
import AdditionalStats from '../../component/financials/AdditionalStats';
import TransactionTable from '../../component/financials/TransactionTable';

const FinancialsPage = () => {
  return (
    <div className="space-y-6">
      <FinancialHeader />
      <FinancialStats />
      {/* <FinancialCharts /> */}
      {/* <AdditionalStats /> */}
      <TransactionTable />
    </div>
  );
};

export default FinancialsPage;