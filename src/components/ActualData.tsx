// src/components/ActualData.tsx
import React from 'react';
import { Rate } from 'antd';
const ActualData: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-500">Actual Data</h2>
      <p>This is the Actual Data tab.</p>
      <Rate />
    </div>
  );
};

export default ActualData;
