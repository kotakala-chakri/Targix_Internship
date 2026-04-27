import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Button, Form, Input, Select } from "antd";
import { addProduct } from "../api/productApi";

export default function Page2() {
  const { state } = useLocation();
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = form.getFieldsValue();

    const res = await addProduct({
      ...values,
      createdAt: new Date(),
    });

    dispatch({ type: "ADD_PRODUCT", payload: res.data });

    navigate("/");
  };

  return (
    <>
      <h2>Confirm Product</h2>

      <Form form={form} layout="vertical" initialValues={state}>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Price">
          <Input type="number" />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select>
            <Select.Option value="smartphones">Smartphones</Select.Option>
            <Select.Option value="laptops">Laptops</Select.Option>
            <Select.Option value="tablets">Tablets</Select.Option>
          </Select>
        </Form.Item>
      </Form>

      <Button type="primary" onClick={handleSubmit}>
        Confirm & Submit
      </Button>
    </>
  );
}
