"use client";
  import { useState } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import LaptopWarranty from "../../components/(ui)/LaptopWarranty/LaptopWarranty";
  import HardDriveWarranty from "../../components/(ui)/HardDriveWarranty/HardDriveWarranty";
  
  const Page = () => {
    const [selectedGuarantee, setSelectedGuarantee] = useState("");
  
    const renderContentGuarantee = () => {
      switch (selectedGuarantee) {
        case "hard":
          return <HardDriveWarranty />;
        case "laptop":
          return <LaptopWarranty />;
        default:
          return null;
      }
    };
  
    return (
      <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-100 via-orange-200 to-white" dir="rtl">
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4 text-center">
            <button
              onClick={() => setSelectedGuarantee("hard")}
              className="text-gray-800 border-2 border-gold bg-gradient-to-l from-gray-100 to-orange-100 px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-gray-200 focus:ring-2 focus:ring-gold"
            >
              گارانتی هارد
            </button>
            <button
              onClick={() => setSelectedGuarantee("laptop")}
              className="text-gray-800 border-2 border-gold bg-gradient-to-r from-gray-100 to-orange-100 px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-gray-200 focus:ring-2 focus:ring-gold"
            >
              گارانتی لپ‌تاپ
            </button>
          </div>
  
          <div className="mt-6 mb-8">
            <Image
              src="/assets/images/guarantee-hard-laptop.webp"
              width={4000}
              height={4000}
              alt="SSD یا HDD"
              className="rounded-lg w-full shadow-sm"
            />
          </div>
  
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-4">
            صفحه ضمانت و گارانتی
          </h1>
  
          {renderContentGuarantee()}
  
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              شما عزیزان میتوانید برای فعال کردن گارانتی روی دکمه‌ی زیر کلیک کنید
              و اقدام به فعال‌سازی گارانتی بکنید.
            </p>
            <button className="bg-gradient-to-r from-white to-orange-100 text-dark text-lg font-bold py-3 px-6 rounded-full transition hover:shadow-md">
              <Link href="/signup">فعالسازی گارانتی</Link>
            </button>
          </div>
  
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">
              همچنین برای تماس با پشتیبانی میتوانید از طریق دکمه‌ی زیر تماس حاصل
              فرمایید.
            </p>
            <button className="bg-white mx-auto text-center border-2 border-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full flex justify-center items-center shadow-md transition hover:bg-gray-100">
              <Link href="tel:+989356139033">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="mx-auto mb-1"
                >
                  <path
                    d="M30,22.3l-2.5-2.5c-1.3-1.3-3.5-1.3-4.8,0l-0.8,0.8c-0.5,0.5-1.4,0.5-2,0l-4.2-4.2l-4.2-4.2 c-0.3-0.3-0.4-0.6-0.4-1s0.1-0.7,0.4-1l0.9-0.8c1.3-1.3,1.3-3.5,0-4.8L9.7,2C8.5,0.7,6.2,0.7,4.9,2L4.1,2.8c-2,2-3.1,4.6-3.1,7.5 s1.1,5.5,3.1,7.5l5.1,5.1l5.1,5.1c2,2,4.7,3.1,7.5,3.1s5.5-1.1,7.5-3.1l0.9-0.8c0.6-0.6,1-1.5,1-2.4C31,23.8,30.7,22.9,30,22.3z"
                    fill="#1f2937"
                  />
                </svg>
                تماس با پشتیبانی
              </Link>
            </button>
          </div>
  
          <div className="mt-8">
            <iframe
              src="https://nshn.ir/_bvhK3IxO3Kx"
              width="100%"
              height="450"
              className="rounded-lg shadow-sm"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default Page;
  