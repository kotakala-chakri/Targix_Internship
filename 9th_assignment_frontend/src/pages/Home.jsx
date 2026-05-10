import { useEffect, useState } from "react";
import {
    getProducts,
    getCategories,
    addCategory,
    addProduct,
    deleteProduct,
} from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [categoryName, setCategoryName] = useState("");

    const [productData, setProductData] = useState({
        name: "",
        price: "",
        categoryId: "",
    });

    const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
    };

    useEffect(() => {
        (async () => {
            const productsResponse = await getProducts();
            setProducts(productsResponse.data);

            const categoriesResponse = await getCategories();
            setCategories(categoriesResponse.data);
        })();
    }, []);

    const handleAddCategory = async () => {
        if (!categoryName) return;

        await addCategory({
            name: categoryName,
        });

        setCategoryName("");
        fetchCategories();
    };

    const handleAddProduct = async () => {
        if (
            !productData.name ||
            !productData.price ||
            !productData.categoryId
        ) {
            return;
        }

        await addProduct({
            name: productData.name,
            price: productData.price,
            category: {
                id: productData.categoryId,
            },
        });

        setProductData({
            name: "",
            price: "",
            categoryId: "",
        });

        await fetchProducts();
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        await fetchProducts();
    };

    return (
        <div className="container">
            <h1>Product Management</h1>

            <div className="card">
                <h2>Add Category</h2>

                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />

                <button onClick={handleAddCategory}>
                    Add Category
                </button>
            </div>

            <div className="card">
                <h2>Add Product</h2>

                <input
                    type="text"
                    placeholder="Product Name"
                    value={productData.name}
                    onChange={(e) =>
                        setProductData({
                            ...productData,
                            name: e.target.value,
                        })
                    }
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={productData.price}
                    onChange={(e) =>
                        setProductData({
                            ...productData,
                            price: e.target.value,
                        })
                    }
                />

                <select
                    value={productData.categoryId}
                    onChange={(e) =>
                        setProductData({
                            ...productData,
                            categoryId: e.target.value,
                        })
                    }
                >
                    <option value="">Select Category</option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>

                <button onClick={handleAddProduct}>
                    Add Product
                </button>
            </div>

            <div className="card">
                <h2>Products</h2>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category?.name}</td>

                            <td>
                                <button
                                    onClick={() =>
                                        handleDelete(product.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;