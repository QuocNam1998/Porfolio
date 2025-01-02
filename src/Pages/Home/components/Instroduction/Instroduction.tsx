import TypeWriter from "@/components/TypeWriter";
import { useMemo } from "react";
import avatar from "@/assets/Image/avatar-rmbg.png";

export const Instroduction = () => {
  const strings = useMemo(
    () => [
      "A Front-end Developer",
      "Love beauty and hate hypocrisy",
      "Fun fact: I think i'm handsome",
    ],
    []
  );
  return (
    <div className="col-span-12 gap-4 instroduction relative">
      <div className="md:absolute top-0">
        <div className="max-w-[100px] min-h-[4px] mb-[24px] dark:bg-purple-400 bg-green-400"></div>
        <div className=" ">
          <h1 className=" dark:text-purple-400 text-left">Hi there! </h1>
          <h1 className=" dark:text-purple-400 text-left">I'm Đặng Quốc Nam</h1>
          <TypeWriter strings={strings} />
        </div>
      </div>

      <div className="image-wrapper flex justify-center">
        <img src={avatar} className="md:max-w-[50%]" />
      </div>
    </div>
  );
};
