"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";
const navbarTwo = [
  {
    name: "دسته بندی ",
    href: "/Store",

    subcategories: [
      {
        name: "لپتاپ",
        href: "/Store",
      },
      {
        name: "هارد",
        href: "/Store",
      },
      {
        name: "موبایل",
        href: "/Store",
      },
      {
        name: "آلیوان",
        href: "/Store",
      },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isBrowser) {
      const icons = document.querySelectorAll(".icon");

      icons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
          icon.classList.toggle("open");
        });
      });
    }
  }, []);

  function handleNavbarTwoClick(item: {
    name: string;
    href: string;
    subcategories: { name: string; href: string }[];
  }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex flex-row overflow-hidden mx-auto">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-1/2  transform -translate-x-1/2 z-40 bg-black/70 bg-opacity-90 text-orange-500 w-48 px-4 h-auto overflow-y-auto transition-transform ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } ease-in-out duration-500 rounded-xl shadow-lg`}
          id="sidebar"
        >
          <div className="p-4 text-start text-orange-500">
            <h1 className="text-xl text-center ml-10 animate-pulse">
              <Image
                width={50}
                height={50}
                src="/assets/images/kankashStock(hightqulity)500pps.png"
                alt="Logo"
                className="mt-28"
              />
            </h1>
            <div className="border-b-2 text-white border-white/80 text-xl p-2"></div>

            <ul className="mt-8 font-semibold" dir="rtl">
              <li className="mb-2 text-center">
                <Link href="/" className="block hover:text-indigo-400">
                  خانه
                </Link>
              </li>
              <li className="mb-2 text-center">
                <Link href="/guarantee" className="block hover:text-indigo-400">
                  درباره ما
                </Link>
              </li>
              <li className="mb-2 text-center">
                <Link href="/repair" className="block hover:text-indigo-400">
                  تعمیر و تعویض هارد
                </Link>
              </li>
              <li className="mb-2 text-center">
                <Link href="/Store" className="block hover:text-indigo-400">
                  لیست محصولات
                </Link>
              </li>

              <li>
                <span className="lg:hidden block text-center mt-2">
                  <Link
                    href="/Store"
                    className=" font-semibold text-orange-500"
                  >
                    باشگاه مشتریان
                  </Link>
                </span>
                <span className="font-semibold text-orange-500 text-center lg:hidden block mt-3">
                  <Link href="/blogs">مقالات</Link>
                </span>
              </li>

              <li>
                <button className="text-white w-full mt-2 font-bold bg-orange-500 lg:hidden block rounded-lg p-2 hover:bg-transparent hover:text-orange-500 transition-all duration-200">
                  <Link href="/login">ورود </Link>
                </button>
              </li>
              <li>
                <button className="text-white w-full mb-2 mt-2 font-bold bg-orange-500 lg:hidden block rounded-lg p-2 hover:bg-transparent hover:text-orange-500 transition-all duration-200">
                  <Link href="/signup">ثبت نام</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div
          className={`fixed 
            
           left-0 right-0 z-40 transition-all duration-300`}
        >
          <div
            className=" h-fit 
      "
          >
            <Image
              src={"/assets/images/بنر باریک بالای صفحه.png"}
              width={4000}
              height={50}
              alt="Logo"
              className="w-full h-[50px]"
            />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden  mb-2 rounded-md shadow-md shadow-orange-300">
            {/* Navbar */}
            <div
              className={` 
                 bg-white
               mx-0.5 px-0.5 w-full`}
            >
              <div className="container mx-auto">
                <div className="flex justify-between items-center px-2">
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
                        className="block mr-1 md:mr-12 "
                      />
                    </button>
                  </div>
                  <button>
                    <Link href="/cart">
                      <svg
                        width="30px"
                        height="64px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                            stroke="#ea580c"
                            strokeWidth="1.5"
                          ></path>{" "}
                          <path
                            d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                            stroke="#ea580c"
                            strokeWidth="1.5"
                          ></path>{" "}
                          <path
                            d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                            stroke="#ea580c"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </Link>
                  </button>

                  <span className="font-semibold ml-12 text-gray-500 hidden lg:block">
                    <Link href="/">درخواست پیش فاکتور</Link>
                  </span>

                  {/* Center: Search Bar */}
                  <div className="flex-auto mx-4 " dir="rtl">
                    <div
                      id="search-bar"
                      className="w-[90%] md:w-[50%] bg-white rounded-md shadow-lg"
                      dir="rtl"
                    >
                      <form className="flex items-center justify-center p-2 sm:h-10 md-h-10 lg:h-auto ">
                        <input
                          type="text"
                          placeholder="جستجو"
                          className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                        />
                        <button
                          type="submit"
                          className="bg-gray-800 sm:h-7 md:h-7 lg:h-auto pb-3 text-sm text-white rounded-md px-2 lg:px-4 py-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                        >
                          جستجو
                        </button>
                      </form>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="hidden lg:block">
                        <Link
                          href="/Store"
                          className="mr-2 font-semibold text-gray-500"
                        >
                          باشگاه مشتریان
                        </Link>
                      </span>
                      <span className="font-semibold text-gray-500 hidden lg:block">
                        <Link href="/blogs" className="ml-2">
                          مقالات
                        </Link>
                      </span>

                      <div className=" items-center border-2 border-gray-300 p-2 rounded-xl hidden lg:inline-flex">
                        <button className="text-orange-600 hover:bg-orange-500 font-bold hidden lg:block rounded-lg p-2 hover:text-white transition-all duration-200">
                          <Link href="/login">ورود</Link>
                        </button>
                        <span className="mx-4 text-2xl text-gray-400"> | </span>
                        <button className="text-white font-bold bg-orange-500 hidden lg:block rounded-lg p-2 hover:bg-transparent hover:text-orange-500 transition-all duration-200">
                          <Link href="/signup">ثبت نام</Link>
                        </button>
                      </div>

                      <div>
                        {navbarTwo.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center"
                            onMouseEnter={() => setShowSubcategories(true)}
                            onMouseLeave={() => setShowSubcategories(false)}
                          >
                            <Link
                              href={item.href}
                              className="text-white font-bold bg-orange-500 text-[14px] lg:text-base text-nowrap block rounded-lg p-2 hover:bg-transparent hover:text-orange-500 transition-all duration-200"
                              onClick={() => handleNavbarTwoClick(item)}
                            >
                              {item.name}
                            </Link>

                            {/* Subcategories dropdown */}
                            {showSubcategories && (
                              <div className="absolute right-2 top-14 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                {item.subcategories.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block px-4 text-right py-2 text-sm font-semibold text-gray-800 hover:bg-orange-500 hover:text-white"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: SVG Button */}
                </div>
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
