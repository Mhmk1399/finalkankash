import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  learnMoreLink: string;
}

const features: Feature[] = [
  {
    title: "راهنما ی خرید هارد اکسترنال ایرانیان",
    description:
      "تو این مقاله میتونی خیلی راحت تمام چیز ها را درمورد خرید هارد بدونی و دیگه هر وقت بخوای هارد مناسب کارتو سریع پیدا کنی.",
    category: "هارد",
    imageUrl: "/assets/images/computer-banner2.jpeg",
    learnMoreLink: "/blogs",
  },
  {
    title: "کنکاش دکتر ",
    description:
      "اگر مشکلی برای سیستمت پیش اومده اینجا برای ما توضیح بده و ما برات حلش میکنیم",
    category: "تعمیرات",
    imageUrl: "/assets/images/computer-banner3.jpeg",
    learnMoreLink: "/blogs"
  },
  
    
];


const BlogCard = () => {
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-center p-8 justify-center">
      {features.map((feature, index) => (
        <li
          key={index}
          className="relative flex flex-col sm:flex-row xl:flex-col shrink items-center text-center sm:text-center "
        >
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold ">
              <span
                className={`mb-1 block border-b-gray-300  border-2 text-sm leading-6 sm:text-xl text-orange-400 font-bold text-${
                  index === 0 ? "indigo" : index === 1 ? "purple" : "cyan"
                }-500`}
              >
                {feature.category}
              </span>
              {feature.title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-500">
              <p>{feature.description}</p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-orange-300 text-slate-900 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href={feature.learnMoreLink}
            >
              اطلاعات بیشتر
              <span className="sr-only">{`, ${feature.title}`}</span>
              <svg
                className="overflow-visible ml-3 text-slate-900 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <Image
            src={feature.imageUrl}
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
            width={1261}
            height={640}
          />
        </li>
      ))}
    </ul>
  );
};

export default BlogCard;
