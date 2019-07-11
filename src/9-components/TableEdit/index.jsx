import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

// import CellName from './CellName';
import CellBoolean from './CellBoolean';

const getColumns = () => {
  // const onClick = () => {
  //   // event.preventDefault();
  //   // if (event.target.dataset && event.target.dataset.id) {
  //   //   onEditRow(event.target.dataset.id);
  //   // }
  // };

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
      // render: (text, record) => <CellName id={record.id} name={record.name} onClick={onClick} />,
    },
    {
      title: 'Condition',
      dataIndex: 'condition',
      key: 'condition',
      render: (text, record) => <CellBoolean value={record.condition} />,
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
      render: (text, record) => record.addresses.join(', '),
    },
  ];

  return columns;
};

class TableView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.columns = getColumns();
  }

  render() {
    const { objectsList } = this.props;
    return <Table dataSource={objectsList} columns={this.columns} rowKey="id" />;
  }
}
TableView.propTypes = {
  objectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onEditObject: PropTypes.func.isRequired,
};

export default TableView;
