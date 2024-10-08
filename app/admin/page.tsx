"use client";
import { useEffect, useState } from "react"
import axios from 'axios'
import Trending from "../../components/(ui)/(admin)/(forms)/trending/trending";
import Banners from "../../components/(ui)/(admin)/(forms)/banners/banners";
import Products from "../../components/(ui)/(admin)/(forms)/products/products";
import Categories from "../../components/(ui)/(admin)/(forms)/categories/categories";
import { kankashInfo } from "@/lib/info";
import TableComponent from "@/components/(ui)/(admin)/(forms)/table/table";
import FileUploadForm from "@/components/(ui)/(admin)/(forms)/FileUploadForm";
import{Orders} from "@/lib/table";
const DropdownSwitchComponent = () => {
  // State variables for managing selected option, table details, and header
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [tableDetails, setTableDetails] = useState<any>(null);
  const [header, setHeader] = useState<string>('');
  const [tablekey, setTablekey] = useState<string>('');
  // Handler for dropdown selection change
  
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setTableDetails(null);
    console.log(tablekey);

    // Set header based on selected option
    if (event.target.value === 'products') {
      setHeader('محصولات')
      setTablekey('products')
    } else if (event.target.value === 'banners') {
      setHeader('بنرها')
      setTablekey('banners')
    } else if (event.target.value === 'categories') {
      setHeader('دسته بندی ها')
      setTablekey('categories')
    } else if (event.target.value === 'trending') {
      setHeader('محصولات پرفروش')
      setTablekey('trending')
    } else if (event.target.value === 'users') {
      setHeader('کاربران')
      setTablekey('users')
    } else if (event.target.value === 'upload') {
    }else if (event.target.value === 'orders') {
      setHeader('سفارشات')
      setTablekey('orders')
      setTableDetails(Orders)
    }
  };

  // Fetch data when selected option changes
  useEffect(() => {
    if (selectedOption) {
      axios.get('api/' + selectedOption)
        .then(response => {
          setTableDetails(response.data);
          console.log(response.data);
        }).catch(error => { console.log(error) });
    }
  }, [selectedOption]);

  // Render appropriate component based on selected option
  const renderContent = () => {
    switch (selectedOption) {
      case 'trending':
        return (<Trending />);
      case 'banners':
        return (<Banners />);
      case 'products':
        return (<Products />);
      case 'categories':
        return (<Categories />);
      case 'users':
        return (<div></div>);
      case 'upload':
        return (<FileUploadForm />);
        case 'orders':
        return (<div></div>);
      default:
        return <div className="mt-10 text-xl bg-orange-600 text-white px-4 py-2 rounded-md text-center">.لطفا گزینه ای را از منوی بالا انتخاب کنید</div>;
    }
  }; return (
    <div className="p-4 flex flex-col justify-center items-center">
      {/* Dropdown for selecting category */}
      <select
        id="category"
        name="category"
        className="mt-1 mb-8 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        onChange={handleOptionChange}
      >
        {kankashInfo.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Render content based on selected option */}
      <div>
        {renderContent()}
      </div>

      {/* Render table component if table details are available */}
      {tableDetails && <TableComponent header={header} data={tableDetails} tableKey={tablekey} />}
    </div>
  );
};

export default DropdownSwitchComponent;
