"use client";
import EmblaCarousel from "@/components/(ui)/(header)/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/(ui)/BlogCard";
import ProductList from "@/components/(ui)/ProductList";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const categoryItems = [
  {
    id: 1,
    name: "اسمبل هوشمند",
    image: "/assets/images/assemble.png",
    href: "/Store",
  },
  {
    id: 2,
    name: "کارت گرافیک",
    image: "/assets/images/gpu.png",
    href: "/Store",
  },
  {
    id: 3,
    name: "لپ تاپ",
    image: "/assets/images/laptop.png",
    href: "/Store",
  },
  {
    id: 4,
    name: "ارتقا لپ تاپ",
    image: "/assets/images/upgrade.png",
    href: "/Store",
  },
  {
    id: 5,
    name: "هارد",
    image: "/assets/images/hard.png",
    href: "/Store",
  },
  {
    id: 6,
    name: " ریکاوری و تعمیر هارد ",
    image: "/assets/images/recoveryhard.png",
    href: "/Store",
  },
  {
    id: 7,
    name: "قطعات هارد",
    image: "/assets/images/hdd.png",
    href: "/Store",
  },
  {
    id: 8,
    name: " گارانتی ",
    image: "/assets/images/guarantee.png",
    href: "/Store",
  },
];
const socialIcon = [
  {
    name: "اینستاگرام",
    href: "https://www.instagram.com/kankash.ir/",
    icon: "/assets/images/instagram.png",
    alt: "instagram",
  },
  {
    name: "تلگرام",
    href: "https://t.me/kankash_ir",
    icon: "/assets/images/telegram.png",
    alt: "telegram",
  },
  {
    name: "واتساپ",
    href: "https://wa.me/989127777777",
    icon: "/assets/images/whatsapp.png",
    alt: "whatsapp",
  },
  {
    name: "دیوار",
    href: "https://divar.ir/s/kankash",
    icon: "/assets/images/divar.png",
    alt: "divar",
  },
  {
    name: "مبیت",
    href: "https://twitter.com/kankash_ir",
    icon: "/assets/images/mobit.svg",
    alt: "mobit",
  },
  {
    name: "ترب",
    href: "https://torob.ir/kankash_ir",
    icon: "/assets/images/torob-logo.svg",
    alt: "torob",
  },
  {
    name: "ایسام",
    href: "https://torob.ir/kankash_ir",
    icon: "/assets/images/torob-logo.svg",
    alt: "esam",
  },
];

