import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
// import Table from 'antd/es/table'; // for js
// import 'antd/es/table/style/css';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Condition',
    dataIndex: 'condition',
    key: 'condition',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'addresses',
    key: 'addresses',
  },
];

// const initialData = [
//   {
//     id: 1,
//     name: 'Test 1',
//     condition: true,
//     email: 'test1@gmail.com',
//     addresses: ['test1@mail.ru', 'test1@yandex.ru'],
//   },
//   {
//     id: 2,
//     name: 'Test 2',
//     condition: true,
//     email: 'test2@gmail.com',
//     addresses: ['test2@mail.ru', 'test2@yandex.ru'],
//   },
//   {
//     id: 3,
//     name: 'Test 3',
//     condition: true,
//     email: 'test3@gmail.com',
//     addresses: ['test3@mail.ru', 'test3@yandex.ru'],
//   },
// ];

function TableView({ data }) {
  return <Table dataSource={data} columns={columns} rowKey="id" />;
}
TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// function TableView() {
//   return <Table dataSource={initialData} columns={columns} rowKey="id" />;
// }

export default TableView;
