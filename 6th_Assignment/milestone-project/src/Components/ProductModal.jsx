import { Modal, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

export const ProductModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleOk = () => {
    form.validateFields().then((values) => {
      setOpen(false);
      navigate("/confirm", { state: values });
    });
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={() => setOpen(false)}
      title="Add Product"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select category" }]}
        >
          <Select placeholder="Select category">
            <Select.Option value="smartphones">Smartphones</Select.Option>
            <Select.Option value="laptops">Laptops</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
