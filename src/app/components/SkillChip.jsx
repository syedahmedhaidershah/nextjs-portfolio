import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import colors from 'tailwindcss/colors';
import { content } from "../../../tailwind.config";
import Image from "next/image";

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

const SkillChip = ({
  index,
  name,
  color,
  starred = false,
  icon = null,
  fill = null,
}) => {
  const { theme } = useTheme();
  const [mounted,
    setMounted] = useState();
  const [svgIcon, setSvgIcon] = useState('');
  const [className, setClassName] = useState(`relative grid select-none items-center whitespace-nowrap rounded-md py-2 px-3 font-sans text-xs font-bold uppercase text-white`);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!fill)
      return;

    const fetchSvg = async () => {
      try {
        const response = await fetch(icon);
        const text = await response.text();
        setSvgIcon(text);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };


    fetchSvg();
  }, [icon, fill]);

  useEffect(() => {
    if (!svgIcon)
      return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgIcon, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');

    if (svgElement) {
      svgElement.querySelectorAll('[fill]').forEach((element) => {
        element.setAttribute('fill', fill);
      });
      svgElement.style.fill = fill;
      setSvgIcon(svgElement.outerHTML);
    }
  }, [svgIcon, fill]);

  const [bgLiteral, colorName, strength] = color.split('-');

  return (
    <div
      data-aos={starred ? "fade-up-right" : "fade-up-left"}
      data-aos-delay="0"
      data-aos-duration={starred ? "50" + +index * 2 : "1"}
      className={className
        .concat(' hover:bg-gray-700 transition-all cursor-pointer')
        .concat(' !flex flex-row items-center space-x-3 !min-w-fit')}
      style={{
        border: '1px solid',
        borderColor: colors[colorName][strength]
      }}>
      {
        icon &&
          fill
          ? (
            <div className="h-[24px] w-[24px]"
              dangerouslySetInnerHTML={{ __html: svgIcon }}></div>
          )
          : (
            < Image
              src={icon} alt={name} width={24} height={24} />
          )
          || <></>
      }
      <span className="!ml-2 !text-xs">{name}</span>
      {starred && <div style={badgeStyle}></div>}
    </div>
  );
};

export default SkillChip;
