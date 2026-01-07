import React from 'react';
import { MelurnaData } from '../types';

export const Dashboard: React.FC<{ data: MelurnaData }> = ({ data }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data.summary, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
