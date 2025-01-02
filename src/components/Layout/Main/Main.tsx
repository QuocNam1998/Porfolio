import Body from "@/components/Layout/Body";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import MobileMenu from "@/components/MobileMenu";
import { useMyContext } from "@/store/ReactContext/ReactContext";
import "./index.css";
export const Main = () => {
  const { theme } = useMyContext("themeSettings");
  return (
    <div className={`${theme} wrapper-portfolio`}>
      <Header />
      <Body />
      <Footer />
      <MobileMenu />
    </div>
  );
};
