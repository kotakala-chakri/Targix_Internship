import axios from "axios";

export const fetchProducts = () =>
   axios.get("https://dummyjson.com/products");

export const addProduct = (data) =>
  axios.post("https://dummyjson.com/products/add", data);
