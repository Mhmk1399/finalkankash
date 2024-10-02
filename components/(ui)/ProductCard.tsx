import Link from "next/link";
import Image from "next/image";
import { FaMicrochip, FaMemory, FaHdd, FaDesktop } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  cpu: string;
  ram: string;
  hard: string;
  gpu: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/DetailedPage/${product._id}`} passHref>
      <div className="flex-shrink-0 w-80 sm:w-96 lg:w-72 xl:w-80 transition-transform duration-300 transform hover:scale-105 mt-8 cursor-pointer">
        <div className="relative border border-gray-200 rounded-lg shadow-md bg-white p-5 lg:p-6 hover:shadow-lg">
          {/* Product Image */}
          <div className="flex justify-center items-center mb-6">
            <Image
              src={product.image}
              width={150}
              height={200}
              alt={product.name}
              className="rounded-lg w-auto h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="text-center">
            <p className="text-lg lg:text-2xl font-semibold text-gray-900 mb-4">
              {product.name}
            </p>

            {/* Product Specs with Icons */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center space-x-2 bg-gray-100 p-3 rounded-lg">
                <FaMicrochip className="text-gray-700" size={20} />
                <span className="text-sm text-gray-700 font-medium">
                  CPU: {product.cpu}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gray-100 p-3 rounded-lg">
                <FaMemory className="text-gray-700" size={20} />
                <span className="text-sm text-gray-700 font-medium">
                  RAM: {product.ram}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gray-100 p-3 rounded-lg">
                <FaHdd className="text-gray-700" size={20} />
                <span className="text-sm text-gray-700 font-medium">
                  HDD: {product.hard}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-gray-100 p-3 rounded-lg">
                <FaDesktop className="text-gray-700" size={20} />
                <span className="text-sm text-gray-700 font-medium">
                  GPU: {product.gpu}
                </span>
              </div>
            </div>

            {/* Product Price */}
            <div className="inline-block px-5 py-3 bg-gray-900 text-white rounded-lg text-sm lg:text-lg font-medium hover:bg-gray-800 transition-colors">
              تومان {product.price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
