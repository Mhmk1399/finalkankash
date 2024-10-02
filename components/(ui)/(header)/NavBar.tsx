"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const isBrowser = typeof window !== "undefined";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isBrowser) {
      const icons = document.querySelectorAll('.icon');
  
      icons.forEach(icon => {  
        icon.addEventListener('click', (event) => {
          icon.classList.toggle("open");
        });
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-row overflow-hidden mx-auto">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 bg-gray-200 bg-opacity-90 text-orange-500 w-48 px-4 h-auto overflow-y-auto transition-transform ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } ease-in-out duration-500 rounded-lg shadow-lg`}
          id="sidebar"
        >
          <div className="p-4 text-start text-orange-600">
            
            <h1 className="text-2xl text-center mx-auto animate-pulse">
              <Image
                width={50}
                height={30}
                src="/assets/images/kankashStock(hightqulity)500pps.png"
                alt="Logo"
                className="mx-auto"
              />
            </h1>
            <ul className="mt-4 font-semibold" dir="rtl">
              <li className="mb-2">
                <Link href="/" className="block hover:text-indigo-400">
                  خانه
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/guarantee" className="block hover:text-indigo-400">
                  درباره ما
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/hard-drive-repair"
                  className="block hover:text-indigo-400"
                >
                  تعمیر و تعویض هارد
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Store" className="block hover:text-indigo-400">
                  لیست محصولات
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-gray-100   mx-0.5 px-0.5 w-full">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                {/* Left: Image */}
                <div className="flex-shrink-0">
                  <button
                    className="mt-2 ml-1 text-2xl font-bold hover:text-gray-400 transition-transform transform hover:scale-110"
                    onClick={toggleSidebar}
                  >
                    <Image
                    width={65}
                    height={50}
                    src="/assets/images/kankashStock(hightqulity)500pps.png"
                    alt="Logo"
                    className="block"
                  />
                    
                  </button>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 mx-4 " dir="rtl">
                  <div
                    id="search-bar"
                    className="w-full bg-white rounded-md shadow-lg"
                    dir="rtl"
                  >
                    <form className="flex items-center justify-center p-2 sm:h-10 md-h-10 lg:h-auto" >
                      <input
                        type="text"
                        placeholder=" سریع محصولات"
                        className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-gray-800 sm:h-7 md:h-7 lg:h-auto pb-3 text-sm text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                      >
                        جستجو
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right: SVG Button */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ease-in-out duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default Navbar;
