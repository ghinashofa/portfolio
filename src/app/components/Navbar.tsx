"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/pages/projectpages" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-[#E1E1E1] z-50 shadow-md">
                <div className="container mx-auto flex items-center justify-between h-[80px] px-6 lg:px-8 max-w-screen-xl">
                    {/* Logo / Brand */}
                    <h2 className="text-lg font-semibold">Portfolio</h2>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-8 font-light">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`relative text-sm transition-all duration-300 ${
                                        pathname === item.href
                                            ? "font-semibold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-black"
                                            : "font-light hover:after:w-full after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md border border-black transition-all"
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute left-0 w-full bg-[#E1E1E1] shadow-md lg:hidden transition-all duration-300 overflow-hidden ${
                        isOpen
                            ? "top-[80px] opacity-100"
                            : "top-[-200px] opacity-0"
                    }`}
                >
                    <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="cursor-pointer text-sm"
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
