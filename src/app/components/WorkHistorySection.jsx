"use client";
import React from "react";
import data from "../assets/data/portfolio.json";

const WorkHistorySection = () => {
    return (
        <section className="text-white" id="work-history">
            <div className="py-8 sm:px-1 mob:px-1 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2
                        data-aos="fade-up-right"
                        data-aos-delay="50"
                        className="text-4xl font-bold text-white mb-4">Work History</h2>
                    <div className="mt-8 relative">
                        {data.workHistory.map((job, index) => (
                            <div key={"job-" + index} className={`relative z-2 mb-8 flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center`}>
                                <div className="w-full sm:w-1/2 p-4 bg-gradient-to-br from-gray-800 to-violet-950 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                    <h3 className="text-2xl font-bold">{job.position}</h3>
                                    <p className="text-lg text-gray-400">{job.company}</p>
                                    <p className="text-base text-gray-500">{job.duration}</p>
                                    <p className="text-base text-gray-300">{job.description}</p>
                                </div>
                                <div className="w-full sm:w-1/2 p-4 flex justify-center">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                        ))}
                        <div className="absolute left-1/2 transform top-0 -translate-x-1/2 w-1 bg-white h-full hidden sm:block z-1"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkHistorySection;
