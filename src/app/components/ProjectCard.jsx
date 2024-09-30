import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ image, title, description, gitUrl, previewUrl, region, pilotYear, launchYear, duration }) => {
  return (
    <div className="border border-[#63656F] rounded-lg min-h-full focus:bg-slate-50 transition:bg">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden bg-white text-black"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        {/* group-hover:flex group-hover:bg-opacity-80 */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden transition-all duration-500 ">
          {/* <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <ul className="text-[#ADB7BE] list-disc p-3">{(
          Array.isArray(description)
            ? description.map((descriptionLine, dIndex) => <li key={title+"-description-"+dIndex}>{descriptionLine}</li>)
            : description
        )}</ul>
      </div>
      <div className="p-3">
        {region && (<div className="text-base mt-2 font-semibold text-right">{region}</div>)}
        {launchYear && (<div className="text-base text-right mb-3">
          <span className="font-semibold">{launchYear}</span>
        </div>)}
      </div>
    </div>
  );
};

export default ProjectCard;
