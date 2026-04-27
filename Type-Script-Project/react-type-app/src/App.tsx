import { useState } from "react";
import type { Product } from "./types";

import {
  Container,
  Title,
  Input,
  Select,
  Button,
  List,
  ListItem,
} from "./styles";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const [filter, setFilter] = useState<string>("All");

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      category,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice(0);
    setCategory("");
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <Container
     style={{ padding: "20px" }}>
      <Title>Product App</Title>

      
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </Select>

      <Button onClick={addProduct}>Add</Button>

      <hr />

      
      <h3>Filter</h3>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </Select>

      
      <List>
        {filteredProducts.map((p) => (
          <ListItem key={p.id}>
            {p.name} - ₹{p.price} ({p.category})
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;