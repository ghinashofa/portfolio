export type Project = {
    slug: string;
    tag: string;
    date: string;
    title: string;
    description: string;
    projectDesc: string;
    role: string;
    image: string;
    tools: string[];
    liveDemo: string;
    highlights?: {
        color: string;
        text: string;
    }[];
    objectives?: {
        color: string;
        text: string;
    }[];
    features?: {
        title: string;
        description: string;
    }[];
    image1: string;
    externalLink?: string;
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
            slug: "dashboard-mudik-pln",
            tag: "UI/UX Design",
            date: "February 2025",
            title: "Admin Dashboard for Monitoring PLN Mudik Program",
            description:
                "A web-based admin dashboard designed to manage and monitor the travel ticket booking process for PLN's free homecoming (Mudik) program. This system streamlines participant data tracking, booking status updates, and transportation allocation in real-time.",
            projectDesc:
                "A dashboard platform designed to help admins monitor and manage the travel ticket booking system for the State Electricity Company’s (PLN) free Mudik (homecoming) program. This CMS provides real-time access to participant data, booking statuses, payment updates, and transportation allocation.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/mudik-pln-dashboard.png",
            image1: "/images/mudik-pln-dashboard-2.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Conducted user research and analysis with the client to align with user needs and define main features.",
                },
                {
                    color: "#D366B2",
                    text: "Crafted User Flows and Information Architecture using Figjam and Whimsical.",
                },
                {
                    color: "#F5607A",
                    text: "Developed wireframe and high-fidelity designs using Figma.",
                },
                {
                    color: "#FF9C50",
                    text: "Built a design system covering typography, color palettes, and components using auto layout, components, and variants in Figma.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "Simplify admin workflows for managing the Mudik program efficiently.",
                },
                {
                    color: "#D366B2",
                    text: "Enable real-time tracking of participant data, bookings, and transport quotas.",
                },
                {
                    color: "#F5607A",
                    text: "Ensure accurate registration and payment verification.",
                },
                {
                    color: "#FF9C50",
                    text: "Allow admins to control ticket orders and assign seat numbers based on transport type.",
                },
            ],
            features: [
                {
                  title: "Participant Data Overview",
                  description: "Displays booking information, payment status, and selected transportation mode."
                },
                {
                  title: "Re-registration & Seat Assignment",
                  description: "Allows admins to re-validate participant data and assign seat numbers."
                },
                {
                  title: "Transportation Quota Management",
                  description: "Monitor and adjust available seats and routes based on demand."
                },
                {
                  title: "Participant Check-In via QR Scan",
                  description: "Validate booking codes on departure day using scanner or manual input."
                },
              ],
        },
        {
            slug: "loan-management-dashboard",
            tag: "UI/UX Design",
            date: "January 2025",
            title: "Loan Management Dashboard",
            description:
                "A web-based admin dashboard designed to digitize the manual loan recording process. This system enables efficient loan and payment data management, reduces errors, and improves operational speed.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/dantal-dashboard.png",
            image1: "/images/dantal-dashboard-2.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "Implementing a web-based loan recording system.",
                },
                {
                    color: "#D366B2",
                    text: "Improving the efficiency of loan data processing by reducing reliance on manual record-keeping.",
                },
                {
                    color: "#F5607A",
                    text: "Accelerating workflows and decision-making processes related to customer loan data.",
                },
                {
                    color: "#FF9C50",
                    text: "Enhancing the accuracy and reliability of loan data recorded by the admin.",
                },
                {
                    color: "#FFA74B",
                    text: "Enabling more integrated and effective loan data management.",
                },
                {
                    color: "#FFA74B",
                    text: "Reducing the risk of errors in recording and processing customer loan data.",
                },
            ],
            features: [
                {
                  title: "Login",
                  description: "User authentication before accessing the system."
                },
                {
                  title: "Dashboard",
                  description: "Overview of loan and payment data, including key statistics."
                },
                {
                  title: "Loan Recording",
                  description: "Digital form to log customer loan transactions."
                },
                {
                  title: "Payment Recording",
                  description: "Manage installment payment records made by customers."
                },
                {
                  title: "Customer Data Management",
                  description: "Store and organize complete customer information."
                },
              ],
              
        },
        {
            slug: "pataland",
            tag: "UI/UX Design",
            date: "June 2024",
            title: "PataLand",
            description:
                "Redesigned the Pataland’s website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving 3D animations and prototyping animations for smoother transitions and more dynamic interactions.",
            projectDesc:
                "Redesigned the PataLand website, a metaverse platform offering immersive 3D virtual adventures. The redesign focused on enhancing the user experience by improving the visual presentation, refining 3D-based interactions, and prototyping smooth animations to create more dynamic transitions across pages and elements. Users can explore themed islands, watch videos, and interact with characters in a visually engaging digital world that’s accessible via desktop and mobile.",
            role: "As the UI/UX Designer for this project, I was responsible for:",
            image: "/images/pataland-dekstop.png",
            image1: "/images/pataland-mobile.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg", "/images/icon-blender.svg", "/images/icon-ai-2.svg", "/images/icon-trello.png"],
            liveDemo: "https://www.figma.com/proto/hfg0MhLs6pwW2lTGyIAplM/PataLand?page-id=0%3A1&node-id=0-5171&viewport=962%2C719%2C0.18&t=v5yCGLITsh53oc2T-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A5171&show-proto-sidebar=1",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Redesigned the landing page and island detail pages with a focus on visual storytelling, information hierarchy, and cross-device responsiveness.",
                },
                {
                    color: "#D366B2",
                    text: "Created interactive prototypes with smooth transitions and animations to improve the user experience.",
                },
                {
                    color: "#F5607A",
                    text: "Developed user flows and information architecture to support intuitive navigation and content structure.",
                },
                {
                    color: "#FF9C50",
                    text: "Built a design system in Figma—covering typography, color styles, and reusable components—while collaborating closely with developers to ensure consistent implementation.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "To introduce PataLand as a metaverse platform that offers immersive virtual exploration.",
                },
                {
                    color: "#D366B2",
                    text: "To showcase PataLand’s main features, including island themes, characters, and interactive media like videos.",
                },
                {
                    color: "#F5607A",
                    text: "To provide updates about PataLand, including news from the dev team and upcoming features.",
                },
                {
                    color: "#FF9C50",
                    text: "To increase user engagement through attractive visuals, smooth animations, and easy navigation.",
                },
                {
                    color: "#FFA74B",
                    text: "To ensure a consistent and responsive browsing experience on both desktop and mobile devices.",
                },
            ],
            features: [
                {
                  title: "Island Overview",
                  description: "Discover the different islands in PataLand, each with its own theme and detailed description."
                },
                {
                  title: "Character Introduction",
                  description: "Users can explore and get to know all the unique characters available in PataLand."
                },
                {
                  title: "Latest from the Dev Team",
                  description: "Stay updated with the latest news, updates, and announcements directly from the development team."
                },
                {
                  title: "Explore Tips",
                  description: "VFind helpful tips and tricks to enhance your exploration and gameplay experience in PataLand."
                },
              ],
        },
        {
            slug: "ikan",
            tag: "UI/UX Design",
            date: "June 2023",
            title: "I-KAN",
            description:
                "A mobile application designed to support freshwater fish farmers in Indonesia by offering practical tools and information to improve their productivity. ",
            projectDesc:
                "I-KAN is a mobile application designed to support freshwater fish farmers in Indonesia by offering practical tools and information to improve their productivity. With growing demand and potential in the aquaculture sector, many farmers still struggle with access to quality feed, seeds, market prices, and water quality monitoring.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/cover-ikan.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg", "/images/icon-trello.png"],
            liveDemo: "https://www.figma.com/proto/XkZ7En2vAmUV8r9r4Tt8TP/Ideate---Prototype?page-id=3%3A3&node-id=509-12377&viewport=373%2C104%2C0.1&t=EZtuz2kasKNmrchj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=305%3A5994",
            externalLink: "https://gaudy-gargoyle-734.notion.site/I-KAN-e00ae9f9db4a445faec0f99a137f32a8?pvs=4",
            // highlights: [
            //     {
            //         color: "#B16CEA",
            //         text: "Doing user research and analyzing the manual loan recording process with product manager.",
            //     },
            //     {
            //         color: "#D366B2",
            //         text: "Designing the interface of the web admin panel using Figma.",
            //     },
            //     {
            //         color: "#F5607A",
            //         text: "Making interactive prototypes to test the user flow.",
            //     },
            //     {
            //         color: "#FF9C50",
            //         text: "Working together with the client to make sure the design matches their needs.",
            //     },
            //     {
            //         color: "#FFA74B",
            //         text: "Testing and improving the system based on feedback.",
            //     },
            // ],
        },
        {
            slug: "donorind",
            tag: "UI/UX Design",
            date: "November 2023",
            title: "Donorind",
            description:
                "Donorind is a mobile app that provides easy access to blood donation information, raises awareness about its importance, and encourages consistent participation in doing good for others.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/donorind.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://www.figma.com/proto/BxnvAFGfnwx10SaDXINd7o/Donor?page-id=1%3A3&node-id=453-3889&viewport=1237%2C565%2C0.23&t=3dVF9wbo4dQZDhEO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=82%3A1275&show-proto-sidebar=1",
            externalLink: "https://gaudy-gargoyle-734.notion.site/Donorind-App-1265f3f156db80e592c1e9bd9685c3e8?pvs=4",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
        },
        {
            slug: "consure",
            tag: "UI/UX Design",
            date: "December 2022",
            title: "Consure",
            description:
                "Consure is a mobile app that offers one-on-one consultations on careers, competitions, and scholarships—guided by experienced professionals to help users make informed decisions.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/consure.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://www.figma.com/proto/HVnh2tihbR10Ng6x6a8kNe/Consure?page-id=3%3A2&node-id=218-2118&viewport=487%2C364%2C0.08&t=NjxWCeYSAbNfZ0Pp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=176%3A1721",
            externalLink: "https://www.notion.so/Consure-App-6f264f6bd96349f4bc877d0ba996471a?pvs=4",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
        },
        {
            slug: "speakerseeker",
            tag: "UI/UX Design",
            date: "May 2022",
            title: "SpeakerSeeker",
            description:
                "Donorind as a mobile app will provide blood donation information to raise awareness, offer real-time updates, and make donating easier for everyone.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/speakerseeker.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo: "https://www.figma.com/proto/7t1W50ziKRqXmTyJm1SUBJ/Speakerseeker?page-id=0%3A1&node-id=51-9&viewport=319%2C311%2C0.05&t=YvnnSuDfL2O6OcBG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=51%3A9",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
        },
    ],
    "Web Development": [
        {
            slug: "mudik-asyik-pln",
            tag: "Web Development",
            date: "June 2024",
            title: "Mudik Asyik Bersama PLN 2025",
            description:
                "A web-based admin dashboard designed to manage and monitor the travel ticket booking process for PLN's free homecoming (Mudik) program. This system streamlines participant data tracking, booking status updates, and transportation allocation in real-time.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/MUDIK-PLN.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
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
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/bacain.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
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
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/budgetbuddy.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma.svg", "/images/icon-ai.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Doing user research and analyzing the manual loan recording process with product manager.",
                },
                {
                    color: "#D366B2",
                    text: "Designing the interface of the web admin panel using Figma.",
                },
                {
                    color: "#F5607A",
                    text: "Making interactive prototypes to test the user flow.",
                },
                {
                    color: "#FF9C50",
                    text: "Working together with the client to make sure the design matches their needs.",
                },
                {
                    color: "#FFA74B",
                    text: "Testing and improving the system based on feedback.",
                },
            ],
        },
    ],
    "Graphic Design": [],
};
