import { useEffect, useState } from "react";
import "@/components/Layout/Header/Header.scss";
import { useTheme } from "@/store/ReactContext/ReactContext";
import { useLocation, useNavigate } from "react-router-dom";
import myCV from "@/assets/DANGQUOCNAM-FE-DEVELOPER.pdf";
export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  useEffect(() => {
    setActiveLink(capitalizeFirstLetter(pathname.replace("/", "")));
  }, [pathname]);
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector(".header");
    const body = document.getElementById("main-body");
    if (header && body) {
      const scrollTop = window.scrollY;
      if (scrollTop >= 10) {
        header.classList.add("fixed-header");
        body.classList.add("pt-[50px]");
      } else {
        header.classList.remove("fixed-header");
        body.classList.remove("pt-[50px]");
      }
    }
  };
  const listPortfolio = [
    {
      title: "Home",
      path: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 m-0 md:mr-2 dark:text-white text-green-400 transition-all duration-0`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },

    // {
    //   title: "Project",
    //   path: "/project",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className={`w-6 h-6 m-0 md:mr-2 dark:text-white text-green-400 transition-all duration-0`}
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
    //       />
    //     </svg>
    //   ),
    // },
    {
      title: "Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 m-0 md:mr-2 dark:text-white text-green-400 transition-all duration-0`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      ),
    },
  ];
  const handleClick = (item: any) => {
    const isResume = item.title === "Resume";
    if (isResume) {
      const link = document.createElement("a");
      link.href = myCV; // Đường dẫn tới tài liệu
      link.download = "DANGQUOCNAM-FE-DEVELOPER.pdf"; // Tên tài liệu khi tải xuống
      document.body.appendChild(link); // Thêm vào DOM
      link.click(); // Kích hoạt hành động tải xuống
      document.body.removeChild(link); // Xóa thẻ sau khi click
    }
    setActiveLink(item.title);
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="header z-50 px-2 py-3 top-0 left-0 right-0 ">
      <nav className="container  ">
        <ul className="flex justify-between items-center">
          <li className="hidden md:block">
            <span className="w-10 h-10 dark:text-white text-green-400 transition-all duration-0 uppercase font-bold">
              DANGQUOCNAM
            </span>
          </li>
          <li className="w-full md:w-auto">
            <ul className="flex md:justify-normal justify-between">
              {listPortfolio.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="m-0 md:ml-16 cursor-pointer group"
                    onClick={() => handleClick(item)}
                  >
                    <div className="flex">
                      <button>{item.icon}</button>
                      <span className="hidden md:block dark:text-white text-green-400 transition-all duration-200">
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={`h-1 mt-1 group-hover:w-full ${
                        (activeLink === "" && item.title === "Home") ||
                        activeLink === item.title
                          ? "w-full"
                          : ""
                      } w-0 dark:bg-purple-500 bg-green-400 rounded transition-all duration-200`}
                    />
                  </li>
                );
              })}
              <li className="m-0 md:ml-16">
                <button
                  className={`dark:bg-white bg-green-400 rounded-xl flex relative p-[1px]`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 text-black mr-2`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 text-green-900`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                  <div
                    className={`dark:bg-purple-400 bg-white dark:left-[34px]
                   rounded-full h-full w-6 transition-all duration-200 left-0 top-0 absolute`}
                  />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
