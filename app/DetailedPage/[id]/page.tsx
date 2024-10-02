"use client"
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';


interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  info: string[];
}

const ProductPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch product data from the API
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`/api/products/${id}`);
          const data = await res.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  // Show loading state while fetching data
  if (loading) {
    return <div className="text-center mt-10">Loading product details...</div>;
  }

  // Show message if product not found
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <Image
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 text-sm">
                 خرید
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 text-sm dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  علاقه مندی ها
                </button>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>

            {/* Price and Availability */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-orange-500 dark:text-orange-500 mx-2">
                  قیمت :
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  تومان{product.price.toLocaleString('fa-IR')}
                </span>
              </div>
            </div>

            {/* Select Color */}
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                رنگ های موجود
              </span>
              {/* <div className="flex items-center mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full ${color} mr-2 ${selectedColor === color ? 'ring-2 ring-gray-400' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div> */}
            </div>

            {/* Product Description */}
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                توضیحات
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
