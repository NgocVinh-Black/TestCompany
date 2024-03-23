// src/components/ActualData.tsx
import { Tooltip } from 'antd';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import '../styles/actualData.css'
import data from '../Json/dataActualData/data.json'
import data2 from '../Json/dataActualData/data2.json'
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const formatYAxis = (tickItem: number) => {
  // Định dạng lại giá trị trục Y thành các đơn vị mới ở đây
  return tickItem.toLocaleString("vi-VN", { minimumFractionDigits: 2 }) + "VND";
};
const formatYAxis2 = (tickItem: number) => {
  // Chuyển đổi giá trị thành đơn vị mới ở đây
  const formattedValue = tickItem.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  return `${formattedValue} VND`;
};
const SimpleBarChart = () => (
  <BarChart width={850} height={500} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis tickFormatter={formatYAxis} />
    <Tooltip />
    <Legend />
    <Bar dataKey="Grand Total" fill="#FFCE65" />
    <Bar dataKey="SPH" fill="#53C0DF" />
  </BarChart>
);
const BiaxialBarChart = () => (
  <BarChart
    width={650}
    height={500}
    data={data2}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis yAxisId="left" orientation="left" stroke="#8884d8"
      tickFormatter={formatYAxis2}
    />
    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"
      tickFormatter={(value) => `${value}%`} />
    <Tooltip />
    <Legend />
    <Bar yAxisId="left" dataKey="ARD" fill="#8884d8" />
    <Bar yAxisId="right" dataKey="OCC" fill="#82ca9d" />
  </BarChart>
);
const ActualData: React.FC = () => {
  return (
    <div>
      <div className='mb-6 grid grid-cols-4 gap-4'>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='p-4'>
          <p style={{
            color: '#324148'
          }} className="text-sm font-medium mb-4">TOTAL REVENUE</p>
          <h2 style={{
            color: '#324148'
          }} className='text-5xl text-center font-semibold'>895,322 <br /> VND</h2>
        </div>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='p-4'>
          <p style={{
            color: '#324148'
          }} className="text-sm font-medium mb-4">ROOM REVENUE</p>
          <h2 style={{
            color: '#324148'
          }} className='text-5xl text-center font-semibold'>234,458 <br /> VND</h2>
        </div>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='p-4'>
          <p style={{
            color: '#324148'
          }} className="text-sm font-medium mb-4">F&B REVENUE</p>
          <h2 style={{
            color: '#324148'
          }} className='text-5xl text-center font-semibold'>609,316 <br /> VND</h2>
        </div>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='p-4'>
          <p style={{
            color: '#324148'
          }} className="text-sm font-medium mb-4">TOTAL ROOM IN HOTEL</p>
          <h2 style={{
            color: '#324148'
          }} className='text-5xl text-center font-semibold'>744</h2>
        </div>
      </div>
      <div className='flex gap-5 justify-between'>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='simpleBarChart px-2 py-6'>
          <h3 className='text-2xl font-semibold mb-2'>Hotel Revenue</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis fugiat nemo consequatur nisi! Officia neque asperiores alias, maiores inventore magni laborum vel, deleniti atque enim soluta sunt assumenda exercitationem.</p>
          <SimpleBarChart />
        </div>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }} className='biaxialBarChart px-2 py-6'>
          <h3 className='text-2xl font-semibold mb-2'>Room Occ & ADR</h3>
          <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit tempora rerum, facere dignissimos itaque deleniti quos exercitationem porro voluptatem.</p>
          <BiaxialBarChart />
        </div>
      </div>
      <div style={{
        background: '#FFFFFF',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }} className='mt-5 py-6'>
        <p style={{
          color: '#324148',
          paddingLeft: 20
        }} className="text-sm font-medium mb-4">Manager Flash Report (currency: VND)</p>
        <div className=' grid grid-cols-7 gap-4 pl-0 pr-20'>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">Total Rooms</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">309</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">Room Revenue</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">234,458</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">F&B Revenue</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">609,316</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">Other Revenue</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">51,547</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">Total Revenue</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">895,322</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">Occupancy (%)</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">8.09</p>
          </div>
          <div className='text-right'>
            <p style={{
              color: 'gray'
            }} className="text-sm font-medium mb-2">ARD</p>
            <p style={{
              color: '#324148'
            }} className="text-sm font-medium mb-4">57,59</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ActualData;
