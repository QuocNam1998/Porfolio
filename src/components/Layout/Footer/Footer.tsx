export const Footer = () => {
  const listContact = [
    {
      link: "https://github.com/QuocNam1998",
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 dark:text-purple-600"
        >
          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
        </svg>
      ),
    },
    {
      link: "https://telegram.me/NamFE2212",
      svg: (
        <svg
          className="w-5 h-5 dark:text-purple-600"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
        >
          <path
            d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z"
            strokeWidth="0"
          />
        </svg>
      ),
    },
    {
      link: "mailto:nam.quoc.dang.98@gmail.com",
      svg: (
        <svg
          className="w-5 h-5 dark:text-purple-600"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
        >
          <path
            stroke-linejoin="round"
            strokeWidth="0"
            d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-between flex-wrap md:flex-nowrap dark:text-white text-green-400 px-4 bg-[#212529]">
      <p className="my-2 text-base w-full md:w-auto text-center md:text-left  ">
        Designed and Developed by Đặng Quốc Nam
      </p>

      <div className="flex my-4 w-full md:w-auto justify-center md:justify-normal">
        {listContact.map((item, idx) => (
          <a
            className="mr-2"
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
          >
            {item.svg}
          </a>
        ))}
      </div>
    </div>
  );
};
