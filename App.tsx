import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { RiskCharts } from './components/RiskCharts';
import { Datasets } from './components/Datasets';
import { Settings } from './components/Settings';
import { ScanAssets } from './components/ScanAssets';
import { VulnerabilityScan } from './components/VulnerabilityScan';
import { MOCK_DATA } from './constants';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard data={MOCK_DATA} />}
      {activeTab === 'scan-assets' && <ScanAssets />}
      {activeTab === 'vulnerabilities' && <VulnerabilityScan />}
      {activeTab === 'charts' && <RiskCharts scores={MOCK_DATA.summary.scores} />}
      {activeTab === 'datasets' && <Datasets />}
      {activeTab === 'settings' && <Settings />}
    </Layout>
  );
}

export default App;