"use client"
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/api/products");
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        
        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 px-4">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
