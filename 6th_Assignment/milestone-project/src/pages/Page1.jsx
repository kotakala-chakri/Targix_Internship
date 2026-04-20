import { DatePicker, Input, Select, Button } from "antd";
import { useContext, useState, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductTable } from "../components/ProductTable";
import { ProductModal } from "../components/ProductModal";
import dayjs from "dayjs";

export default function Page1() {
  const { state } = useContext(ProductContext);

  const [startDate, setStartDate] = useState(dayjs().subtract(7, "day"));
  const [endDate, setEndDate] = useState(dayjs());

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return state.products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = !category || p.category === category;

      const productDate = dayjs(p.createdAt || new Date());

      const matchesDate =
        productDate.isAfter(startDate.subtract(1, "day")) &&
        productDate.isBefore(endDate.add(1, "day"));

      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [state.products, search, category, startDate, endDate]);

  return (
    <>
      <h2>Products</h2>

      <DatePicker value={startDate} onChange={setStartDate} />

      <DatePicker
        value={endDate}
        onChange={setEndDate}
        disabledDate={(current) => current && current < startDate}
      />

      <Input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <Select
        placeholder="Category"
        style={{ width: 200, marginTop: 10 }}
        onChange={setCategory}
        allowClear
      >
        <Select.Option value="smartphones">Smartphones</Select.Option>
        <Select.Option value="laptops">Laptops</Select.Option>
        <Select.Option value="tablets">Tablets</Select.Option>
      </Select>

      <br />
      <br />

      <Button type="primary" onClick={() => setOpen(true)}>
        Add Product
      </Button>

      <ProductTable data={filtered} />

      <ProductModal open={open} setOpen={setOpen} />
    </>
  );
}
