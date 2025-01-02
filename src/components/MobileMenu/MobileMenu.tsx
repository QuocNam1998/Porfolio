import { useMyContext } from "@/store/ReactContext/ReactContext";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useHeaderItemHandler } from "@/utils/helpers";
import myCV from "@/assets/DANGQUOCNAM-FE-DEVELOPER.pdf";

export const MobileMenu = () => {
  const {
    isOpenMobileMenu,
    setIsOpenMobileMenu,
    setIsRemoveMobileMenu,
    isRemoveMobileMenu,
  } = useMyContext("mobileMenuSettings");
  const { setActiveHeaderItem } = useMyContext("headerSettings");
  const handleClick = useHeaderItemHandler(myCV, setActiveHeaderItem);

  const navigate = useNavigate();
  const onCloseMenu = () => {
    setIsOpenMobileMenu(false);
  };
  const onRemoveMobileMenu = () => {
    if (isOpenMobileMenu) return;
    setIsRemoveMobileMenu(true);
  };
  const onNavigate = (destination: string) => {
    // event.stopPropagation();
    if (destination !== "Resume") {
      navigate(`/${destination}`);
    } else {
      handleClick({ title: "Resume" });
    }
  };
  return !isRemoveMobileMenu ? (
    <div
      onAnimationEnd={onRemoveMobileMenu}
      onClick={onCloseMenu}
      className={`mobile-menu ${
        isOpenMobileMenu ? "animate-createMenu" : "animate-closeMenu"
      }`}
    >
      {/* <button onClick={onCloseMenu} className="text-xl text-white">
        x
      </button> */}
      <ul
        className={`space-y-2 ${isOpenMobileMenu ? "visible" : "invisible"} `}
      >
        <li onClick={() => onNavigate("")}>Home</li>
        <li onClick={() => onNavigate("Resume")}>Resume</li>
      </ul>
    </div>
  ) : (
    <></>
  );
};
