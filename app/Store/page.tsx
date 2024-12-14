'use client'
import ProductCard from "@/components/(ui)/ProductCard";
import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdAttachMoney, MdBrandingWatermark } from 'react-icons/md';
type CategoryType = 'price' | 'brand' | 'rating';

interface CategoryState {
  expanded: boolean;
  options: string[];
}

interface CategoriesState {
  price: CategoryState;
  brand: CategoryState;
  rating: CategoryState;
}

interface SelectedFiltersState {
  price: number[];
  brand: string[];
  rating: string[];
}
interface FilterComponentProps {
  onFilterChange: (filters: SelectedFiltersState) => void;
}
const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const [filteredData, setFilteredData] = useState(null);
  const [categories, setCategories] = useState<CategoriesState>({
    price: { expanded: true, options: [] },
    brand: { expanded: false, options: ['Apple', 'Samsung', 'Google', 'Sony', 'LG'] },
    rating: { expanded: false, options: ['5 Stars', '4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Star & Up'] }
  });

  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersState>({
    price: [0, 250000000],
    brand: [],
    rating: []
  });
  

  const applyFilters = () => {
    const filteredProducts = products.filter((product: any) => {
      const priceInRange = product.price >= selectedFilters.price[0] && product.price <= selectedFilters.price[1];
      const brandMatch = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(product.brand);
      const ratingMatch = selectedFilters.rating.length === 0 || selectedFilters.rating.some(rating => product.rating >= parseInt(rating));
  
      return priceInRange && brandMatch && ratingMatch;
    });
  
    setFilteredData(filteredProducts as unknown as SetStateAction<null>);
  };

  const handleCheckboxChange = (category: CategoryType, option: string | number) => {
    setSelectedFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(option as never)
        ? prevFilters[category].filter((item: string | number) => item !== option)
        : [...prevFilters[category], option as never];
      const newFilters = { ...prevFilters, [category]: updatedCategory };
      return newFilters;
    });
    applyFilters();
  };
  
  const handlePriceChange = (event: any , index: number) => {
    const newPriceRange = [...selectedFilters.price];
    newPriceRange[index] = parseInt(event.target.value, 10);
    setSelectedFilters({ ...selectedFilters, price: newPriceRange });
    applyFilters();
  };
  

  const handleFilterChange = (filters: SetStateAction<null>) => {
    setFilteredData(filters);
    // You can perform additional actions with the filtered data here
  };

  const toggleCategory = (category: CategoryType) => {
    setCategories({
      ...categories,
      [category]: { ...categories[category], expanded: !categories[category].expanded }
    });
  };

  const resetFilters = () => {
    setSelectedFilters({ price: [0, 250000000], brand: [], rating: [] });
    applyFilters();
    setFilteredData(null);
    
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const getCategoryIcon = (category: CategoryType) => {
    switch (category) {
      case 'price':
        return <MdAttachMoney className="text-green-500" />;
      case 'brand':
        return <MdBrandingWatermark className="text-blue-500" />;
      case 'rating':
        return <FaStar className="text-yellow-400" />;
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-auto p-4 bg-gray-200 py-8 px-2 lg:px-12 my-2 rounded-lg mx-1 overflow-x-auto mt-5">
      <div className=" lg:text-white lg:p-6 lg:shadow-lg lg:overflow-y-auto ">
       
      </div>
      {/* Filter Component */}
      <div className="mb-8">
      </div>

      {/* Page Title and Description */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <p className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto h-auto py-2 text-gray-900 bg-white px-4 lg:px-8 mt-2">
          فروشگاه دیجیتال کنکاش استوک
        </p>

        <h1 className="text-xl lg:text-2xl text-center shadow-lg rounded-2xl w-auto py-2 text-gray-900 px-4 lg:px-8 bg-white">
          بهترین کیفیت را با کمترین قیمت تجربه کنید
        </h1>
      </div>

      {/* Product Cards */}
      {/* Product Cards */}
<div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-6">
  {(filteredData || products).map((product, index) => (
    <ProductCard key={index} product={product} />
  ))}
</div>

    </div>
  );
}
export default Page;
