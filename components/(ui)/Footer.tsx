"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTelegram,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-white">
        <section className=" flex justify-around h-30 shadow-lg py-4 rounded-lg text-center bg-black w-full">
          <div className="flex flex-col itens0center gap-1 font-bold  rounded-lg shadow-lg px-2 py-2 w-16">
            <div className="text-center  py-2 px-2 rounded-full shadow-full flex flex-col items-center">
              <Link href="/login">
                <svg
                  width="25px"
                  height="25px"
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
                      d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
            </div>

            <span className="text-center text-white flex flex-col ">ورود</span>
          </div>

          <div className="flex flex-col itens0center gap-1 font-bold text-orange-500 rounded-lg shadow-lg px-2 py-2 ">
            <div className="text-center  py-2 px-1 rounded-full shadow-full flex flex-col items-center">
              <Link href="/Store">
                <svg
                  width="25px"
                  height="27px"
                  viewBox="0 -0.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#f97316"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>shopping_cart_plus [#f97316]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-60.000000, -3160.000000)"
                        fill="#f97316"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M15,3011.98412 L17,3011.98412 L17,3013.98866 L15,3013.98866 L15,3015.9932 L13,3015.9932 L13,3013.98866 L11,3013.98866 L11,3011.98412 L13,3011.98412 L13,3009.97959 L15,3009.97959 L15,3011.98412 Z M19.306,3016.99546 L8.694,3016.99546 L7.361,3008.97732 L20.82,3008.97732 L19.306,3016.99546 Z M21,3006.97278 L16.977,3000.01203 L15.245,3001.00227 L18.691,3006.97278 L9.309,3006.97278 L12.755,3001.0143 L11.023,3000 L7,3006.97278 L4,3006.97278 L4,3008.97732 L5.333,3008.97732 L7,3019 L21,3019 L22.667,3008.97732 L24,3008.97732 L24,3006.97278 L21,3006.97278 Z"
                            id="shopping_cart_plus-[#f97316]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </Link>
            </div>

            <span className="text-center text-white flex flex-col ">
              سبد خرید
            </span>
          </div>

          <div className="flex flex-col itens0center gap-1 font-bold text-orange-500  rounded-lg shadow-lg px-2 py-2">
            <div className="text-center  py-2 px-1 rounded-full shadow-full flex flex-col items-center">
              <Link href="tel:">
                <svg
                  width="25px"
                  height="27px"
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
                      d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z"
                      fill="#f97316"
                    ></path>{" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z"
                      fill="#f97316"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
            </div>

            <span className="text-center text-white flex flex-col ">
              پشتیبانی
            </span>
          </div>

          <div className="flex flex-col itens0center gap-1 font-bold text-orange-500  rounded-lg shadow-lg px-2 py-2">
            <div className="text-center  py-2 px-2 rounded-full shadow-full flex flex-col items-center">
              <Link href="/">
                <svg
                  fill="#f97316"
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 492.308 492.308"
                  xmlSpace="preserve"
                  stroke="#f97316"
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
                      <g>
                        {" "}
                        <path d="M485.507,171.298L412.209,42.952h-71.942V0H152.065v42.952H80.122L6.642,171.635c-8.625,16.538-8.519,36.317,0.279,52.904 c6.587,12.441,17.178,21.308,29.808,25.474v242.296H96.44h133.394h225.779V250.002c12.636-4.169,23.217-13.032,29.798-25.464 C494.209,207.952,494.315,188.173,485.507,171.298z M171.757,19.692h148.817v23.26H171.757V19.692z M210.142,472.615h-94.01 V320.394h94.01V472.615z M435.92,472.615H229.834V300.702H96.44v171.913H56.42v-220c18.909-0.863,35.501-10.76,45.451-25.538 c10.413,15.471,28.083,25.673,48.097,25.673c20.014,0,37.684-10.202,48.097-25.673c10.416,15.471,28.091,25.673,48.105,25.673 c20.013,0,37.682-10.2,48.096-25.671c10.414,15.471,28.084,25.671,48.096,25.671c20.014,0,37.688-10.202,48.105-25.673 c9.949,14.781,26.54,24.68,45.453,25.538V472.615z M468.017,215.317c-5.24,9.875-14.337,16.24-25.019,17.481 c-1.452,0.183-2.933,0.26-4.433,0.26c-21.087,0-38.25-17.163-38.25-38.25h-19.692c0,21.087-17.163,38.25-38.26,38.25 c-21.087,0-38.25-17.163-38.25-38.25H284.42c0,21.087-17.163,38.25-38.25,38.25c-21.096,0-38.26-17.163-38.26-38.25h-19.692 c0,21.087-17.164,38.25-38.25,38.25c-21.087,0-38.25-17.163-38.25-38.25H92.026c0,21.087-17.163,38.25-38.26,38.25 c-1.5,0-2.981-0.077-4.471-0.26c-10.644-1.24-19.74-7.606-24.981-17.481c-5.76-10.865-5.837-23.788-0.394-34.25L91.545,62.644 h60.519h188.202h60.519l67.442,118.086C473.853,191.529,473.776,204.452,468.017,215.317z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M264.786,300.702v98.221h134.221v-98.221H264.786z M379.315,379.231h-94.837v-58.837h94.837V379.231z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </Link>
            </div>

            <span className="text-center text-white flex flex-col ">خانه</span>
          </div>
        </section>
        <section
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 border-t-2 pt-4"
          dir="ltr"
        >
          {/* Logo & About */}
          <div className="flex flex-col  items-center md:items-start" dir="rtl">
            <Link href="/">
              <Image
                width={65}
                height={50}
                src="/assets/images/kankashStock(hightqulity)500pps.png"
                alt="Logo"
                className="block md:mr-4 p-2"
              />
            </Link>

            <Link
              href="/"
              className="text-2xl font-bold mb-3 text-orange-600 p-2 md:mr-4"
            >
              کنکاش استوک
            </Link>
            <p className="text-gray-400 md:mr-4 p-2 text-center">
              آدرس : تهران - خیابان فلسطین - تقاطع بزرگمهر - پلاک 78
            </p>
            <span className="text-gray-400 md:mr-4 p-2 text-center">
              برای تماس با ما روی آیکون زیر کلیک کنید.
            </span>
            <div className="grid grid-cols-3 items-center justify-center gap-2">
              <Link href="tel:" className="md:mr-4 p-2 text-center">
                <svg
                  width="64px"
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
                      d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
                      stroke="#ea580c"
                      strokeWidth="1.5"
                    ></path>{" "}
                    <path
                      d="M17 9L17 5M19 7L15 7"
                      stroke="#ea580c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M14.1008 16.0272L14.6446 16.5437V16.5437L14.1008 16.0272ZM14.5562 15.5477L14.0124 15.0312V15.0312L14.5562 15.5477ZM16.9729 15.2123L16.5987 15.8623H16.5987L16.9729 15.2123ZM18.8834 16.312L18.5092 16.962L18.8834 16.312ZM19.4217 19.7584L19.9655 20.275L19.9655 20.2749L19.4217 19.7584ZM18.0012 21.254L17.4574 20.7375L18.0012 21.254ZM16.6763 21.9631L16.75 22.7095L16.6763 21.9631ZM6.8154 17.4752L7.3592 16.9587L6.8154 17.4752ZM2.75185 7.92574C2.72965 7.51212 2.37635 7.19481 1.96273 7.21701C1.54911 7.23921 1.23181 7.59252 1.25401 8.00613L2.75185 7.92574ZM8.19075 9.80507L8.73454 10.3216L8.19075 9.80507ZM8.47756 9.50311L9.02135 10.0196L8.47756 9.50311ZM8.63428 6.6931L9.24668 6.26012L8.63428 6.6931ZM7.3733 4.90961L6.7609 5.3426V5.3426L7.3733 4.90961ZM3.7177 4.09213C3.43244 4.39246 3.44465 4.86717 3.74498 5.15244C4.04531 5.4377 4.52002 5.42549 4.80529 5.12516L3.7177 4.09213ZM10.0632 14.0559L10.607 13.5394L10.0632 14.0559ZM9.6641 20.8123C10.0148 21.0327 10.4778 20.9271 10.6982 20.5764C10.9186 20.2257 10.8129 19.7627 10.4622 19.5423L9.6641 20.8123ZM14.113 21.0584C13.7076 20.9735 13.3101 21.2334 13.2252 21.6388C13.1403 22.0442 13.4001 22.4417 13.8056 22.5266L14.113 21.0584ZM14.6446 16.5437L15.1 16.0642L14.0124 15.0312L13.557 15.5107L14.6446 16.5437ZM16.5987 15.8623L18.5092 16.962L19.2575 15.662L17.347 14.5623L16.5987 15.8623ZM18.8779 19.2419L17.4574 20.7375L18.545 21.7705L19.9655 20.275L18.8779 19.2419ZM7.3592 16.9587C3.48307 12.8778 2.83289 9.43556 2.75185 7.92574L1.25401 8.00613C1.35326 9.85536 2.13844 13.6403 6.27161 17.9917L7.3592 16.9587ZM8.73454 10.3216L9.02135 10.0196L7.93377 8.9866L7.64695 9.28856L8.73454 10.3216ZM9.24668 6.26012L7.98569 4.47663L6.7609 5.3426L8.02189 7.12608L9.24668 6.26012ZM8.19075 9.80507C7.64695 9.28856 7.64626 9.28929 7.64556 9.29002C7.64533 9.29028 7.64463 9.29102 7.64415 9.29152C7.6432 9.29254 7.64223 9.29357 7.64125 9.29463C7.63928 9.29675 7.63724 9.29896 7.63515 9.30127C7.63095 9.30588 7.6265 9.31087 7.62182 9.31625C7.61247 9.32701 7.60219 9.33931 7.5912 9.3532C7.56922 9.38098 7.54435 9.41511 7.51826 9.45588C7.46595 9.53764 7.40921 9.64531 7.36117 9.78033C7.26346 10.0549 7.21022 10.4185 7.27675 10.8726C7.40746 11.7647 7.99202 12.9644 9.51937 14.5724L10.607 13.5394C9.1793 12.0363 8.82765 11.1106 8.7609 10.6551C8.72871 10.4354 8.76142 10.3196 8.77436 10.2832C8.78163 10.2628 8.78639 10.2571 8.78174 10.2644C8.77948 10.2679 8.77498 10.2745 8.76742 10.2841C8.76363 10.2888 8.75908 10.2944 8.75364 10.3006C8.75092 10.3038 8.74798 10.3071 8.7448 10.3106C8.74321 10.3123 8.74156 10.3141 8.73985 10.3159C8.739 10.3169 8.73813 10.3178 8.73724 10.3187C8.7368 10.3192 8.73612 10.3199 8.7359 10.3202C8.73522 10.3209 8.73454 10.3216 8.19075 9.80507ZM9.51937 14.5724C11.0422 16.1757 12.1924 16.806 13.0699 16.9485C13.5201 17.0216 13.8846 16.9632 14.1606 16.8544C14.2955 16.8012 14.4023 16.7387 14.4824 16.6819C14.5223 16.6535 14.5556 16.6266 14.5825 16.6031C14.5959 16.5913 14.6078 16.5803 14.6181 16.5703C14.6233 16.5654 14.628 16.5606 14.6324 16.5562C14.6346 16.554 14.6368 16.5518 14.6388 16.5497C14.6398 16.5487 14.6408 16.5477 14.6417 16.5467C14.6422 16.5462 14.6429 16.5454 14.6432 16.5452C14.6439 16.5444 14.6446 16.5437 14.1008 16.0272C13.557 15.5107 13.5577 15.51 13.5583 15.5093C13.5586 15.509 13.5592 15.5083 13.5597 15.5078C13.5606 15.5069 13.5615 15.506 13.5623 15.5051C13.5641 15.5033 13.5658 15.5015 13.5675 15.4998C13.5708 15.4965 13.574 15.4933 13.577 15.4904C13.5831 15.4846 13.5885 15.4796 13.5933 15.4754C13.6029 15.467 13.61 15.4616 13.6146 15.4584C13.6239 15.4517 13.623 15.454 13.6102 15.459C13.5909 15.4666 13.5001 15.4987 13.3103 15.4679C12.9078 15.4025 12.0391 15.0472 10.607 13.5394L9.51937 14.5724ZM7.98569 4.47663C6.9721 3.04305 4.94388 2.80119 3.7177 4.09213L4.80529 5.12516C5.32812 4.57471 6.24855 4.61795 6.7609 5.3426L7.98569 4.47663ZM17.4574 20.7375C17.1783 21.0313 16.8864 21.1887 16.6026 21.2167L16.75 22.7095C17.497 22.6357 18.1016 22.2373 18.545 21.7705L17.4574 20.7375ZM9.02135 10.0196C9.98893 9.00095 10.0574 7.40678 9.24668 6.26012L8.02189 7.12608C8.44404 7.72315 8.3793 8.51753 7.93377 8.9866L9.02135 10.0196ZM18.5092 16.962C19.3301 17.4345 19.4907 18.5968 18.8779 19.2419L19.9655 20.2749C21.2705 18.901 20.8904 16.6019 19.2575 15.662L18.5092 16.962ZM15.1 16.0642C15.4854 15.6584 16.086 15.5672 16.5987 15.8623L17.347 14.5623C16.2485 13.93 14.8862 14.1113 14.0124 15.0312L15.1 16.0642ZM10.4622 19.5423C9.47846 18.9241 8.43149 18.0876 7.3592 16.9587L6.27161 17.9917C7.42564 19.2067 8.56897 20.1241 9.6641 20.8123L10.4622 19.5423ZM16.6026 21.2167C16.0561 21.2707 15.1912 21.2842 14.113 21.0584L13.8056 22.5266C15.0541 22.788 16.0742 22.7762 16.75 22.7095L16.6026 21.2167Z"
                      fill="#ea580c"
                    ></path>{" "}
                  </g>
                </svg>
              </Link>
              <span className="lg:ml-12">شماره تماس : 09196139033</span>
              <span className="lg:ml-12"> 02166958703</span>
            </div>
            <div className="flex flex-col items-center md:items-start md:mr-4">
              <h3 className="text-lg font-semibold mb-4 text-orange-600 ">
                ارتباط با ما
              </h3>
              <div className="flex space-x-4 text-center">
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    href="https://youtube.com"
                    icon={faYoutube}
                    className="text-red-500 hover:scale-110 transition-all duration-150"
                    size="2x"
                  />
                </Link>
                <Link
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-green-500 hover:scale-110 mr-3 transition-all duration-150"
                    size="2x"
                  />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-500 hover:scale-110 transition-all duration-150"
                    size="2x"
                  />
                </Link>
                <Link
                  href="https://telegram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="text-blue-500 hover:scale-110 transition-all duration-150"
                    size="2x"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* map */}

          <div
            style={{
              width: "100%",
              height: "400px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12954.144474761945!2d51.40318182181833!3d35.70398704608179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzEzLjkiTiA1McKwMjQnMTIuMyJF!5e0!3m2!1sen!2s!4v1699029802585!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Navigation Links */}
          {/* <div className="flex flex-col items-center md:items-center ">
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              لینک های مفید
            </h3>
            <ul className="text-center">
              <li className="mb-2">
                <Link href="/Store">
                  <span className="text-gray-500 hover:text-black">
                    فروشگاه
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="text-gray-500 hover:text-black">
                    درباره ما
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <span className="text-gray-500 hover:text-black">
                    تماس با ما
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog">
                  <span className="text-gray-500 hover:text-black">بلاگ</span>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Social Media Links */}
        </section>

        <section className="text-center text-gray-500 mt-10">
          <p>
            © 2024
            <strong className="text-orange-600 py-4">KankashStock.</strong> All
            rights reserved.
          </p>
        </section>
      </main>
    </>
  );
};

export default Footer;
