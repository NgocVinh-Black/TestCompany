import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { dashboardSampleV0_4MealDetailData } from '../Json/dashboardSampleV0_4MealDetailData';
import '../styles/periodDetail.css'
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
  room: string;
  "Guest Names": string;
  Count: number;
  Pax: any;
  Time: any;
  "Pkg. Code": string;
  Remark: string;
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
const formattedSalesLAS = formatSales(dataTS.outlet[0].lunch.total.adults_actual.sales);
const formattedSalesLCS = formatSales(dataTS.outlet[0].lunch.total.children_actual.sales);
const formattedSalesLS = formatSales(dataTS.outlet[0].lunch.total.total_actual.sales);
const formattedSalesDAS = formatSales(dataTS.outlet[0].dinner.total.adults_actual.sales);
const formattedSalesDCS = formatSales(dataTS.outlet[0].dinner.total.children_actual.sales);
const formattedSalesDS = formatSales(dataTS.outlet[0].dinner.total.total_actual.sales);

const formatPercentage = (percentage: number): string => {
  return (percentage / 100).toLocaleString(undefined, { style: 'percent' });
};

const formattedPercentage = formatPercentage(dataTS.total.total_actual.percentage_count);
const formattedPercentageT = formatPercentage(dataTS.total.total_actual.percentage_sales);
const formattedPercentageFC = formatPercentage(dataTS.outlet[0].total.total_actual.percentage_count);
const formattedPercentageFS = formatPercentage(dataTS.outlet[0].total.total_actual.percentage_sales);
const formattedPercentageBCP = formatPercentage(dataTS.outlet[0].breakfast.total.total_actual.percentage_count);
const formattedPercentageBSP = formatPercentage(dataTS.outlet[0].breakfast.total.total_actual.percentage_sales);
const formattedPercentageLCP = formatPercentage(dataTS.outlet[0].lunch.total.total_actual.percentage_count);
const formattedPercentageLSP = formatPercentage(dataTS.outlet[0].lunch.total.total_actual.percentage_sales);
const formattedPercentageDCP = formatPercentage(dataTS.outlet[0].dinner.total.total_actual.percentage_count);
const formattedPercentageDSP = formatPercentage(dataTS.outlet[0].dinner.total.total_actual.percentage_sales);

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
const recordTimes = Object.keys(dataTS.outlet[0].breakfast.records);
recordTimes.forEach(time => {
    console.log('Thời gian:', time);
});
const dataBreakfast: DataType2[] = [
  {
    key: 11,
    room: dataTS.outlet[0].breakfast.records['15:41:19'].room,
    "Guest Names": dataTS.outlet[0].breakfast.records['15:41:19'].guest_names,
    Count: dataTS.outlet[0].breakfast.records['15:41:19'].count,
    Pax: dataTS.outlet[0].breakfast.records['15:41:19'].pax,
    Time: '15:41:19',
    "Pkg. Code": dataTS.outlet[0].breakfast.records['15:41:19'].package_code,
    Remark: dataTS.outlet[0].breakfast.records['15:41:19'].remark,
  },
  {
    key: 12,
    room: dataTS.outlet[0].breakfast.records['15:41:20'].room,
    "Guest Names": dataTS.outlet[0].breakfast.records['15:41:20'].guest_names,
    Count: dataTS.outlet[0].breakfast.records['15:41:20'].count,
    Pax: dataTS.outlet[0].breakfast.records['15:41:20'].pax,  
    Time: '15:41:20',
    "Pkg. Code": dataTS.outlet[0].breakfast.records['15:41:20'].package_code,
    Remark: dataTS.outlet[0].breakfast.records['15:41:20'].remark,
  },
];
const dataLunch: DataType2[] = [
  {
    key: 13,
    room: dataTS.outlet[0].lunch.records['16:41:19'].room,
    "Guest Names": dataTS.outlet[0].lunch.records['16:41:19'].guest_names,
    Count: dataTS.outlet[0].lunch.records['16:41:19'].count,
    Pax: dataTS.outlet[0].lunch.records['16:41:19'].pax,
    Time: '16:41:19',
    "Pkg. Code": dataTS.outlet[0].lunch.records['16:41:19'].package_code,
    Remark: dataTS.outlet[0].lunch.records['16:41:19'].remark,
  },
  {
    key: 14,
    room: dataTS.outlet[0].lunch.records['16:41:20'].room,
    "Guest Names": dataTS.outlet[0].lunch.records['16:41:20'].guest_names,
    Count: dataTS.outlet[0].lunch.records['16:41:20'].count,
    Pax: dataTS.outlet[0].lunch.records['16:41:20'].pax,  
    Time: '16:41:20',
    "Pkg. Code": dataTS.outlet[0].lunch.records['16:41:20'].package_code,
    Remark: dataTS.outlet[0].lunch.records['16:41:20'].remark,
  },
];
const dataDinner: DataType2[] = [
  {
    key: 13,
    room: dataTS.outlet[0].dinner.records['12:41:19'].room,
    "Guest Names": dataTS.outlet[0].dinner.records['12:41:19'].guest_names,
    Count: dataTS.outlet[0].dinner.records['12:41:19'].count,
    Pax: dataTS.outlet[0].dinner.records['12:41:19'].pax,
    Time: '12:41:19',
    "Pkg. Code": dataTS.outlet[0].dinner.records['12:41:19'].package_code,
    Remark: dataTS.outlet[0].dinner.records['12:41:19'].remark,
  },
  {
    key: 14,
    room: dataTS.outlet[0].dinner.records['12:41:20'].room,
    "Guest Names": dataTS.outlet[0].dinner.records['12:41:20'].guest_names,
    Count: dataTS.outlet[0].dinner.records['12:41:20'].count,
    Pax: dataTS.outlet[0].dinner.records['12:41:20'].pax,  
    Time: '12:41:20',
    "Pkg. Code": dataTS.outlet[0].dinner.records['12:41:20'].package_code,
    Remark: dataTS.outlet[0].dinner.records['12:41:20'].remark,
  },
];
const data5: DataType[] = [
  {
    key: 5,
    date: '',
    RVC: '',
    Period: 'Dinner',
    "A. Count": dataTS.outlet[0].dinner.total.adults_actual.count,
    "C. Count": dataTS.outlet[0].dinner.total.children_actual.count,
    "A. Sales": formattedSalesDAS,
    "C. Sales": formattedSalesDCS,
    Count: dataTS.outlet[0].dinner.total.total_actual.count,
    "Count %": formattedPercentageDCP,
    Sales: formattedSalesDS,
    "Sale %": formattedPercentageDSP,
    description: (
      <Table
        columns={columns2}
        dataSource={dataDinner}
        pagination={false}
      />

    ),
  },
];
const data4: DataType[] = [
  {
    key: 4,
    date: '',
    RVC: '',
    Period: 'Lunch',
    "A. Count": dataTS.outlet[0].lunch.total.adults_actual.count,
    "C. Count": dataTS.outlet[0].lunch.total.children_actual.count,
    "A. Sales": formattedSalesLAS,
    "C. Sales": formattedSalesLCS,
    Count: dataTS.outlet[0].lunch.total.total_actual.count,
    "Count %": formattedPercentageLCP,
    Sales: formattedSalesLS,
    "Sale %": formattedPercentageLSP,
    description: (
      <Table
        columns={columns2}
        dataSource={dataLunch}
        pagination={false}
      />

    ),
  },
];
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
    description: (
      <Table
        columns={columns2}
        dataSource={dataBreakfast}
        pagination={false}
      />

    ),
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
      <>
        <div className="table-wrapper">
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
        </div>
        <div className="table-wrapper">
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => record.description,
              rowExpandable: (record) => record.date !== 'Not Expandable',
            }}
            dataSource={data4}
            showHeader={false}
            pagination={false}
            scroll={{ x: columnsWidth * columns.length }}
          />
        </div>
        <div className="table-wrapper">
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => record.description,
              rowExpandable: (record) => record.date !== 'Not Expandable',
            }}
            dataSource={data5}
            showHeader={false}
            pagination={false}
            scroll={{ x: columnsWidth * columns.length }}
          />
        </div>
      </>
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
