export type Project = {
    slug: string;
    tag: string;
    date: string;
    title: string;
    description: string;
    projectDesc: string;
    image: string;
    tools: string[];
    // link: string;
    liveDemo: string;
};

export type ProjectCategory = {
    [category: string]: Project[];
};

export const tagColors: { [key: string]: string } = {
    Frontend: "from-blue-500 to-indigo-500",
    "UI/UX Design": "from-purple-500 to-purple-700",
    "Graphic Design": "from-orange-500 to-orange-700",
    "Web Development": "from-green-500 to-green-700", // kamu bisa tambahkan ini juga
};

export const projects: ProjectCategory = {
    "UI/UX Design": [
        {
            slug: "loan-management-dashboard",
            tag: "UI/UX Design",
            date: "February 2025",
            title: "Loan Management Dashboard",
            description:
                "A web-based admin dashboard designed to digitize the manual loan recording process. This system enables efficient loan and payment data management, reduces errors, and improves operational speed.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "dashboard-mudik-pln",
            tag: "UI/UX Design",
            date: "February 2025",
            title: "Dashboard Mudik PLN",
            description:
                "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/mudik-pln-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "pataland",
            tag: "UI/UX Design",
            date: "June 2024",
            title: "PataLand",
            description:
                "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/pataland-dekstop.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "spacify",
            tag: "UI/UX Design",
            date: "June 2024",
            title: "Spacify",
            description:
                "Donorind as a mobile app will provide blood donation information to raise awareness, offer real-time updates, and make donating easier for everyone.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/spacify.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "speakerseeker",
            tag: "UI/UX Design",
            date: "June 2024",
            title: "SpeakerSeeker",
            description:
                "Donorind as a mobile app will provide blood donation information to raise awareness, offer real-time updates, and make donating easier for everyone.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/speakerseeker.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
    ],
    "Web Development": [
        {
            slug: "mudik-asyik-pln",
            tag: "Web Development",
            date: "June 2024",
            title: "Mudik Asyik Bersama PLN 2025",
            description:
                "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/MUDIK-PLN.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "bacain-app",
            tag: "Web Development",
            date: "June 2024",
            title: "Bacain",
            description:
                "Consure, a mobile app, provides one-on-one consultations on careers, competitions, and scholarships, guided by experts to help students overcome these obstacles.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/bacain.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
        {
            slug: "budgetbuddy",
            tag: "Web Development",
            date: "June 2024",
            title: "BudgetBuddy",
            description:
                "Consure, a mobile app, provides one-on-one consultations on careers, competitions, and scholarships, guided by experts to help students overcome these obstacles.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            image: "/images/budgetbuddy.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
        },
    ],
    "Graphic Design": [],
};
