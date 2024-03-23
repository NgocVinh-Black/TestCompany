import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { dashboardSampleV0_4MealDetailData } from '../Json/dashboardSampleV0_4MealDetailData';
interface DataType {
  key: React.Key;
  date: string;
  RVC: string;
  Period: string;
  "A. Count": number;
  "C. Count": number;
  "A. Sales": string;
  "C. Sales": string;
  Count: number;
  "Count %": string;
  Sales: string;
  "Sale %": string;
  description: React.ReactNode; // Thêm trường description vào DataType
}
interface DataType2 {
  key: React.Key;
  room: any;
  "Guest Names": string;
  Count: number;
  Pax: any;
  Time: any;
  "Pkg. Code": string;
  description: React.ReactNode; // Thêm trường description vào DataType
}
const dataTS = dashboardSampleV0_4MealDetailData[0]

const formatSales = (salesAmount: number): string => {
  const numberFormatter = new Intl.NumberFormat('en-US');
  return numberFormatter.format(salesAmount);
};

const formattedSales = formatSales(dataTS.total.adults_actual.sales);
const formattedSalesC = formatSales(dataTS.total.children_actual.sales);
const formattedSalesT = formatSales(dataTS.total.total_actual.sales);
const formattedSalesFAS = formatSales(dataTS.outlet[0].total.adults_actual.sales);
const formattedSalesFCS = formatSales(dataTS.outlet[0].total.children_actual.sales);
const formattedSalesFT = formatSales(dataTS.outlet[0].total.total_actual.sales);
const formattedSalesBAS = formatSales(dataTS.outlet[0].breakfast.total.adults_actual.sales);
const formattedSalesBCS = formatSales(dataTS.outlet[0].breakfast.total.children_actual.sales);
const formattedSalesBS = formatSales(dataTS.outlet[0].breakfast.total.total_actual.sales);

const formatPercentage = (percentage: number): string => {
  return (percentage / 100).toLocaleString(undefined, { style: 'percent' });
};

const formattedPercentage = formatPercentage(dataTS.total.total_actual.percentage_count);
const formattedPercentageT = formatPercentage(dataTS.total.total_actual.percentage_sales);
const formattedPercentageFC = formatPercentage(dataTS.outlet[0].total.total_actual.percentage_count);
const formattedPercentageFS = formatPercentage(dataTS.outlet[0].total.total_actual.percentage_sales);
const formattedPercentageBCP = formatPercentage(dataTS.outlet[0].breakfast.total.total_actual.percentage_count);
const formattedPercentageBSP = formatPercentage(dataTS.outlet[0].breakfast.total.total_actual.percentage_sales);

const columnsWidth = 100;
const columns: TableColumnsType<DataType> = [
  { title: 'Date', dataIndex: 'date', key: 'date', width: columnsWidth, align: 'right' },
  { title: 'RVC', dataIndex: 'RVC', key: 'RVC', width: columnsWidth, align: 'right' },
  { title: 'Period', dataIndex: 'Period', key: 'Period', width: columnsWidth, align: 'right' },
  { title: 'A. Count', dataIndex: 'A. Count', key: 'A. Count', width: columnsWidth, align: 'right' },
  { title: 'C. Count', dataIndex: 'C. Count', key: 'C. Count', width: columnsWidth, align: 'right' },
  { title: 'A. Sales', dataIndex: 'A. Sales', key: 'A. Sales', width: columnsWidth, align: 'right' },
  { title: 'C. Sales', dataIndex: 'C. Sales', key: 'C. Sales', width: columnsWidth, align: 'right' },
  { title: 'Count', dataIndex: 'Count', key: 'Count', width: columnsWidth, align: 'right' },
  { title: 'Count %', dataIndex: 'Count %', key: 'Count %', width: columnsWidth, align: 'right' },
  { title: 'Sales', dataIndex: 'Sales', key: 'Sales', width: columnsWidth, align: 'right' },
  { title: 'Sale %', dataIndex: 'Sale %', key: 'Sale %', width: columnsWidth, align: 'right' },
];
const columns2: TableColumnsType<DataType2> = [
  { title: 'Room', dataIndex: 'room', key: 'room', width: columnsWidth, align: 'right' },
  { title: 'Guest Names', dataIndex: 'Guest Names', key: 'Guest Names', width: columnsWidth, align: 'right' },
  { title: 'Count', dataIndex: 'Count', key: 'Count', width: columnsWidth, align: 'right' },
  { title: 'Pax', dataIndex: 'Pax', key: 'Pax', width: columnsWidth, align: 'right' },
  { title: 'Time', dataIndex: 'Time', key: 'Time', width: columnsWidth, align: 'right' },
  { title: 'Pkg. Code', dataIndex: 'Pkg. Code', key: 'Pkg. Code', width: columnsWidth, align: 'right' },
  { title: 'Remark', dataIndex: 'Remark', key: 'Remark', width: columnsWidth, align: 'right' },
];
// const dataBreakfast: DataType2[] = [
//   {
//     key: 4,
//     room: 12,
//     "Guest Names": 'Vinh',
//     Count: 12,
//     Pax: '',
//     Time: '',
//     "Pkg. Code": 'AB',
//     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
//   },
// ];
const data3: DataType[] = [
  {
    key: 3,
    date: '',
    RVC: '',
    Period: 'Breakfast',
    "A. Count": dataTS.outlet[0].breakfast.total.adults_actual.count,
    "C. Count": dataTS.outlet[0].breakfast.total.children_actual.count,
    "A. Sales": formattedSalesBAS,
    "C. Sales": formattedSalesBCS,
    Count: dataTS.outlet[0].breakfast.total.total_actual.count,
    "Count %": formattedPercentageBCP,
    Sales: formattedSalesBS,
    "Sale %": formattedPercentageBSP,
    description: 'ádasda',
  },
];
const data2: DataType[] = [
  {
    key: 2,
    date: '',
    RVC: dataTS.outlet[0].outlet_code,
    Period: '',
    "A. Count": dataTS.outlet[0].total.adults_actual.count,
    "C. Count": dataTS.outlet[0].total.children_actual.count,
    "A. Sales": formattedSalesFAS,
    "C. Sales": formattedSalesFCS,
    Count: dataTS.outlet[0].total.total_actual.count,
    "Count %": formattedPercentageFC,
    Sales: formattedSalesFT,
    "Sale %": formattedPercentageFS,
    description: (
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => record.description,
          rowExpandable: (record) => record.date !== 'Not Expandable',
        }}
        dataSource={data3}
        showHeader={false}
        pagination={false}
        scroll={{ x: columnsWidth * columns.length }}
      />

    ),
  },
];
const data: DataType[] = [
  {
    key: 1,
    date: dataTS.report_date,
    RVC: '',
    Period: '',
    "A. Count": dataTS.total.adults_actual.count,
    "C. Count": dataTS.total.children_actual.count,
    "A. Sales": formattedSales,
    "C. Sales": formattedSalesC,
    Count: dataTS.total.total_actual.count,
    "Count %": formattedPercentage,
    Sales: formattedSalesT,
    "Sale %": formattedPercentageT,
    description: (
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => record.description,
          rowExpandable: (record) => record.date !== 'Not Expandable',
        }}
        dataSource={data2}
        showHeader={false}
        pagination={false}
        scroll={{ x: columnsWidth * columns.length }}
      />
    ),
  },
];

const App: React.FC = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => record.description,
      rowExpandable: (record) => record.date !== 'Not Expandable',
    }}
    dataSource={data}
    scroll={{ x: columnsWidth * columns.length }}
  />
);

export default App;
