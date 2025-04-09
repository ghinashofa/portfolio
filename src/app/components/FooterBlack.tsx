"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

export default function FooterBlack() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (marqueeRef.current) {
            marqueeRef.current.innerHTML += marqueeRef.current.innerHTML;
        }
    }, []);

    return (
        <footer className="bg-black text-[#b8b6b6] pt-16 pb-4 shadow-md z-10 ">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-20 px-8 lg:px-16 text-white py-12">
                <div>
                    <h2 className="text-[#b8b6b6] font-alfa text-3xl tracking-wider">
                        CONTACT
                    </h2>
                    <hr className="w-full border-zinc-300 border-2 mt-2 mb-4" />
                    <p className="text-lg text-[#b8b6b6]">
                        Looking to collaborate or have any questions? Feel free
                        to contact me.
                    </p>
                    <p className="mt-4 text-lg flex items-center gap-2">
                        <MdEmail className="w-5 h-5" />:
                        <Link
                            href="mailto:ghinashofa2002@gmail.com"
                            className="hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-clip-text hover:text-transparent transition-colors"
                        >
                            ghinashofa2002@gmail.com
                        </Link>
                    </p>
                    <p className="mt-2 text-lg flex items-center gap-2">
                        <FaGlobe className="w-5 h-5" />:
                        <Link
                            href="https://yourwebsite.com"
                            target="_blank"
                            className="hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-clip-text hover:text-transparent transition-colors"
                        >
                            www.yourwebsite.com
                        </Link>
                    </p>
                    <p className="mt-4 text-lg">Bandung, Indonesia</p>
                </div>
                <div className="mt-8 md:mt-0 w-full md:w-1/2">
                    <form
                        action="https://formspree.io/f/xjkyenbz"
                        method="POST"
                        className="flex flex-col space-y-4"
                    >
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="border border-zinc-400 p-3 text-[#b8b6b6] rounded-md w-1/2 focus:border-zinc-300 focus:ring-1 focus:ring-zinc-900"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="name@email.com"
                                required
                                className="border border-zinc-400 p-3 text-[#b8b6b6] rounded-md w-1/2 focus:border-zinc-300 focus:ring-1 focus:ring-zinc-900"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message..."
                            required
                            className="border border-zinc-400 p-3 text-[#b8b6b6] rounded-md h-24 focus:border-zinc-300 focus:ring-1 focus:ring-zinc-900"
                        ></textarea>

                        <Button
                            type="submit"
                            className="mt-2"
                            variant="light"
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>

            {/* Marquee */}
            <div className="mt-16 overflow-hidden whitespace-nowrap border-t border-gray-300 pt-6">
                <div
                    ref={marqueeRef}
                    className="flex items-center space-x-8 animate-marquee text-6xl font-alfa tracking-widest font-bold text-[#e3f054]"
                >
                    {[
                        "PROJECTS",
                        "*",
                        "DESIGN",
                        "*",
                        "DEVELOPMENT",
                        "*",
                        "CONSULTING",
                        "*",
                        "INNOVATION",
                    ].map((word, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
                        >
                            {word}
                        </Link>
                    ))}
                </div>
            </div>
            <p className="text-[#b8b6b6] text-center text-sm mt-4 md:mt-7">
                ©2025 <span className="">Ghina Shofa.</span> All Rights
                Reserved.
            </p>

            {/* Marquee Animation */}
            <style jsx>{`
                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 10s linear infinite;
                }
            `}</style>
        </footer>
    );
}
