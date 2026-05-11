import { Table } from "antd";
const data = [
  {
    "title": "powder",
    "price": "233",
    "discription": "this is food product"
  },
  {

  }
]
export const ProductTable = ({ data }) => {
  const columns =
      [
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
