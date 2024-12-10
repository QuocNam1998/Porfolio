import React, { useState } from "react";
type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export const ImageWithOnloadHandler: React.FC<Props> = ({ ...rest }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // onLoad handler
  const handleImageLoad = () => {
    console.log("Image loaded successfully!");
    setIsLoaded(true);
  };

  return (
    <div>
      <img
        {...rest}
        onLoad={handleImageLoad}
        style={{
          opacity: isLoaded ? 1 : 0.5,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </div>
  );
};
