import Image from "next/image";
import React from "react";
import { getAssetPath } from "../libs/asset.lib";

const Footer = () => {
  return (
    <footer className="footer border z-9 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src={getAssetPath("/images/rocketlogo.png")} alt="Logo" width={50} height={50} />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