const Page = () => {
  return (
    <>
      <div className="flex flex-col w-full h-auto py-2  lg:py-4 overflow-hidden">
        <div className="flex flex-col w-full mt-[60px] justify-center items-center shadow-lg rounded-lg py-4 px-2 lg:py-6 lg:px-4">
          <EmblaCarousel options={OPTIONS} />
        </div>
        <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center mt-5 bg-transparent text-black rounded-xl p-4 gap-2">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="border-l-4 border-gray-300 p-2">
                <Image
                  src={item.image}
                  width={150}
                  height={100}
                  alt={item.name}
                  className="rounded-lg"
                />
              </div>
              <Link href={item.href} className="mt-2">
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* banner discount */}

        <div className="flex flex-col items-center justify-center mt-5 bg-transparent text-black rounded-xl">
          <Image
            src="/assets/images/1.png"
            width={1000}
            height={500}
            alt="banner"
            className="lg:w-[1920px] lg:h-[430px] w-[800px] h-[300px] rounded-xl object-contain"
          />
        </div>
        {/* social media */}
        <div className="flex flex-wrap lg:flex-row items-center justify-center mt-5 bg-transparent text-black rounded-xl p-4 gap-8 lg:gap-20">
          {socialIcon.map((item) => (
            <div key={item.name}>
              <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out">
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 rounded-xl bg-white p-4"
                >
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="animate-pulse"
                  />
                </Link>
                <p className="text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* banner guarantee */}

        <div className="flex flex-col items-center justify-center mt-5 bg-transparent text-black rounded-xl">
          <Image
            src="/assets/images/22.png"
            width={5000}
            height={4000}
            alt="banner"
            className="lg:w-[1920px] lg:h-[430px] w-[800px] h-[300px] rounded-xl object-contain"
          />
        </div>

        {/* products */}

        <div
          className=" grid-cols-9 gap-1 w-full lg:grid-cols-12 lg:gap-4"
          id="left-to-right"
        >
          <h3 className="text-black text-2xl text-center mt-6 p-4">
            پیشنهادهای کنکاش استوک
          </h3>
          <ProductList category="66e596bb5497c1e6b9956924" />
          <ProductList category="66fd70acd7604a0c6768552f" />
          <ProductList category="66f01e93add005e46dee9afa" />
          <ProductList category="66e57e745497c1e6b99568d8" />

          {/* banner default*/}

          <div className="flex flex-col items-center justify-center mt-5 bg-transparent text-black rounded-xl">
            <Image
              src="/assets/images/لپ تاپ به قیمت عمده.png"
              width={1000}
              height={700}
              alt="banner"
              className="lg:w-[1920px] lg:h-[430px] w-[800px] h-[300px] rounded-xl object-contain"
            />
          </div>

          <div className="grid col-span-12 w-full mt-4 mx-auto  ">
            <div className="grid grid-cols-3 gap-4 p-6 mx-1 rounded-lg shadow-lg bg-gray-800 lg:w-full lg:col-span-12">
              {/* Icon 1 */}
              <div className="flex flex-col items-center text-center">
                <svg
                  fill="#f97316"
                  height="35px"
                  width="35px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 326.21 326.21"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M325.637,189.233l-56.043-135.3c-0.761-1.838-2.221-3.298-4.059-4.059c-1.838-0.762-3.902-0.762-5.74,0L73.176,127.176 c-1.838,0.761-3.298,2.221-4.059,4.059c-0.761,1.838-0.761,3.903,0.001,5.74l56.051,135.3c1.196,2.889,3.989,4.632,6.932,4.632 c0.957,0,1.929-0.185,2.867-0.573l186.611-77.302C325.405,197.447,327.222,193.06,325.637,189.233z M208.674,190.361 L94.596,134.539l155.26-64.312L208.674,190.361z M209.716,207.57c1.038,0.509,2.166,0.764,3.296,0.764 c0.974,0,1.95-0.189,2.871-0.571c1.988-0.823,3.526-2.461,4.224-4.497l16.07-46.881l64.599,35.028l-156.488,64.824l20.911-70.45 L209.716,207.57z M303.949,176.07l-62.838-34.073l22.064-64.365L303.949,176.07z M90.414,149.191l61.124,29.91l-20.342,68.533 L90.414,149.191z"></path>{" "}
                      <path d="M7.5,166.616h43.536c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,163.258,3.358,166.616,7.5,166.616z"></path>{" "}
                      <path d="M82.073,236.893H7.5c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h74.573c4.142,0,7.5-3.357,7.5-7.5 C89.573,240.25,86.215,236.893,82.073,236.893z"></path>{" "}
                      <path d="M7.5,209.254h59.059c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.357-7.5,7.5 C0,205.897,3.358,209.254,7.5,209.254z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <h6 className="mt-2 text-xs text-white font-semibold">
                  ارسال رایگان به سراسر کشور
                </h6>
              </div>

              {/* Icon 2 */}
              <div className="flex flex-col items-center text-center">
                <svg
                  fill="#f97316"
                  width="35px"
                  height="35px"
                  viewBox="0 0 64 64"
                  id="Layer_1_1_"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M46,22h-6.671l5.557-6.352C45.604,14.828,46,13.775,46,12.685V12.5c0-2.481-2.019-4.5-4.5-4.5S37,10.019,37,12.5V14h2v-1.5 c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v0.185c0,0.606-0.22,1.19-0.619,1.646L37,21.624V24h9V22z"></path>{" "}
                      <path d="M54,24h2v-3h2v-2h-2V8h-2.618L48,18.764V21h6V24z M50.118,19L54,11.236V19H50.118z"></path>{" "}
                      <path d="M50.405,32.627C57.596,31.061,63,24.653,63,17c0-8.822-7.178-16-16-16c-7.653,0-14.061,5.404-15.627,12.595 C29.608,13.207,27.807,13,26,13C12.215,13,1,24.215,1,38s11.215,25,25,25s25-11.215,25-25C51,36.193,50.793,34.392,50.405,32.627z M47,3c7.72,0,14,6.28,14,14s-6.28,14-14,14s-14-6.28-14-14S39.28,3,47,3z M44.961,37H43v2h1.949 c-0.235,4.484-2.024,8.553-4.847,11.688l-1.375-1.375l-1.414,1.414l1.375,1.375c-3.135,2.824-7.204,4.612-11.688,4.847V55h-2v1.949 c-4.484-0.235-8.553-2.024-11.688-4.847l1.375-1.375l-1.414-1.414l-1.375,1.375C9.074,47.553,7.286,43.484,7.051,39H9v-2H7.051 c0.235-4.484,2.024-8.553,4.847-11.688l1.375,1.375l1.414-1.414l-1.375-1.375c3.135-2.824,7.204-4.612,11.688-4.847V21h2v-1.961 c1.438,0.076,2.862,0.318,4.255,0.72c1.156,6.611,6.374,11.829,12.986,12.986C44.642,34.138,44.884,35.562,44.961,37z M26,61 C13.317,61,3,50.683,3,38s10.317-23,23-23c1.706,0,3.407,0.201,5.072,0.577C31.03,16.047,31,16.52,31,17 c0,0.209,0.023,0.413,0.031,0.621C29.381,17.212,27.695,17,26,17C14.421,17,5,26.421,5,38s9.421,21,21,21s21-9.421,21-21 c0-1.695-0.212-3.381-0.621-5.031C46.587,32.977,46.791,33,47,33c0.48,0,0.953-0.03,1.423-0.072C48.799,34.593,49,36.294,49,38 C49,50.683,38.683,61,26,61z"></path>{" "}
                      <path d="M29,38c0-1.302-0.839-2.402-2-2.816V23h-2v12.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3 c0.462,0,0.894-0.113,1.285-0.301l7.008,7.008l1.414-1.414l-7.008-7.008C28.887,38.894,29,38.462,29,38z M25,38 c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S25,38.552,25,38z"></path>{" "}
                      <path d="M56,35c-1.654,0-3,1.346-3,3c0,1.251,0.771,2.324,1.862,2.773c-0.627,6.584-3.499,12.781-8.152,17.527l1.428,1.4 c4.999-5.098,8.074-11.763,8.725-18.842C58.095,40.485,59,39.353,59,38C59,36.346,57.654,35,56,35z M56,39c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S56.552,39,56,39z"></path>{" "}
                      <path d="M6.283,16.733c4.658-4.321,10.651-6.978,16.949-7.579C23.686,10.237,24.755,11,26,11c1.654,0,3-1.346,3-3s-1.346-3-3-3 c-1.352,0-2.485,0.905-2.858,2.137c-6.771,0.624-13.214,3.489-18.218,8.13L6.283,16.733z M26,7c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S25.448,7,26,7z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <h6 className="mt-2 text-xs text-white font-semibold">
                  پشتیبانی 24 ساعته
                </h6>
              </div>

              {/* Icon 3 */}
              <div className="flex flex-col items-center text-center">
                <svg
                  fill="#f97316"
                  width="35px"
                  height="35px"
                  viewBox="0 0 52 52"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M26,2c3,0,5.43,3.29,8.09,4.42s6.82.51,8.84,2.65,1.51,6.07,2.65,8.84S50,23,50,26s-3.29,5.43-4.42,8.09-.51,6.82-2.65,8.84-6.07,1.53-8.84,2.65S29,50,26,50s-5.43-3.29-8.09-4.42-6.82-.51-8.84-2.65-1.53-6.07-2.65-8.84S2,29,2,26s3.29-5.43,4.42-8.09.51-6.82,2.65-8.84,6.07-1.53,8.84-2.65S23,2,26,2Zm0,7.58A16.42,16.42,0,1,0,42.42,26h0A16.47,16.47,0,0,0,26,9.58Zm7.62,9.15,1.61,1.52a1.25,1.25,0,0,1,0,1.51L25.08,33.07a2.07,2.07,0,0,1-1.61.7,2.23,2.23,0,0,1-1.61-.7L16.37,27.6a1,1,0,0,1-.1-1.42l.1-.11L18,24.56a1.1,1.1,0,0,1,1.54-.07l.07.07,3.89,4,8.59-9.8A1.1,1.1,0,0,1,33.62,18.73Z"></path>
                  </g>
                </svg>
                <h6 className="mt-2 text-white text-sm font-semibold">
                  ضمانت کیفیت
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full mt-28 flex flex-wrap lg:flex-row justify-center items-center gap-4 relative">
            <BlogCard />
            <Link
              href="/blogs"
              className="self-center mb-[47rem] md:mb-[70rem] lg:mb-[20rem] absolute px-6 py-3 text-orange-600 rounded-lg hover:bg-white/50 transition-colors duration-200 font-semibold left-1 md:left-6 lg:left-8 xl:left-10"
            >
              🠀 مشاهده همه مقالات
            </Link>
          </div>

          <div className="grid col-span-9 w-full mt-4 px-1 lg:px-4 ">
            <div className="space-y-4" dir="rtl">
              <h3 className="text-black text-center text-2xl p-4 border-b-2 border-orange-600">
                سوالات متداول
              </h3>
              <details
                className="group border-s-4 border-orange-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h5 className="text-lg font-medium text-gray-900">
                    متن سوال{" "}
                  </h5>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  پاسخ سوالات
                </p>
              </details>

              <details className="group border-s-4 border-orange-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h5 className="text-lg font-medium text-gray-900">
                    متن سوال{" "}
                  </h5>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  پاسخ سوالات
                </p>
              </details>
              <details className="group border-s-4 border-orange-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h5 className="text-lg font-medium text-gray-900">
                    متن سوال{" "}
                  </h5>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  پاسخ سوالات
                </p>
              </details>
              <details className="group border-s-4 border-orange-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h5 className="text-lg font-medium text-gray-900">
                    متن سوال{" "}
                  </h5>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  پاسخ سوالات
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
