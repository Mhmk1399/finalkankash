"use client";
import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Image from "next/image";

interface ProductListProps {
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const allProducts = response.data;
        
        // Filter products by category if category prop is provided
        const filteredProducts = category 
          ? allProducts.filter((product: any) => product.category === category)
          : allProducts;
        
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: -300, // Adjust this value based on how much you want to scroll
        behavior: "smooth",
      });
    }
  };
  // Scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: 300, // Adjust this value based on how much you want to scroll
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return <p>در حال بارگذاری محصولات...</p>;
  }

  return (
    <div className="relative border-4 border-orange-600 px-6 py-10 rounded-xl mt-4">
      <div className="w-11/12 mx-auto text-center -mt-8 rounded-2xl max-h-[40px] bg-orange-500">
        <Image
          src="/assets/images/1.jpg"
          width={500}
          height={500}
          alt="product-list-title"
          className="object-cover w-full max-h-[50px] rounded-2xl"
        />
      </div>
      {/* Previous Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 top-8 transform -translate-y-1/2 bg-orange-600 font-bold text-black p-1.5 rounded-full z-10"
        aria-label="Previous products"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>

      {/* Scrollable Product List */}
      <div ref={scrollContainerRef} className="overflow-x-auto">
        <div className="flex space-x-2 px-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={scrollRight}
        className="absolute right-1 top-8 transform -translate-y-1/2 bg-orange-600 font-bold text-black p-1.5 rounded-full z-10"
        aria-label="Next products"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </div>
  );
};

export default ProductList;
