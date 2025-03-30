"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const options = [
    { title: "UI/UX DESIGN", link: "/uiux" },
    { title: "FRONT-END WEB DEVELOPMENT", link: "/frontend" },
    { title: "GRAPHIC DESIGN", link: "/graphic" },
];
import Link from "next/link";
import Button from "./components/Button";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const projects = [
        {
            title: "PataLand",
            description:
                "A web-based tourism platform that helps users explore and plan their next adventure easily.",
            imageSrc: "/images/pataland-mobile.png",
            tag: "UI/UX Design",
        },
        {
            title: "Bacain",
            description:
                "Bacain is a web-based news platform that delivers the latest stories across categories like Business, Food, and Fashion. With a clean interface and intuitive navigation, it ensures a seamless browsing experience.   This project strengthened my skills in building a well-structured, responsive web app with efficient categorization, focusing on usability and user experience.",
            imageSrc: "/images/bacain.png",
            tag: "Frontend",
        },
        {
            title: "BudgetBuddy",
            description:
                "BudgetBuddy is a web-based app that helps users manage their personal finances easily. It allows users to track income and expenses, categorize transactions, and set monthly budgets. A dashboard provides clear financial summaries with visual graphs to monitor spending. With BudgetBuddy, users can stay on top of their finances and reach their financial goals more effectively.",
            imageSrc: "/images/budgetbuddy.png",
            tag: "Frontend",
        },
        {
            title: "Spacify",
            description:
                "A platform to find and book spaces for work, meetings, and events.",
            imageSrc: "/images/spacify.png",
            tag: "UI/UX Design",
        },
    ];
    const skills = [
        { name: "Figma", icon: "/images/icon-figma.svg" },
        { name: "Adobe Illustrator", icon: "/images/icon-ai.svg" },
        { name: "Maze", icon: "/images/icon-maze.svg" },
        { name: "Whimsical", icon: "/images/icon-whimsical.svg" },
        { name: "Notion", icon: "/images/icon-notion.svg" },
        { name: "VS Code", icon: "/images/icon-vscode.svg" },
        { name: "HTML", icon: "/images/icon-html.svg" },
        { name: "CSS", icon: "/images/icon-css.svg" },
        { name: "JavaScript", icon: "/images/icon-js.svg" },
        { name: "TypeScript", icon: "/images/icon-typescript.svg" },
        { name: "React JS", icon: "/images/icon-react.svg" },
        { name: "Next JS", icon: "/images/icon-nextjs.svg" },
        { name: "Tailwind CSS", icon: "/images/icon-tailwind.svg" },
        { name: "Bootstrap", icon: "/images/icon-bootstrap.svg" },
        { name: "Framer Motion", icon: "/images/icon-motion.svg" },
    ];
    const experiences = [
        {
            role: "UI/UX Designer & UI Developer",
            company: "PT Gerbang Sinergi Prima",
            year: "2025 - Present",
        },
        { role: "UI/UX Designer Intern", company: "Paradimensi", year: "2024" },
        {
            role: "Front-End React Dev Student",
            company: "Hacktiv8",
            year: "2024",
        },
        {
            role: "Graphic Designer Intern",
            company: "Buangdisini",
            year: "2023",
        },
        {
            role: "Product Designer",
            company: "BCC Filkom UB",
            year: "2022 - 2023",
        },
        {
            role: "UI/UX Research & Design Student",
            company: "Binar Academy",
            year: "2022",
        },
    ];

    const achievements = [
        {
            title: "3rd Winner of UX Design Competition",
            event: "4C National - Universitas Brawijaya - 2023",
        },
        {
            title: "3rd Winner of Hackathon Competition",
            event: "8th Closer - Telkom University - 2022",
        },
        {
            title: "3rd Winner of UI/UX Design Competition",
            event: "MIKASI - Universitas Pendidikan Indonesia - 2022",
        },
        {
            title: "3rd Winner of Web Design Competition",
            event: "GAYATAMA 3 - Universita Negeri Surabaya - 2022",
        },
        {
            title: "2nd Winner of Hackathon Competition",
            event: "FIND IT - Universitas Gadjah Mada - 2022",
        },
    ];

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <section className="container mx-auto px-8 lg:px-16 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
                <motion.h2
                    className="w-1/3 text-white text-4xl font-bold text-left leading-tight"
                    initial={{ opacity: 0, x: -50 }} // Start from the left side
                    animate={{ opacity: 1, x: 0 }} // End at the original position
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    whileInView={{ x: [0, 20, -20, 0] }} // Back-and-forth movement on scroll
                    viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the element is visible
                >
                    Ghina <br /> Shofa
                </motion.h2>

                <div className="flex flex-col w-2/3 mt-6 md:mt-0 gap-3">
                    <motion.p
                        className="text-white text-base font-thin text-left tracking-wider leading-loose mb-6"
                        initial={{ opacity: 0, x: 50 }} // Start from the right side
                        animate={{ opacity: 1, x: 0 }} // End at the original position
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        whileInView={{ x: [0, -20, 20, 0] }} // Back-and-forth movement on scroll
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        I'm a UI/UX designer with over two years of experience
                        in web and mobile design, currently building my Frontend
                        Development skills. I’m passionate about creating
                        user-friendly designs that blend creativity with
                        functionality. My goal is to design experiences that
                        inspire and make an impact. Let’s connect with me! ✨
                    </motion.p>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Animated Stat Items */}
                        {[
                            { value: "15+", label: "Project's Done" },
                            { value: "3+", label: "Years Of Experience" },
                            { value: "5", label: "Awards" },
                            { value: "5+", label: "Clients Served" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-left gap-2"
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -30 : 30,
                                }} // Start from the left or right depending on the index
                                animate={{ opacity: 1, x: 0 }} // End at the original position
                                transition={{
                                    duration: 1,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                                whileInView={{ x: [0, -15, 15, 0] }} // Back-and-forth movement on scroll
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <motion.h2
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] text-4xl font-bold"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {stat.value}
                                </motion.h2>
                                <p className="text-white text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Option Section */}
            <section className="bg-[#1C1C22]">
                <div className="container mx-auto text-white px-8 lg:px-16 py-16 lg:py-28">
                    <div className="max-w-full mx-auto">
                        {/* Judul dan Tombol */}
                        <motion.div
                            ref={ref}
                            className="flex flex-row items-center justify-between"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }} // Animasi berjalan berulang
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Judul */}
                            <motion.h2
                                className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                Solving problems through <br />
                                <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-bold">
                                    impactful design
                                </span>
                            </motion.h2>

                            {/* Tombol */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <Button variant="default" size="responsive">
                                    See All Projects
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Opsi Portfolio */}
                        <div className="mt-8">
                            {options.map((option, index) => (
                                <Link href={option.link} key={index}>
                                    <motion.div
                                        className="flex justify-between items-center py-6 md:py-8 border-b border-white cursor-pointer relative overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.2,
                                            duration: 0.6,
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.08)",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <span className="text-lg md:text-2xl font-medium">
                                            {option.title}
                                        </span>
                                        <MdArrowOutward className="text-2xl md:text-3xl" />

                                        {/* Efek Cahaya Glow saat Hover */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 bg-gradient-to-r from-purple-500 to-red-500 blur-xl"
                                            whileHover={{
                                                opacity: 0.2,
                                                transition: { duration: 0.3 },
                                            }}
                                        />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* My Last Project */}
            <section className="overflow-hidden flex flex-col items-center justify-center min-h-screen px-8 lg:px-16 py-16 lg:py-28 bg-black text-white">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-12"
                    initial={{ opacity: 0, x: -50 }} // Mulai dari kiri dengan opacity 0
                    whileInView={{ opacity: 1, x: 0 }} // Saat masuk viewport, muncul dari kiri ke posisi semula
                    viewport={{ once: false }} // Animasi hanya berjalan sekali
                    transition={{ duration: 1, ease: "easeOut" }} // Efek smooth
                >
                    Recent{" "}
                    <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent ml-2 font-bold">
                        Project
                    </span>
                </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mt-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -100 : 100, // Muncul dari kiri-kanan bergantian
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }} // Animasi berjalan setiap kali discroll masuk viewport
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imageSrc={project.imageSrc}
                                    tag={
                                        [
                                            "Frontend",
                                            "UI/UX Design",
                                            "Graphic Design",
                                        ].includes(project.tag)
                                            ? (project.tag as
                                                  | "Frontend"
                                                  | "UI/UX Design"
                                                  | "Graphic Design")
                                            : "Frontend"
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>
            </section>

            {/* My Skills Section */}
            <section className="bg-[#1C1C22] py-16 lg:py-28">
                <div className="container mx-auto text-white px-8 lg:px-16">
                    <motion.h2
                        className="text-2xl md:text-3xl text-center font-semibold mb-3 md:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        My
                        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent ml-2 font-bold">
                            Skills
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-center font-thin tracking-wider mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        A collection of my go-to tools and technologies for
                        UI/UX design and Front-End Development.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#2A2A32] py-6 px-4 rounded-xl flex flex-col items-center justify-center shadow-lg"
                                whileHover={{ scale: 1.1 }} // Zoom hanya saat di-hover
                                initial={{ opacity: 0, y: 20 }} // Saat pertama muncul, hanya efek fade & slide
                                whileInView={{ opacity: 1, y: 0 }} // Tidak ada perubahan scale saat muncul
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                />
                                <p className="text-white mt-6 text-sm font-normal">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Experience & Achievement Section */}
            <section className="overflow-hidden py-16 lg:py-28">
                <motion.h2
                    className="text-2xl md:text-3xl text-center font-semibold mb-3 md:mb-6 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mr-2 font-bold">
                        Experiences
                    </span>
                    &
                    <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent ml-2 font-bold">
                        Achievements
                    </span>
                </motion.h2>

                <div className="container mx-auto text-white px-8 lg:px-16 flex flex-col md:flex-row justify-center max-w-5xl">
                    {/* Experience - Kiri */}
                    <div className="w-full md:w-1/2 mt-4">
                        <div className="relative">
                            <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-500"></div>

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex items-center max-w-sm my-6 md:my-8"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex-shrink-0 shadow-md relative z-10"></div>

                                    <div className="ml-6">
                                        <h3 className="font-medium text-white text-base md:text-lg">
                                            {exp.role}
                                        </h3>
                                        <p className="font-normal mt-2 bg-gradient-to-r from-[#B96CE7] to-[#39A0B8] bg-clip-text text-transparent text-sm md:text-base">
                                            {exp.company} - {exp.year}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievement - Kanan */}
                    <div className="w-full md:w-1/2 mt-4">
                        <div className="relative">
                            <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-500"></div>

                            {achievements.map((ach, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex items-center max-w-sm my-6 md:my-8"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex-shrink-0 shadow-md relative z-10"></div>

                                    <div className="ml-6">
                                        <h3 className="font-medium text-white text-base md:text-lg">
                                            {ach.title}
                                        </h3>
                                        <p className="bg-gradient-to-r from-[#B96CE7] to-[#39A0B8] bg-clip-text text-transparent text-sm md:text-base mt-2 font-normal">
                                            {ach.event}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
