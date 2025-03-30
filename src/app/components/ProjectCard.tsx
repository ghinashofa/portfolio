"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    tag: "Frontend" | "UI/UX Design" | "Graphic Design";
}

const tagColors: { [key: string]: string } = {
    Frontend: "from-blue-500 to-indigo-500",
    "UI/UX Design": "from-purple-500 to-purple-700",
    "Graphic Design": "from-orange-500 to-orange-700",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageSrc,
    tag,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Deteksi ukuran layar saat pertama kali render
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg ke atas dianggap desktop
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        if (!isDesktop) {
            setIsClicked(!isClicked);
        }
    };

    return (
        <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl cursor-pointer"
            onMouseEnter={() => isDesktop && setIsHovered(true)}
            onMouseLeave={() => isDesktop && setIsHovered(false)}
            onClick={handleClick}
        >
            {/* Default Card */}
            <motion.div
                className="relative w-full rounded-2xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered || isClicked ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={600}
                    className="rounded-2xl"
                />

                {/* Tag di Pojok Kiri Atas */}
                <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-lg text-white shadow-md bg-gradient-to-r ${tagColors[tag]}`}
                >
                    {tag}
                </span>

                <div className="absolute bottom-0 left-0 right-0 bg-[#1C1C22] bg-opacity-60 p-6 flex flex-col gap-2 text-white">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm font-light text-gray-400 leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </motion.div>

            {/* Hover Effect Card */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                    y: isHovered || isClicked ? 0 : 50, 
                    opacity: isHovered || isClicked ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden"
            >
                {/* Gambar Tetap Ada di Bawah */}
                <Image 
                    src={imageSrc} 
                    alt={title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute inset-0 w-full h-full" 
                />

                {/* Overlay Rectangle dengan Opacity & Blur */}
                <div className="absolute inset-0 bg-[rgba(28,28,34,0.7)] backdrop-blur-md"></div>

                {/* Konten di Atas Rectangle */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                    {/* Tag Tetap Muncul */}
                    <span
                        className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-lg text-white shadow-md bg-gradient-to-r ${tagColors[tag]}`}
                    >
                        {tag}
                    </span>

                    <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                    <p className="text-xs md:text-sm text-justify font-light mt-1 md:mt-2">{description}</p>
                    <Button size="sm" className="mt-4 md:mt-6 ">See project</Button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
