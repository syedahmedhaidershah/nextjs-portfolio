"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import data from '../assets/data/portfolio.json';

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
        I have spent my career working in firms in Netherlands, APAC region and US. Though my firms allowed me to grow and work on these projects, due to NDAs and IP agreements, I am unable to showcase my work explicitly, <span className="text-2xl">However</span> I can elaborate the scale of projects, some of which were alongside the big names in MAANG / FAANG collabs.
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-white flex flex-row justify-start md:justify-center items-center gap-2 py-6 overflow-x-auto md:overflow-x-hidden">
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
