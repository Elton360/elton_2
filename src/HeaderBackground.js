import { useEffect, useState } from "react";
import { secondaryColor, secondaryColorDark } from "./styles/Utilities.styled";

const HeaderBackground = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateCutoutWidth = (percent) => (viewportWidth * percent) / 100;

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="600" fill={secondaryColorDark} />

      <rect
        x="0"
        y="500"
        width={calculateCutoutWidth(8.33)}
        height="100"
        fill={secondaryColor}
      />
      <rect
        x={calculateCutoutWidth(20.83)}
        y="520"
        width={calculateCutoutWidth(12.5)}
        height="80"
        fill={secondaryColor}
      />
      <rect
        x={calculateCutoutWidth(37.5)}
        y="540"
        width={calculateCutoutWidth(10)}
        height="60"
        fill={secondaryColor}
      />
      <rect
        x={calculateCutoutWidth(51.67)}
        y="510"
        width={calculateCutoutWidth(15)}
        height="90"
        fill={secondaryColor}
      />
      <rect
        x={calculateCutoutWidth(70.83)}
        y="530"
        width={calculateCutoutWidth(11.67)}
        height="70"
        fill={secondaryColor}
      />
      <rect
        x={calculateCutoutWidth(87.5)}
        y="550"
        width={calculateCutoutWidth(8.33)}
        height="50"
        fill={secondaryColor}
      />
    </svg>
  );
};

export default HeaderBackground;
