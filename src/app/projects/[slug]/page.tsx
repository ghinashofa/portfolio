import { notFound } from "next/navigation";
import { projects } from "@/data/project";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { CgLivePhoto } from "react-icons/cg";
import { FaStarOfLife } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

type Params = {
    params: {
        slug: string;
    };
};

export default function ProjectDetailPage({ params }: Params) {
    const slug = params.slug;

    const projectList = Object.values(projects).flat(); // gabung semua kategori
    const project = projectList.find((proj) => proj.slug === slug);

    if (!project) return notFound();

    return (
        <section className="">
            <div className="min-h-screen bg-animated-grid bg-[#e1e1e1] px-6 py-16 mt-16 text-black">
                <Navbar />

                <div className="flex items-center text-sm text-gray-600 gap-1 px-6 bg-black py-2 w-fit mb-6">
                    <Link href="/" className="hover:underline text-gray-700">
                        Home
                    </Link>
                    <HiChevronRight />
                    <Link
                        href="/project"
                        className="hover:underline text-gray-700"
                    >
                        Projects
                    </Link>
                    <HiChevronRight />
                    <span className="text-gray-500">{project.title}</span>
                </div>
                <div className="max-w-[700px] mx-auto text-left">
                    <h1 className="text-4xl md:text-[42px] font-bold mb-4 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-sm w-fit bg-[#D3D3D3] rounded-md px-3 py-1 ">
                        {project.date}
                    </p>

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={700}
                        height={400}
                        className="rounded-xl my-8 shadow-md object-cover w-full"
                    />

                    <p className="text-base leading-relaxed text-gray-800 mb-8">
                        {project.projectDesc}
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                        <h2 className="text-2xl font-bold">
                            Role & Responsibilities
                        </h2>
                        <p className="font-medium">
                            In this project, I worked as a UI/UX Designer. My
                            responsibilities include:
                        </p>
                        <ul className="list-none space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-[#B16CEA]">
                                    <FaStarOfLife />
                                </span>
                                <span className="-mt-1">
                                    Doing user research and analyzing the manual
                                    loan recording process with product manager.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#D366B2]">
                                    <FaStarOfLife />
                                </span>
                                <span className="-mt-1">
                                    Designing the interface of the web admin
                                    panel using Figma.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#F5607A]">
                                    <FaStarOfLife />
                                </span>
                                <span className="-mt-1">
                                    Making interactive prototypes to test the
                                    user flow.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FF9C50]">
                                    <FaStarOfLife />
                                </span>
                                <span className="-mt-1">
                                    Working together with the client to make
                                    sure the design matches their needs.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFA74B]">
                                    <FaStarOfLife />
                                </span>
                                <span className="-mt-1">
                                    Testing and improving the system based on
                                    feedback.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-10">
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

                    <div className="flex gap-4">
                        <Link
                            href={project.liveDemo}
                            className="inline-flex items-center gap-2 text-sm font-medium text-white border bg-black border-black rounded-full px-5 py-2 hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:text-white hover:border-none hover:shadow-lg transition-all"
                        >
                            <CgLivePhoto /> Live Demo
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
