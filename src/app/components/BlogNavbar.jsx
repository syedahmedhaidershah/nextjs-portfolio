"use client";
import Link from "next/link";
import React from "react";

const BlogNavbar = () => {
  return (
    <nav className="!w-full fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 !h-fit">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <span className="bg-gradient-to-r from-primary-400 to-secondary-600 text-transparent bg-clip-text">
            My Blog
          </span>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link href="/" className="text-white hover:text-gray-400 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog#blog-contact" className="text-white hover:text-gray-400 text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar; 