import { useReducer, useEffect } from "react";
import { productReducer } from "./productReducer";
import { ProductContext } from "./ProductContext";
import { fetchProducts } from "../api/productApi";

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
  });

  useEffect(() => {
    fetchProducts().then((res) => {
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data.products,
      });
    });
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
