"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFigma, FaReact, FaBlender } from "react-icons/fa";
import { SiFramer, SiGoogleplay } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CgLivePhoto } from "react-icons/cg";
import { projects } from "@/data/project";

// const allProjects = {
//     "UI/UX Design": [
//         {
//             date: "February 2025",
//             title: "Loan Management Dashboard",
//             description:
//                 "A web-based admin dashboard designed to digitize the manual loan recording process. This system enables efficient loan and payment data management, reduces errors, and improves operational speed.",
//             image: "/images/dantal-dashboard.png",
//             tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "February 2025",
//             title: "Dashboard Mudik PLN",
//             description:
//                 "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
//             image: "/images/mudik-pln-dashboard.png",
//             tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "June 2024",
//             title: "PATALAND",
//             description:
//                 "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
//             image: "/images/pataland-dekstop.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "June 2024",
//             title: "SPACIFY",
//             description:
//                 "Donorind as a mobile app will provide blood donation information to raise awareness, offer real-time updates, and make donating easier for everyone.",
//             image: "/images/spacify.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "June 2024",
//             title: "SPEAKERSEEKER",
//             description:
//                 "Donorind as a mobile app will provide blood donation information to raise awareness, offer real-time updates, and make donating easier for everyone.",
//             image: "/images/speakerseeker.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//     ],
//     "Web Development": [
//         {
//             date: "June 2024",
//             title: "Mudik Asyik Bersama PLN 2025",
//             description:
//                 "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
//             image: "/images/MUDIK-PLN.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "June 2024",
//             title: "BACAIN APP",
//             description:
//                 "Consure, a mobile app, provides one-on-one consultations on careers, competitions, and scholarships, guided by experts to help students overcome these obstacles.",
//             image: "/images/bacain.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//         {
//             date: "June 2024",
//             title: "BUDGETBUDDY",
//             description:
//                 "Consure, a mobile app, provides one-on-one consultations on careers, competitions, and scholarships, guided by experts to help students overcome these obstacles.",
//             image: "/images/budgetbuddy.png",
//             tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
//             link: "#",
//             liveDemo: "https://live-demo-loan-dashboard.com",
//         },
//     ],
//     "Graphic Design": [],
// };

const tabs = ["UI/UX Design", "Web Development", "Graphic Design"];
const projectsPerPage = 4;

export default function ProjectPages() {
    const [activeTab, setActiveTab] =
        useState<keyof typeof projects>("UI/UX Design");
    const [currentPage, setCurrentPage] = useState(1);

    const currentProjects = projects[activeTab];
    const totalPages = Math.ceil(currentProjects.length / projectsPerPage);

    const paginatedProjects = currentProjects.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    useEffect(() => {
        setCurrentPage(1); // reset ke page 1 saat tab berganti
    }, [activeTab]);

    return (
        <section>
            <div className="bg-[#E1E1E1] px-6 md:px-28 py-12 bg-animated-grid min-h-screen">
                <Navbar />
                <div className="mt-24">
                    <h1 className="text-4xl md:text-5xl font-alfa text-center mb-8">
                        PROJECTS
                    </h1>

                    {/* Tabs */}
                    <div className="bg-[#D3D3D3] rounded-full p-1 flex w-full max-w-3xl mx-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() =>
                                    setActiveTab(tab as keyof typeof projects)
                                }
                                className={`flex-1 text-center text-sm md:text-base font-semibold px-4 py-1 md:py-2 rounded-full transition-all duration-300
                  ${
                      activeTab === tab
                          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 text-white shadow-md"
                          : "text-black"
                  }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-24 md:gap-32 mt-16">
                        <AnimatePresence mode="wait">
                            {paginatedProjects.length > 0 ? (
                                paginatedProjects.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{
                                            opacity: 0,
                                            y: 60,
                                            scale: 0.95,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{
                                            opacity: 0,
                                            y: -60,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className={`flex flex-col md:flex-row items-center gap-12 ${
                                            index % 2 === 1
                                                ? "md:flex-row-reverse"
                                                : ""
                                        }`}
                                    >
                                        <motion.div
                                            className="w-full md:w-1/2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="rounded-xl w-full h-full object-cover shadow-md"
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="w-full md:w-1/2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{
                                                delay: 0.3,
                                                duration: 0.6,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="text-xs py-1 px-2 w-fit bg-[#D3D3D3] rounded-md mb-2">
                                                {project.date}
                                            </p>
                                            <h2 className="text-3xl font-bold mb-4">
                                                {project.title}
                                            </h2>
                                            <p className="text-gray-700 mb-5 leading-relaxed text-base md:text-lg">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 mb-6">
                                                {project.tools.map(
                                                    (icon, i) => (
                                                        <img
                                                            key={i}
                                                            src={icon}
                                                            alt={`tool-${i}`}
                                                            className="w-10 h-10"
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="flex flex-rows gap-4">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-white border bg-black border-black rounded-full px-5 py-2 hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:text-white hover:border-none hover:shadow-lg transition-all"
                                                >
                                                    See project <BsArrowRight />
                                                </Link>
                                                <Link
                                                    href={project.liveDemo}
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-black border border-black rounded-full px-5 py-2 hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:text-white hover:border-none hover:shadow-lg transition-all"
                                                >
                                                    <CgLivePhoto /> Live Demo
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.p
                                    className="text-center text-gray-500 text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Belum ada project untuk kategori ini.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center items-center gap-4">
                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1)
                                    )
                                }
                                className={`px-4 py-2 border rounded-full font-medium ${
                                    currentPage === 1
                                        ? "text-gray-400 border-gray-300 cursor-not-allowed"
                                        : "hover:bg-black hover:text-white border-black"
                                }`}
                            >
                                Prev
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 rounded-full text-sm font-semibold flex items-center justify-center
                    ${
                        currentPage === i + 1
                            ? "bg-black text-white"
                            : "text-black hover:bg-gray-300"
                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(prev + 1, totalPages)
                                    )
                                }
                                className={`px-4 py-2 border rounded-full font-medium ${
                                    currentPage === totalPages
                                        ? "text-gray-400 border-gray-300 cursor-not-allowed"
                                        : "hover:bg-black hover:text-white border-black"
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
}
