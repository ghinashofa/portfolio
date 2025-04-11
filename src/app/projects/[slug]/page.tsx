"use client";

import { notFound } from "next/navigation";
import { projects } from "@/data/project";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { CgLivePhoto } from "react-icons/cg";
import { FaStarOfLife } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { SiTarget } from "react-icons/si";
import { useState } from "react";
import { use } from "react";

type Params = {
    params: {
        slug: string;
    };
};

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params); // ✅ unwrap param

    const projectList = Object.values(projects).flat(); // gabung semua kategori
    const project = projectList.find((proj) => proj.slug === slug);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    if (!project) return notFound();

    return (
        <section className="">
            <div className="min-h-screen bg-animated-grid bg-[#e1e1e1] px-6 py-16 mt-16 text-black">
                <Navbar />

                <div className="md:px-6 mb-8">
                    <div className=" bg-[#D3D3D3] flex items-center text-sm text-gray-600 gap-1 w-fit py-1 md:py-2 px-4 rounded-md">
                        <Link href="/" className="hover:underline text-black">
                            Home
                        </Link>
                        <HiChevronRight />
                        <Link
                            href="/pages/projectpages"
                            className="hover:underline text-black"
                        >
                            Projects
                        </Link>
                        <HiChevronRight />
                        <span className="text-gray-600">{project.title}</span>
                    </div>
                </div>
                <div className="max-w-[700px] mx-auto text-left">
                    <h1 className="text-4xl md:text-[40px] font-bold mb-4 leading-tight">
                        {project.title}
                    </h1>

                    {/* Cover Image */}
                    <div
                        className="relative group w-full rounded-xl my-6 mb-10 shadow-md overflow-hidden cursor-pointer"
                        onClick={() => {
                            setModalImage(project.image);
                            setIsModalOpen(true);
                        }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={700}
                            height={400}
                            className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />

                        {/* Hover Image */}
                        <div className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <div className="w-28 h-28 rounded-full bg-white bg-opacity-90 flex items-center justify-center text-black font-semibold text-sm">
                                View Image
                            </div>
                        </div>
                    </div>

                    <p className="text-sm w-fit bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] text-white rounded-md px-3 py-1 mb-4 ">
                        {project.date}
                    </p>

                    <p className="text-base leading-relaxed text-gray-800 mb-8">
                        {project.projectDesc}
                    </p>
                    {/* ROLE & RESPONSIBILITIES */}
                    <div className="flex flex-col gap-3 mb-8">
                        <h2 className="text-2xl font-bold">
                            Role & Responsibilities
                        </h2>
                        <p className="font-medium">{project.role}</p>
                        {project.highlights && (
                            <ul className="list-none space-y-3">
                                {project.highlights.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span style={{ color: item.color }}>
                                            <FaStarOfLife />
                                        </span>
                                        <span className="-mt-1">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* OBJECTIVES */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-5">Objectives</h2>
                        {project.objectives && (
                            <ul className="list-none space-y-3">
                                {project.objectives.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span style={{ color: item.color }}>
                                            <SiTarget />
                                        </span>
                                        <span className="-mt-1">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* KEY FEATURES */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-5">
                            Key Features
                        </h2>
                        {project.features && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#d6d6db] rounded-xl shadow p-4"
                                    >
                                        <h3 className="text-base font-semibold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-700">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold mb-3">Tools</h2>
                        <div className="flex flex-wrap gap-4 mb-4">
                            {project.tools.map((tool, i) => (
                                <Image
                                    key={i}
                                    src={tool}
                                    alt="tool"
                                    width={40}
                                    height={40}
                                />
                            ))}
                        </div>
                    </div>

                    {/* IMAGES */}
                    <div
                        className="relative group w-full rounded-xl my-6 mb-10 shadow-md overflow-hidden cursor-pointer"
                        onClick={() => {
                            setModalImage(project.image1);
                            setIsModalOpen(true);
                        }}
                    >
                        <Image
                            src={project.image1}
                            alt={project.title}
                            width={700}
                            height={400}
                            className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <div className="w-28 h-28 rounded-full bg-white bg-opacity-90 flex items-center justify-center text-black font-semibold text-sm">
                                View Image
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white border bg-black border-black rounded-full px-8 py-2 hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:text-white hover:border-none hover:shadow-lg transition-all"
                        >
                            <CgLivePhoto /> Live Demo
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
            {isModalOpen && modalImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()} // biar klik dalam modal gak nutup
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="overflow-auto max-h-[80vh]">
                            <img
                                src={modalImage}
                                alt="Zoomed Project"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
