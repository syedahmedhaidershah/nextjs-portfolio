import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import colors from 'tailwindcss/colors';
import { content } from "../../../tailwind.config";

const badgeStyle = {
  backgroundImage: "url(images/star.png)",
  backgroundSize: "cover",
  width: "20px",
  height: "20px",
  position: "absolute",
  top: "-10px",
  right: "-10px",
  position: "absolute",
};


const SkillChip = ({ index, name, color, starred = false }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  const [className, setClassName] = useState(`relative grid select-none items-center whitespace-nowrap rounded-lg py-2 px-3 font-sans text-xs font-bold uppercase text-white`);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [bgLiteral,colorName,strength] = color.split('-');

  return (
    <div
      data-aos={starred ? "fade-up-right" : "fade-up-left"}
      data-aos-delay="0"
      data-aos-duration={starred ? "50" + +index * 1 : "50"}
      className={className}
      style={{backgroundColor: colors[colorName][strength]}}>
      <span>{name}</span>
      {starred && <div style={badgeStyle}></div>}
    </div>
  );
};

export default SkillChip;
