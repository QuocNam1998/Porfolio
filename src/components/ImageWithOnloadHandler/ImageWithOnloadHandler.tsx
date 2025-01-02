import React, { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const ImageWithOnloadHandler: React.FC<Props> = ({
  className,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <div className={`${className} h-[750px]`} />}
      <img
        {...rest}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        style={{
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </>
  );
};
