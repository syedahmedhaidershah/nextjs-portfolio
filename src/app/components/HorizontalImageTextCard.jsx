import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import colors from 'tailwindcss/colors';
import { content } from "../../../tailwind.config";
import Image from "next/image";

const HorizontalImageTextCard = ({ image, alt, injectContent, options = {} }) => {
  const { theme } = useTheme();
  const {
    imagePadding = false,
  } = options;

  return (
    <div
        data-aos="fade-up-left"
        data-aos-delay="50"
        data-aos-duration="100"
        className="rounded-2xl overflow-hidden bg-white flex flex-1 flex-col laptop:flex-row my-2 mb-6 p-0">
        <div className="p-0 flex-initial w-12/12 laptop:w-4/12 text-black">
            <Image
                className={imagePadding ? 'p-4' : 'm-0'}
                src={image}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                priority />
        </div>
        {injectContent}
    </div>
  );
};

export default HorizontalImageTextCard;
