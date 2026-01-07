import React from 'react';

export const RiskCharts: React.FC<{ scores: Record<string, number> }> = ({ scores }) => {
  return (
    <div>
      <h2>Risk Charts</h2>
      <ul>
        {Object.entries(scores).map(([k, v]) => (
          <li key={k}>{k}: {v}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiskCharts;
