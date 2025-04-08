"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection: React.FC = () => {
    const socialLinks = [
        {
            href: "mailto:ghinashofa2002@gmail.com",
            icon: <MdEmail size={24} />,
        },
        {
            href: "https://www.linkedin.com/in/ghina-shofa-raudhatul-jannah/",
            icon: <FaLinkedinIn size={24} />,
        },
        { href: "https://github.com/ghinashofa", icon: <FaGithub size={24} /> },
        {
            href: "https://dribbble.com/ghinaashf",
            icon: <FaDribbble size={24} />,
        },
    ];
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center md:justify-end items-center md:items-end bg-[#E1E1E1] px-6 md:px-28">
            {/* Animating "GHINA" Text from Top */}
            <motion.h2
                animate={{ y: [0, 20, 0] }} // Gerak naik-turun
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
                className="absolute font-alfa md:leading-[1.24] text-neutral-800 left-1/2 -translate-x-1/2  md:top-24 text-7xl md:text-[160px] lg:text-[250px] hidden md:block"
            >
                GHINA
            </motion.h2>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-end justify-center w-full max-w-full lg:gap-32 mt-12 md:mt-0">
                {/* Desktop - Left: Description Animating from Left */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden md:block text-left md:w-1/4 md:mb-16"
                    whileInView={{ opacity: 1, x: [50, 0] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p className="text-lg font-semibold">
                        Hello! I'm Ghina{" "}
                        <span className="animate-wave">👋</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        a UI/UX Designer & Front-End Development enthusiast
                        based in Indonesia
                    </p>
                    <Button variant="outline" className="mt-5">
                        Get In Touch
                    </Button>
                </motion.div>

                {/* Desktop - Center: Image Animating from Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="hidden md:block relative w-[200px] h-auto md:w-1/2 md:h-96 lg:w-[530px] md:mt-0 lg:h-full mx-6 rounded-lg"
                    whileInView={{ opacity: 1, y: [50, 0] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Image
                        src="/images/foto-hero.png"
                        alt="Ghina"
                        width={1200}
                        height={500}
                        className="relative z-10 w-full h-full object-cover border-[#E1E1E1] border-[16px] rounded-lg"
                    />
                </motion.div>

                {/* Desktop - Right: Skills and Icons Animating from Right */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="hidden md:flex flex-col text-right md:w-1/4 md:mb-16"
                    whileInView={{ opacity: 1, x: [-50, 0] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p>UI/UX Designer</p>
                    <p>Product Designer</p>
                    <p>Graphic Designer</p>
                    <p>Frontend Developer</p>
                    <div className="flex justify-end mt-4 space-x-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-black text-black transition-all relative hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:border-none hover:shadow-md hover:text-white"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* MOBILE VERSION */}
                <div className="md:hidden flex flex-col items-center text-center relative w-full">
                    {/* GHINA text behind image */}
                    <h2 className="font-alfa text-[90px] -top-16 text-black absolute z-0 opacity-80">
                        GHINA
                    </h2>

                    {/* Foto Animating from Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative z-10 w-[180px] h-auto"
                        whileInView={{ opacity: 1, y: [50, 0] }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <Image
                            src="/images/foto-hero.png"
                            alt="Ghina"
                            width={260}
                            height={340}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Skill Animating from Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileInView={{ opacity: 1, x: [50, 0] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="mt-4 z-10"
                    >
                        <p>UI/UX Designer</p>
                        <p>Product Designer</p>
                        <p>Graphic Designer</p>
                        <p>Frontend Developer</p>
                    </motion.div>

                    {/* Icons Animating from Right */}
                    <div className="flex justify-center mt-4 space-x-4 z-10">
                        <Image
                            src="/images/icon-gmail.svg"
                            alt="Gmail"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/images/icon-linkedin.svg"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/images/icon-github.svg"
                            alt="GitHub"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/images/icon-dribbble.svg"
                            alt="Dribbble"
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* Deskripsi Animating from Top */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileInView={{ opacity: 1, y: [20, 0] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="mt-6 px-2 z-10"
                    >
                        <p className="text-lg font-semibold">
                            Hello! I'm Ghina{" "}
                            <span className="animate-wave">👋</span>
                        </p>
                        <p className="text-gray-600 mt-2">
                            a UI/UX Designer & Front-End Development enthusiast
                            based in Indonesia
                        </p>
                        <button className="mt-4 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                            Get In Touch
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
