"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import data from "../assets/data/portfolio.json";
import SkillChip from "./SkillChip";
import HorizontalImageTextCard from "./HorizontalImageTextCard";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        {
          Object
            .keys(data.displaySkillsCategorized)
            .map((key, categoryIndex) => {
              const skills = data.displaySkillsCategorized[key];

              return <div key={"skill-heading" + categoryIndex}>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="60"
                  className="tablet:m-1 mt-5 py-3 mobile:text-2xl tablet:text-2xl laptop:text-2xl desktop:text-2xl text-bold">{key}</h2>
                <div
                  data-aos="fade-up-left"
                  data-aos-delay="0"
                  data-aos-duration="60"
                  className="mt-0 tablet:mx-1 grid tablet:grid-cols-2 laptop:grid-cols-6 desktop:grid-cols-8 gap-4 grid-cols-2">
                  {
                    skills
                      .map((skill, skillIndex) => (
                        <SkillChip key={key + "-" + skillIndex} index={skillIndex} name={skill.name} color={skill.color} starred={skill.starred} />))
                  }
                </div>
              </div>
            })
        }
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="list-disc pl-0">
        {
          data.resume.education.map((degree, index) => {
            return <Link
              key={"degree-" + index}
              href={degree.site} target="_blank">
              <HorizontalImageTextCard
                image={degree.image}
                alt={`${degree.degree} ${degree.major}`}
                injectContent={
                  <div className="p-3 flex flex-col flex-initial justify-center align-middle w-12/12 laptop:w-8/12 laptop:pl-10 rounded-2xltext-black text-black">
                    <div className="text-2xl mob:text-xl italic">{degree.degree}</div>
                    <div className="text-2xl mob:text-xl font-bold">{degree.major}</div>
                    <div className="text-lg mob:text-base">{degree.institute}</div>
                    <div className="text-lg mob:text-base">{degree.duration}</div>
                  </div>
                } />
            </Link>
          })
        }
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="list-disc pl-0">
        {
          data.resume.certification.map((certificate, index) => {
            return <Link
              key={"certificate-" + index}
              href={certificate.link} target="_blank">
              <HorizontalImageTextCard
                options={{ ...certificate }}
                image={certificate.image}
                alt={`${certificate.name}`}
                injectContent={
                  <div className="p-3 flex flex-col flex-initial justify-center align-middle w-12/12 laptop:w-8/12 laptop:pl-10 rounded-2xltext-black text-black">
                    <div className="text-4xl mob:text-2xl">{certificate.name}</div>
                    <div className="text-lg mob:text-base">{certificate.organization}</div>
                    <div className="text-lg mob:text-base">{certificate.issueDate}</div>
                    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>
                    <div className="text-xs text-gray-500 mob:text-sm break-all font-semibold italic">{certificate.credentialID}</div>
                  </div>
                } />
            </Link>
            // <li key={"certificate-" + index}>
            //   <div class="text-4xl mob:text-2xl">{certificate.name}</div>
            //   <div class="text-lg mob:text-base">{certificate.organization}</div>
            //   <div class="text-lg mob:text-base">{certificate.issueDate}</div>
            //   <div class="text-xs mob:text-sm">{certificate.credentialID}</div>
            // </li>
          })
        }
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 sm:px-1 mob:px-1 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} alt="Sample work image" /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            data-aos="fade-up-right"
            data-aos-delay="50"
            className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p
            data-aos="fade-up-left"
            data-aos-delay="50"
            className="text-base lg:text-xl md:text-lg mb-10">
            {data.aboutpara.map((paraLine, index) => {
              return <span
                data-aos="fade-up-left"
                data-aos-delay="100"
                key={'about-paraline-' + index}>{paraLine}<br /><br /></span>;
            })}
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
