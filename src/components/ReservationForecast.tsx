// src/components/ReservationForecast.tsx
import { Rate } from 'antd';
import React from 'react';

const ReservationForecast: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-red-500">Reservation Forecast</h2>
      <p>This is the Actual Data tab.</p>
      <Rate />
    </div>
  );
};

export default ReservationForecast;
