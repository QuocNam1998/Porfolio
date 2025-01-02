import { memo, useEffect, useState } from "react";
interface typeWriterProps {
  strings: string[];
}
export const TypeWriter = memo(({ strings }: typeWriterProps) => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [text, setText] = useState("");
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [intervalTime, setIntervalTime] = useState(200);
  // console.log(">>>re-render");
  useEffect(() => {
    const updateText = () => {
      if (direction === "forward") {
        if (idx < strings.length) {
          const currentText = strings[idx];
          if (text.length < currentText.length) {
            setText((prev) => prev + currentText[text.length]);
          } else {
            setTimeout(() => {
              setDirection("backward");
              setIntervalTime(100);
            }, 1000);
          }
        }
      } else {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setDirection("forward");
          setIntervalTime(200);
          setIdx((prevIdx) => (prevIdx + 1) % strings.length);
        }
      }
    };

    const textInterval = setInterval(updateText, intervalTime);

    return () => clearInterval(textInterval);
  }, [idx, direction, text, strings, intervalTime]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((isBlinking) => !isBlinking);
    }, 300); // Interval for blinking, adjust as needed

    return () => clearInterval(blinkInterval);
  }, []); // Empty dependency array to run effect only once
  return (
    <div className="min-h-[100px] text-base mt-4">
      <p className="text-white ">
        {text}
        <span
          className={`${
            isBlinking ? "opacity-0" : "opacity-100"
          } transition-opacity duration-200`}
        >
          |
        </span>
      </p>
    </div>
  );
});
