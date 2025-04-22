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
    image1?: string;
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
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-notion-2.svg",
            ],
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
                    description:
                        "Displays booking information, payment status, and selected transportation mode.",
                },
                {
                    title: "Re-registration & Seat Assignment",
                    description:
                        "Allows admins to re-validate participant data and assign seat numbers.",
                },
                {
                    title: "Transportation Quota Management",
                    description:
                        "Monitor and adjust available seats and routes based on demand.",
                },
                {
                    title: "Participant Check-In via QR Scan",
                    description:
                        "Validate booking codes on departure day using scanner or manual input.",
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
                    description:
                        "User authentication before accessing the system.",
                },
                {
                    title: "Dashboard",
                    description:
                        "Overview of loan and payment data, including key statistics.",
                },
                {
                    title: "Loan Recording",
                    description:
                        "Digital form to log customer loan transactions.",
                },
                {
                    title: "Payment Recording",
                    description:
                        "Manage installment payment records made by customers.",
                },
                {
                    title: "Customer Data Management",
                    description:
                        "Store and organize complete customer information.",
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
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-blender.svg",
                "/images/icon-ai-2.svg",
                "/images/icon-trello.png",
            ],
            liveDemo:
                "https://www.figma.com/proto/hfg0MhLs6pwW2lTGyIAplM/PataLand?page-id=0%3A1&node-id=0-5171&viewport=962%2C719%2C0.18&t=v5yCGLITsh53oc2T-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A5171&show-proto-sidebar=1",
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
                    description:
                        "Discover the different islands in PataLand, each with its own theme and detailed description.",
                },
                {
                    title: "Character Introduction",
                    description:
                        "Users can explore and get to know all the unique characters available in PataLand.",
                },
                {
                    title: "Latest from the Dev Team",
                    description:
                        "Stay updated with the latest news, updates, and announcements directly from the development team.",
                },
                {
                    title: "Explore Tips",
                    description:
                        "VFind helpful tips and tricks to enhance your exploration and gameplay experience in PataLand.",
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
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-trello.png",
            ],
            liveDemo:
                "https://www.figma.com/proto/XkZ7En2vAmUV8r9r4Tt8TP/Ideate---Prototype?page-id=3%3A3&node-id=509-12377&viewport=373%2C104%2C0.1&t=EZtuz2kasKNmrchj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=305%3A5994",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/I-KAN-e00ae9f9db4a445faec0f99a137f32a8?pvs=4",
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
                "A mobile app that provides easy access to blood donation information, raises awareness about its importance, and encourages consistent participation in doing good for others.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/donorind.png",
            image1: "/images/dantal-dashboard.png",
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-maze-2.svg",
            ],
            liveDemo:
                "https://www.figma.com/proto/BxnvAFGfnwx10SaDXINd7o/Donor?page-id=1%3A3&node-id=453-3889&viewport=1237%2C565%2C0.23&t=3dVF9wbo4dQZDhEO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=82%3A1275&show-proto-sidebar=1",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/Donorind-App-1265f3f156db80e592c1e9bd9685c3e8?pvs=4",
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
                "A mobile app that offers one-on-one consultations on careers, competitions, and scholarships—guided by experienced professionals to help users make informed decisions.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/consure.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo:
                "https://www.figma.com/proto/HVnh2tihbR10Ng6x6a8kNe/Consure?page-id=3%3A2&node-id=218-2118&viewport=487%2C364%2C0.08&t=NjxWCeYSAbNfZ0Pp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=176%3A1721",
            externalLink:
                "https://www.notion.so/Consure-App-6f264f6bd96349f4bc877d0ba996471a?pvs=4",
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
            slug: "spacify",
            tag: "UI/UX Design",
            date: "November 2022",
            title: "Spacify",
            description:
                "A web-based platform that helps users discover, compare, and book coworking spaces based on their preferences. It provides complete information, real-time room availability, user reviews, and a chat feature with space providers—making the search and booking process easier and more efficient.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/spacify.png",
            image1: "/images/spacify.png",
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-maze-2.svg",
            ],
            liveDemo:
                "https://www.figma.com/proto/bgHNzsYUQq0lj9xOHG6l5W/Spacify?page-id=22%3A16&node-id=33-33&viewport=433%2C391%2C0.04&t=XUKW7LOqNoVsODxT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=33%3A33",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/Spacify-1d35f3f156db806c8333d794051eeede?pvs=4",
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
                "A web-based application designed to connect event organizers with speakers—providing a comprehensive platform for finding, comparing, and booking speakers with detailed profiles, direct communication, and user reviews.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/speakerseeker.png",
            image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-whimsical-2.svg"],
            liveDemo:
                "https://www.figma.com/proto/7t1W50ziKRqXmTyJm1SUBJ/Speakerseeker?page-id=0%3A1&node-id=51-9&viewport=319%2C311%2C0.05&t=YvnnSuDfL2O6OcBG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=51%3A9",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/SpeakerSeeker-1d55f3f156db804eb096f340e0d5258f?pvs=4",
        },
        {
            slug: "kaneela",
            tag: "UI/UX Design",
            date: "May 2023",
            title: "Kaneela: Cake Ordering App for Seamless Online Orders",
            description:
                "Kaneela is a mobile app that allows users to easily place cake orders online, offering a seamless and convenient way to browse, select, and purchase cakes from Kaneela Shop, without the need to visit the store in person.",
            projectDesc:
                "This project is a digital solution designed to replace the traditional manual loan recording process that relied on paper. The web-based admin panel system helps administrators record loan and payment data more efficiently and accurately. With this system, admins can manage customer and transaction data in real-time, reduce errors, and improve the speed and effectiveness of operations.",
            role: "In this project, I worked as a UI/UX Designer. My responsibilities include:",
            image: "/images/kaneela.png",
            image1: "/images/dantal-dashboard.png",
            tools: [
                "/images/icon-figma-2.svg",
                "/images/icon-whimsical-2.svg",
                "/images/icon-maze-2.svg",
            ],
            liveDemo:
                "https://www.figma.com/proto/8J41swOL34uVlgX2HGVyV1/Challenge-CH3---CH4?page-id=29%3A2051&node-id=82-1941&viewport=12%2C78%2C0.09&t=RPDAhQnRkq5VrXmJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=82%3A1941&show-proto-sidebar=1",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/Kaneela-Shop-App-264c60a1543c44c9a6eb95953a384cd2?pvs=4",
        },
    ],
    "Web Development": [
        {
            slug: "mudik-asyik-pln",
            tag: "Web Development",
            date: "February 2025",
            title: "Registration Website for PLN Mudik 2025 Program",
            description:
                "A web-based registration platform designed to simplify and streamline the ticket booking process for PLN’s free homecoming (Mudik) program. It offers a secure and integrated user experience from registration to ticket status checking.",
            projectDesc:
                "The Mudik Asyik Bersama PLN 2025 website is a digital platform designed to simplify the registration process for PLN's free homecoming program during the Eid al-Fitr holiday. This application provides a more practical, fast, and organized ticket booking experience for participants, with a secure and integrated process from registration to ticket status checking.",
            role: "In this project, I took on the dual role of UI/UX Designer and Frontend Developer, with the fol`lowing responsibilities:",
            image: "/images/MUDIK-PLN.png",
            tools: ["/images/icon-notion-2.svg","/images/icon-figma-2.svg", "/images/icon-nextjs.svg","/images/icon-typescript-2.svg", "/images/icon-tailwind-2.svg", "/images/icon-motion-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Conducted user research and client discussions to understand user needs and define key features.",
                },
                {
                    color: "#D366B2",
                    text: "Conducted user research and client discussions to understand user needs and define key features.",
                },
                {
                    color: "#F5607A",
                    text: "Designed wireframes and high-fidelity UIs in Figma, aligned with branding and usability standards.",
                },
                {
                    color: "#FF9C50",
                    text: "Built a consistent design system including typography, color palette, and UI components using auto layout, components, and variants in Figma.",
                },
                {
                    color: "#FFA74B",
                    text: "Translated Figma designs into responsive code using Next JS, Typescript, and Tailwind CSS, developed core pages like registration, confirmation, order status checker, and landing, while implementing form validation, user feedback, smooth navigation, and ensuring cross-device responsiveness.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "Provide a modern, efficient platform for free homecoming program registration.",
                },
                {
                    color: "#D366B2",
                    text: "Simplify the user process for ticket registration, payment, and status checking.",
                },
                {
                    color: "#F5607A",
                    text: "Reduce manual queues and speed up information distribution to participants.",
                },
                
            ],
            features: [
                {
                    title: "Ticket Registration",
                    description:
                        "Users can independently register through the website by filling out a comprehensive form, including personal data, ID, other passenger details (if any), and destination.",
                },
                {
                    title: "Integrated Payment System",
                    description:
                        "The platform supports various payment methods, such as bank transfers and e-wallets, allowing users to complete transactions quickly and flexibly.",
                },
                {
                    title: "Order Status Checker:",
                    description:
                        "Users can verify their ticket status by entering their booking code in the 'Check Order' menu to ensure the ticket's validity before departure.",
                },
            ],
        },
        {
            slug: "bacain-app",
            tag: "Web Development",
            date: "August 2024",
            title: "Bacain",
            description:
                "A web platform that delivers the latest news and updates across categories like Business, Food, and Fashion, with a clean interface and intuitive navigation for a seamless browsing experience.",
            projectDesc:
                "A web-based news platform delivering the latest news and information across categories like Business, Food, and Fashion. Featuring a clean interface and intuitive navigation, it offers a seamless browsing experience. This project enhanced my skills in building a well-structured, responsive web app with efficient categorization, focusing on usability and user experience.",
            role: "In this project, I took on the dual role of UI Designer and Frontend Developer, with the following responsibilities:",
            image: "/images/bacain.png",
            // image1: "/images/dantal-dashboard.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-nextjs.svg", "/images/icon-typescript-2.svg", "/images/icon-tailwind-2.svg"],
            liveDemo: "https://live-demo-loan-dashboard.com",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Designed the user interface with a focus on clean, intuitive layouts, creating wireframes and high-fidelity designs using Figma to ensure consistency and usability across pages.",
                },
                {
                    color: "#D366B2",
                    text: "Sliced the UI designs from Figma into responsive code using React.js and Tailwind CSS, ensuring smooth navigation, form validation, and a seamless user experience across devices.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "Provide a modern, efficient platform for free homecoming program registration.",
                },
                {
                    color: "#D366B2",
                    text: "Simplify the user process for ticket registration, payment, and status checking.",
                },
                {
                    color: "#F5607A",
                    text: "Reduce manual queues and speed up information distribution to participants.",
                },
                
            ],
            features: [
                {
                    title: "News Categories",
                    description:
                        "Users can access the latest news organized into categories like Business, Food, and Fashion.",
                },
                {
                    title: "Intuitive Navigation",
                    description:
                        "Users can easily navigate between categories and articles using a simple and responsive interface.",
                },
                {
                    title: "Responsive Design",
                    description:
                        "The platform is accessible and provides a seamless experience across various devices, including mobile, tablet, and desktop.",
                },
            ],
        },
        {
            slug: "pikadex",
            tag: "Web Development",
            date: "July 2024",
            title: "Pikadex",
            description:
                "A web platform that provides detailed Pokémon information, featuring a responsive design, intuitive navigation, and key features like search, favorites, and Pokémon details for an engaging user experience.",
            projectDesc:
                "The Pokedex web application is an interactive platform designed to provide detailed information about various Pokémon. Users can explore Pokémon data, search, and manage favorites through a responsive and user-friendly interface.",
            role: "I worked as a UI Designer and Frontend Developer in this collaborative project. My main responsibility was slicing the provided designs into fully responsive web pages, implementing the interface for all key sections using React.js and Tailwind CSS.",
            image: "/images/pikadex.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-react-2.svg", "/images/icon-tailwind-2.svg",],
            liveDemo: "https://pika-dex.netlify.app/",
            objectives: [
                {
                    color: "#B16CEA",
                    text: "build a simple and engaging Pokémon information platform that is easy to navigate and responsive across devices.",
                },
            ],
            features: [
                {
                    title: "Pokémon List ",
                    description:
                        "Browse all available Pokémon in a structured list.",
                },
                {
                    title: "Detail Page",
                    description:
                        "View detailed stats and info of selected Pokémon.",
                },
                {
                    title: "Favorite Page ",
                    description:
                        "Mark and manage your favorite Pokémon.",
                },
                {
                    title: "Favorite Page ",
                    description:
                        "Mark and manage your favorite Pokémon.",
                },
                {
                    title: "Search Function",
                    description:
                        "Quickly find specific Pokémon by name.",
                },
                {
                    title: "Contact Us",
                    description:
                        "Submit feedback or inquiries through the form.",
                },
                
            ],
        },
        {
            slug: "budgetbuddy",
            tag: "Web Development",
            date: "October 2024",
            title: "BudgetBuddy",
            description:
                "A web app to help users manage their money easily. BudgetBuddy lets users track income, expenses, and set budgets with a clear, simple dashboard.",
            projectDesc:
                "A web-based application designed to help users efficiently manage their personal finances. BudgetBuddy allows users to track income, expenses, and create weekly/monthly budgets through an informative and user-friendly dashboard. This project was developed collaboratively during the Hacktiv8 Bootcamp",
            role: "In this project, I took on the dual role of Project Manager and Frontend Developer, with the following responsibilities:",
            image: "/images/budgetbuddy.png",
            tools: ["/images/icon-figma-2.svg", "/images/icon-react-2.svg", "/images/icon-tailwind-2.svg",],
            liveDemo: "https://budgetbuddys.netlify.app",
            highlights: [
                {
                    color: "#B16CEA",
                    text: "Coordinated team activities and ensured clear communication for smooth progress.",
                },
                {
                    color: "#D366B2",
                    text: "Designed and implemented the user interface (UI) using React.js and Tailwind UI.",
                },
                {
                    color: "#F5607A",
                    text: "Developed CRUD features for tracking income and expenses.",
                },
                {
                    color: "#FF9C50",
                    text: "Ensured seamless integration between UI and functionality to provide an intuitive and responsive user experience.",
                },
            ],
            objectives: [
                {
                    color: "#B16CEA",
                    text: "Help users manage their personal finances more easily and in an organized way.",
                },
                {
                    color: "#D366B2",
                    text: "Provide visual insights into users’ financial health in real-time.",
                },
                {
                    color: "#F5607A",
                    text: "Simplify transaction tracking and budget creation by category.",
                },
                {
                    color: "#FF9C50",
                    text: "Increase financial awareness through comparison between actual spending and planned budgets.",
                },
            ],
            features: [
                {
                    title: "User Authentication",
                    description:
                        "Offers secure login with support for Google and Facebook sign-in for quick access.",
                },
                {
                    title: "Comprehensive Dashboard",
                    description:
                        "Displays visual summaries of income, expenses, and net balance.",
                },
                {
                    title: "Transaction Management",
                    description:
                        "Add, edit, and categorize transactions under categories like food, rent, and salary.",
                },
                {
                    title: "Budget Setting",
                    description:
                        "Set weekly or monthly budgets for various categories and track your actual spending to stay aligned with your financial goals.",
                },
            ],
        },
    ],
    "Graphic Design": [
        {
            slug: "buangdisini",
            tag: "Graphic Design",
            date: "July-September 2023",
            title: "Visual Branding & Social Media Design for Buangdisini",
            description:
                "Visual assets designed for Buangdisini’s branding and digital communication, including social media content, posters, covers, and presentation layouts.",
            projectDesc:
                "A web-based application designed to help users efficiently manage their personal finances. BudgetBuddy allows users to track income, expenses, and create weekly/monthly budgets through an informative and user-friendly dashboard. This project was developed collaboratively during the Hacktiv8 Bootcamp",
            role: "In this project, I took on the dual role of Project Manager and Frontend Developer, with the following responsibilities:",
            image: "/images/buangdisini.png",
            tools: ["/images/icon-ai-2.svg", "/images/icon-photoshop-2.svg", "/images/icon-figma-2.svg", "/images/icon-trello.png",],
            liveDemo: "https://gaudy-gargoyle-734.notion.site/Graphic-Design-Portfolio-1d35f3f156db809281fbfe774425ca51?pvs=4",
            externalLink:
                "https://gaudy-gargoyle-734.notion.site/Graphic-Design-Portfolio-1d35f3f156db809281fbfe774425ca51?pvs=4",
        },
    ],
};
