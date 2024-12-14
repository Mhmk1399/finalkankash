import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  category: string;
  imageUrl: string;
  learnMoreLink: string;
}

const features: Feature[] = [
  {
    title: " چطوری هارد دیسکمون رو نجات بدیم؟! ",
    category: "هارد",
    imageUrl: "/assets/images/hard-external.webp",
    learnMoreLink: "/hard-drive-repair",
  },
  {
    title: "کلینیک تعمیرات لپتاپ",
    category: "تعمیرات",
    imageUrl: "/assets/images/laptoprepair.jpg",
    learnMoreLink: "/repair",
  },
];

const BlogCard = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 items-center p-4 sm:p-8 justify-center">
      {features.map((feature, index) => (
        <li
          key={index}
          className="relative flex flex-col items-center text-center"
        >
          <div className="relative w-full max-w-[20rem] sm:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem]">
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              className="shadow-md rounded-xl bg-slate-50 w-full h-[250px] object-cover"
              width={400}
              height={300}
              priority
            />

            {/* Overlay content positioned absolutely on top of image */}
            <div className="absolute inset-0 rounded-xl flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              {/* Category (always visible) */}
              <span className="text-xs sm:text-sm md:text-base text-orange-400 font-bold">
                {feature.category}
              </span>

              {/* Title and Button */}
              <h3 className="mt-2 mb-2 text-white text-sm sm:text-base md:text-lg">
                {feature.title}
              </h3>

              <Link
                className="group inline-flex justify-center items-center h-8 rounded-xl text-xs sm:text-sm md:text-base font-semibold px-4 md:px-5 bg-orange-600 text-slate-900 hover:bg-orange-700 hover:text-slate-100 mt-2 transition-colors duration-200"
                href={feature.learnMoreLink}
              >
                اطلاعات بیشتر
                <svg
                  className="ml-2 w-3 h-3 text-slate-900 group-hover:text-slate-100 transition-colors"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6" />
                </svg>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogCard;
