import { notFound } from "next/navigation";
import { projects } from "@/data/project";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

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
            <div className="min-h-screen bg-[#E1E1E1] px-6 md:px-28 py-12 mt-20 text-black">
                <Navbar />
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-sm mb-2 bg-gray-200 px-3 py-1 w-fit rounded">
                    {project.date}
                </p>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="rounded-xl my-6 shadow-lg"
                />
                <p className="text-lg mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
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
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 py-2 rounded-full"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
