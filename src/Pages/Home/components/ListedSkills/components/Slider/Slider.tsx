import { useEffect, useRef, useState } from "react";
import "./index.css";
import SlideItem from "../SlideItem";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux } from "react-icons/si";
export const Slider = () => {
  const refSlider = useRef<any>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const onGoPreviousSlide = () => {
    const firstIdx = 0;
    const finalIdx = 2;
    setCurrentIdx((prev) => (currentIdx <= firstIdx ? finalIdx : prev - 1));
  };
  const onGoNextSlide = () => {
    const finalIdx = 2;
    setCurrentIdx((prev) => (currentIdx >= finalIdx ? 0 : prev + 1));
  };
  const handleMoveSlider = (currentIdx: number) => {
    if (!refSlider.current) return;

    // Determine the number of slides visible based on screen size
    let slidesToShow;
    if (window.innerWidth >= 1200) {
      slidesToShow = 3; // Divide into three slides for 1200px and above
    } else if (window.innerWidth >= 768) {
      slidesToShow = 2; // Divide into two slides for 768px to 1199px
    } else {
      slidesToShow = 1; // Single slide for smaller screens
    }

    // Calculate slide width as a percentage
    const slideWidth = 100 / slidesToShow;

    // Apply transform based on the calculated slide width
    refSlider.current.style.transform = `translateX(-${
      currentIdx * slideWidth
    }%)`;
  };

  const iconClass =
    "w-[76px] h-[76px] text-blue-500 border-[1px] border-blue-500 rounded-full p-2";
  useEffect(() => {
    handleMoveSlider(currentIdx);
  }, [currentIdx]);
  return (
    <div className="slider">
      <div ref={refSlider} className="slider-container">
        <SlideItem
          icon={() => <FaReact className={iconClass} />}
          titleItem="React"
          desItem="React is a JavaScript library for rendering user interfaces (UI)."
          className="slide-item"
        />
        <SlideItem
          icon={() => <FaHtml5 className={iconClass} />}
          titleItem="html & css"
          desItem="HTML is the standard markup language for Web pages. 
          CSS (Cascading Style Sheets) is a style sheet language used to describe
           the presentation of a document written in HTML or XML."
          className="slide-item"
        />
        <SlideItem
          icon={() => <IoLogoJavascript className={iconClass} />}
          titleItem="java-script"
          desItem="JavaScript (JS) is a lightweight interpreted (or just-in-time compiled)
           programming language with first-class functions."
          className="slide-item"
        />
        <SlideItem
          icon={() => <SiTypescript className={iconClass} />}
          titleItem="type-script"
          desItem="TypeScript is a strongly typed programming language that builds on JavaScript,
           giving you better tooling at any scale."
          className="slide-item"
        />
        <SlideItem
          icon={() => <SiRedux className={iconClass} />}
          titleItem="redux"
          desItem="Redux is an open-source JavaScript library for managing and centralizing application state.
           It is most commonly used with libraries such as React or Angular for building user interfaces."
          className="slide-item"
        />
      </div>
      <div className="flex justify-center">
        <button onClick={onGoPreviousSlide} className="btn prev-btn">
          ❮
        </button>
        <button onClick={onGoNextSlide} className="btn next-btn">
          ❯
        </button>
      </div>
    </div>
  );
};
