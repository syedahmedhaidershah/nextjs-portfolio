"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import data from '../assets/data/portfolio.json';

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="px-12 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello 👋, I&apos;m{" "}
            </span>
            <br></br>
            <div className="px-0 laptop:px-12">
              <TypeAnimation
                sequence={[
                  ...data.hero.iamList
                    .map(heroText => ([heroText, 1000]))
                    .flat(),
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="px-12 text-[#ADB7BE] text-base sm:text-xl mb-6 lg:text-2xl">
            {data.headerTaglineFour}
          </p>
          <p className="px-12 text-[#ADB7BE] text-base sm:text-base mb-6 lg:text-lg">
            {data.headerTaglineThree}
          </p>
          <div className="px-12">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mb-2 mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Get in Touch
            </Link>
            <Link
              href={data.resumeLink}
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mb-2 mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </Link>
            <Link
              href={data.socials.find(social => social.title.toLowerCase() === 'github').link}
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mb-8 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Github Profile
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              unoptimized={true}
              src="/images/rocket-7757105_640.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
