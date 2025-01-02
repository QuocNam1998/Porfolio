import React from "react";
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  titleItem: string;
  desItem: string;
  icon: any;
};
export const SlideItem = ({ titleItem, desItem, icon, ...rest }: Props) => {
  return (
    <div {...rest}>
      {icon()}
      <h3 className="font-bold text-3xl uppercase">{titleItem}</h3>
      <p className="text-lg text-[#c3cad5] line-clamp-3 h-[84px]">{desItem}</p>
      <div className="bg-white h-[4px] max-w-[56px] w-[56px]"></div>
    </div>
  );
};
