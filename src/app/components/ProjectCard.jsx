import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getAssetPath } from "../libs/asset.lib";

const ProjectCard = ({ image, title, subtitle, description, gitUrl, previewUrl, region, pilotYear, launchYear, duration }) => {
  return (
    <div className="border border-[#63656F] rounded-lg h-full flex flex-col justify-between overflow-hidden focus:bg-slate-50 transition:bg">
      <div className="flex-1 flex flex-col">
        <div
          className="h-44 md:h-48 relative group overflow-hidden bg-[#0a0d14]"
          style={{ background: `url(${getAssetPath(image)}) center / cover no-repeat` }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 group-hover:flex transition-all duration-300">
            {gitUrl && gitUrl !== "https://github.com/syedahmedhaidershah/" && (
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition"
                title="View Source on GitHub"
              >
                <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        </div>
        <div className="text-white py-6 px-4 flex-1">
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-bold tracking-tight">
            {gitUrl && gitUrl !== "https://github.com/syedahmedhaidershah/" ? (
              <Link
                href={gitUrl}
                target="_blank"
                className="hover:text-primary-400 transition inline-flex items-center gap-1.5"
              >
                <span>{title}</span>
                <span className="text-sm text-primary-400">↗</span>
              </Link>
            ) : (
              title
            )}
          </h5>
          {subtitle && (
            <p className="text-sm font-medium text-slate-300/90 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <ul className="text-[#ADB7BE] list-disc p-3">{(
          Array.isArray(description)
            ? description.map((descriptionLine, dIndex) => <li key={title+"-description-"+dIndex}>{descriptionLine}</li>)
            : description
        )}</ul>
        </div>
        <div className="p-3 flex items-center justify-between text-xs text-slate-400 border-t border-[#33353F]/40">
          <span>{region || "Global Architecture"}</span>
          {launchYear && (
            <span className="font-medium text-slate-400">{launchYear}</span>
          )}
        </div>
      </div>

      {/* Badge Status Strip */}
      {gitUrl && gitUrl !== "https://github.com/syedahmedhaidershah/" ? (
        <Link
          href={gitUrl}
          target="_blank"
          className="flex items-center justify-between px-4 py-2.5 bg-emerald-950/40 border-t border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:text-white transition rounded-b-lg group/strip"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase">Source Code Available</span>
          </div>
          <span className="text-xs font-medium text-emerald-400 group-hover/strip:text-white group-hover/strip:translate-x-0.5 transition-transform">
            View &gt;
          </span>
        </Link>
      ) : (
        <div className="flex items-center justify-between px-4 py-2.5 bg-amber-950/30 border-t border-amber-600/30 text-amber-300/90 rounded-b-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-xs font-semibold tracking-wide uppercase">NDA / Confidential Source Code</span>
          </div>
          <span className="text-[11px] text-amber-400/70 font-mono">
            IP Protected
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
