"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import data from '../assets/data/portfolio.json';

console.log(
  data.projects
      .map(
        (project, index) => ({
          id: index + 1,
          ...project,
        })
      )
)

const projectsData = [
  ...(
    data.projects
      .map(
        (project, index) => ({
          id: index + 1,
          ...project,
        })
      )
  )
  // {
  //   id: 1,
  //   title: "React Portfolio Website",
  //   description: "Project 1 description",
  //   image: "/images/projects/1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 2,
  //   title: "Potography Portfolio Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Cloud"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-center text-xl text-white mt-4 mb-8 md:mb-12">
        I have spent my career working in firms in Netherlands, APAC region and US. Due to NDAs and IP agreements, I am unable to showcase my work explicitly, <span className="text-2xl">However</span> I can elaborate the scale of projects, some of which were alongside the big names in MAANG / FAANG collabs.
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul
        data-aos="fade-up"
        data-aos-delay="50"
        ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              {...project}
            />
          </motion.li>
        ))}
      </ul>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl mb-2 mt-24 px-10">
        For other projects at scale and projects I have been a part of, lets connect and discuss the scope of work.
      </div>
    </section>
  );
};

export default ProjectsSection;
