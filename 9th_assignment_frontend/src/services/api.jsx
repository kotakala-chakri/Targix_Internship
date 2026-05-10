import axios from "axios";

const API_URL = "http://localhost:8080";

export const getProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export const getCategories = () => {
    return axios.get(`${API_URL}/categories`);
};

export const addCategory = (category) => {
    return axios.post(`${API_URL}/categories`, category);
};

export const addProduct = (product) => {
    return axios.post(`${API_URL}/products`, product);
};

export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/products/${id}`);
};