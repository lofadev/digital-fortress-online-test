import { Table, TableProps, Tag } from 'antd';
import React from 'react';
import { Edit, Remove } from '~/assets';
import { ActionsStyled } from './styled';
interface DataType {
  key: number;
  projectName: string;
  lastAssessed: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Project',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: 'Last assessed',
    dataIndex: 'lastAssessed',
    key: 'lastAssessed',
  },
  {
    title: 'License use',
    dataIndex: 'licenseUse',
    key: 'licenseUse',
  },
  {
    key: 'actions',
    dataIndex: 'actions',
    width: '116px',
  },
];

const data = Array.from({ length: 10 }, (_, index) => {
  return {
    key: index,
    projectName: 'Sisyphus',
    lastAssessed: '22 Jan 2022',
    licenseUse: (
      <>
        <Tag color="success">active</Tag>
        <Tag color="warning">Customer data</Tag>
        <Tag color="error">Admin</Tag>
      </>
    ),
    actions: (
      <ActionsStyled>
        <img src={Remove} alt="remove" />
        <img src={Edit} alt="edit" />
      </ActionsStyled>
    ),
  };
});

const TableDashBoard: React.FC = () => {
  return <Table pagination={false} rowSelection={{ selectedRowKeys: [1] }} columns={columns} dataSource={data} />;
};

export default TableDashBoard;
