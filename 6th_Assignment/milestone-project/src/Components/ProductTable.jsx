import { Table } from "antd";

export const ProductTable = ({ data }) => {
  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={{ pageSize: 6 }}
    />
  );
};
