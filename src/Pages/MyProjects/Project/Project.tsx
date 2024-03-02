interface projectProps {
  src: string;
  link: string;
}
export const Project = ({ src, link }: projectProps) => {
  return (
    <div className="basis-full md:basis-1/2 lg:basis-1/3 order-last flex justify-center items-center relative group overflow-hidden ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="absolute bg-green-800 cursor-pointer rounded dark:bg-purple-400 opacity-80 inset-0 flex items-center justify-center z-1 dark:z-20 my-auto mx-auto group-hover:translate-y-0 translate-y-full transition-all duration-300">
          <div>
            <span className=" text-white text-lg w-full m-auto">
              View project
            </span>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white ` "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>

      <img
        className=" dark:opacity-90 opacity-100 rounded transition-all duration-300 cursor-pointer"
        src={src}
      />
    </div>
  );
};
