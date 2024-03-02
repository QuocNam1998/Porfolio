import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { useTheme } from "@/store/ReactContext/ReactContext";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div className={`m-auto ${theme} w-full `}>
      <div className="bg-white dark:bg-black h-full w-full">
        <Header />
        <div id="main-body" className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
