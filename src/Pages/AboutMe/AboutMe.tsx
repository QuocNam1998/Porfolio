import darkMe from "@/assets/Image/me.png";
import lightMe from "@/assets/Image/lightImage.png";
import darkAvatar from "@/assets/Image/avatar.jpg";
import lightAvatar from "@/assets/Image/lightAvater.png";
import "@/pages/HomePage/HomePage.scss";
import TypeWriter from "@/components/TypeWriter";
import { useTheme } from "@/store/ReactContext/ReactContext";
export const AboutMe = () => {
  const { theme } = useTheme();
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
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 dark:text-purple-600"
        >
          <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 dark:text-purple-600"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 dark:text-purple-600"
        >
          <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-12 flex flex-wrap md:flex-nowrap gap-4 py-12 px-6">
          <div className="dark:text-purple-400 text-green-400 my-auto basis-full md:basis-1/2 px-4 min-h-[150px] md:min-h-max">
            <p className="text-xl">Hi there! </p>
            <p className="text-xl">I'm Đặng Quốc Nam</p>
            <TypeWriter
              strings={[
                "A react Developer",
                "Who can code all day without getting tired",
                "Fun fact: I don't know how to write code",
              ]}
            />
          </div>
          <div className="basis-full md:basis-1/2">
            {theme === "light" && <img className="w-[500px]" src={lightMe} />}
            {theme === "dark" && <img className="w-[500px]" src={darkMe} />}
          </div>
        </div>
        {/* Contaction */}
        <div className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-16 py-12 px-6">
          <div className="col-span-12 md:col-span-7 ">
            <p className="dark:text-white text-5xl text-left md:text-center mb-8">
              LET ME{" "}
              <span className="dark:text-purple-400  text-green-400">
                INTRODUCE
              </span>{" "}
              MYSELF
            </p>
            <p className="dark:text-white mb-4 text-lg">
              I am fluent in classics more than 2 years of experience in{" "}
              <span className="dark:text-purple-400 text-green-400 pl-[1px] italic ">
                Javascript and Typescript
              </span>
              .
            </p>
            <p className="dark:text-white mb-4 text-lg">
              My field of Interest's are building new{" "}
              <span className="dark:text-purple-400 text-green-400 italic">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Design.
              </span>
            </p>
            <p className="dark:text-white mb-4 text-lg">
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Node.js
              </span>{" "}
              and{" "}
              <span className="dark:text-purple-400 text-green-400 mb-4 text-lg italic">
                Modern Javascript Library and Frameworks like React.js and
                Next.js
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 dark:text-white flex items-center justify-center">
            {theme === "light" && (
              <img
                src={lightAvatar}
                className=" w-[200px] hover:w-[150px] transition-all duration-200"
              />
            )}
            {theme === "dark" && (
              <img
                src={darkAvatar}
                className="rounded-full w-[200px] hover:w-[250px] transition-all duration-200"
              />
            )}
          </div>
          <div className="col-span-12">
            <p className="uppercase dark:text-white text-center w-full text-5xl mb-4">
              find me on
            </p>
            <p className="dark:text-white text-center w-full mb-6 text-lg">
              Feel free to{" "}
              <span className="dark:text-purple-400 text-green-400">
                connect
              </span>{" "}
              with me
            </p>
            <div className="flex items-center w-full justify-center">
              {listContact.map((item, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  <div
                    className="w-10 h-10 cursor-pointer mr-4 rounded-full bg-white flex items-center justify-center 
                   dark:hover:border-[#87209e]  hover:drop-shadow-green dark:hover:drop-shadow-purple
                   hover:border-green-400 border-[2px] dark:border-black border-white transition-all duration-200
                   text-green-400 dark:text-[#87209e]"
                  >
                    {item.svg}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
