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
  color: string[];
  info: string[];
  hard:string
  gpu:string
  cpu:string
  ram:string
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
          console.log(data);
          
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
    <div className="bg-gray-100  py-24" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <Image
                className="w-full h-full object-cover hover:opacity-85 transition duration-150 ease-in-out rounded-lg shadow-md hover:shadow-lg"
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
            </div>
            <div className="flex -mx-2 mb-4 ">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 text-sm">
                 خرید
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 text-gray-800 text-sm  py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  علاقه مندی ها
                </button>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
          

            

            {/* Select Color */}
            <h2>مشخصات</h2>
            <div className="my-4   gap-3 grid grid-cols-3">
              <span className="text-sm py-2 px-4 bg-slate-200 rounded-lg text-gray-500 flex flex-col col-span-1">
                رنگ های موجود
                <span className=' font-medium text-black px-2'>{product.color}</span>
              </span>
              <span className="text-sm py-2 px-4 bg-slate-200 rounded-lg text-gray-500 flex flex-col col-span-1">
              حافظه داخلی : 
                <span className=' font-medium  text-black px-2'>{product.hard} </span>
              </span>
              <span className="text-sm py-2 px-4 bg-slate-200 rounded-lg text-gray-500 flex flex-col col-span-1">
              گرافیک : 
                <span className='font-medium  text-black px-2'>{product.gpu}</span>
              </span>

              <span className="text-sm py-2 px-4 bg-slate-200 rounded-lg text-gray-500 flex flex-col col-span-1">
                رم: 
                <span className='font-medium text-black px-2'>{product.ram}</span>
              </span>
              <span className="text-sm py-2 px-4 bg-slate-200 rounded-lg text-gray-500 flex flex-col col-span-1">
              پردازنده: 
                <span className='font-medium text-black px-2'>{product.cpu}</span>
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
              <span className=" text-gray-700 my-4">
                توضیحات
              </span>
              <p className="text-gray-600 text-sm mt-2 bg-slate-200 py-2 px-2 rounded-lg">
                {product.description}
              </p>
            </div>
            {/* Price and Availability */}
            <div className="flex justify-between  my-4 border border-gray-300 py-4 rounded-lg items-center">
              <div className="w-full flex justify-between mx-5">
                <span className="font-bold text-orange-500  mx-2">
                  قیمت :
                </span>
                <span className="text-gray-600 ">
                  تومان:{product.price.toLocaleString('fa-IR')}
                </span>
              </div> 
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
