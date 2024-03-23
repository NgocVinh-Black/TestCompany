// src/components/ReservationForecast.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../Json/dataReservationForecast/data.json'
interface DataItem {
  Date: string;
  "Total Occ.": number;
  "Arr. Rooms": number;
  "Dep. Rooms": number;
}
const formatDate = (date: Date): string => {
  return `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`;
}
const ReservationForecast: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('thisMonth');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(event.target.value);
  };

  const getFilteredData = (startDate: Date, endDate: Date): DataItem[] => {
    return data.filter(item => {
      const itemDate = new Date(item.Date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  }

  const currentDate = new Date('2020-01-31'); // Ngày bắt đầu
  let endDate = new Date('2020-02-29'); // Ngày kết thúc mặc định

  if (timeRange === '3Months') {
    endDate = new Date('2020-04-30');
  } else if (timeRange === '6Months') {
    endDate = new Date('2020-07-31');
  }

  const filteredData = getFilteredData(currentDate, endDate);
  return (
    <div style={{
      background: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    }} className='px-4 py-4'>
      <h2 className="text-2xl font-bold mb-4">Reservation Forecast</h2>
      <p className='mb-3'>Develop a line chart that let the user choses the forecast period (this month, 3 month, 6 month) and three lines Total Occ, Arr. Rooms, Dep. Rooms corresponding to the table in the excel.</p>
      <select style={{
        border: '1px green solid',
        borderRadius: 5
      }} className='mb-3' value={timeRange} onChange={handleSelectChange}>
        <option value="thisMonth">This Month</option>
        <option value="3Months">3 Months</option>
        <option value="6Months">6 Months</option>
      </select>
      <LineChart width={1600} height={600} data={filteredData}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Total Occ." stroke="#EAB308" />
        <Line type="monotone" dataKey="Arr. Rooms" stroke="#22C55E" />
        <Line type="monotone" dataKey="Dep. Rooms" stroke="#ff0000" />
      </LineChart>
    </div>
  );
};

export default ReservationForecast;
