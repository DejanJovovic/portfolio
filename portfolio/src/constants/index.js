export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Dejan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Dejan’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Dejan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Dejan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Android-quiz-application',
        desc: 'Android-quiz-application is a mobile application for entertainment and testing the user\'s general knowledge.',
        subdesc:
            'It contains multiple games and allows users to be ranked according to their achievements. Multilingualism is also supported so that the application can be adapted to as many users as possible.',
        href: 'https://www.not_deployed',
        // i have to add my own video
        texture: '/textures/project/project1.mp4',
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Kotlin',
                path: '/assets/kotlin_logo.png',
            },
            {
                id: 2,
                name: 'Spring',
                path: 'assets/spring_boot_logo.png',
            },
            {
                id: 3,
                name: 'MySQL',
                path: '/assets/MySQL_logo.png',
            },
        ],
    },
    {
        title: 'BPS-FM-Mobile-App',
        desc: ' Android internship project .',
        subdesc:
            'It is related to electricity consumption using graphs. This application provides authentication for the users, as well as monthly information on : revenue, service requests, carbon savings, energy savings and consumption.',
        href: 'https://www.not_deployed',
        // i have to add my own video
        texture: '/textures/project/project2.mp4',
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Kotlin',
                path: '/assets/kotlin_logo.png',
            },
            {
                id: 2,
                name: 'MySQL',
                path: '/assets/MySQL_logo.png',
            },
        ],
    },
    {
        title: 'ExpressDelivery',
        desc: 'ExpressDelivery is a React Native/Expo Demo Delivery application.',
        subdesc:
            'Payment needs to be implemented for it to be a complete app. Restaurant/Dish data stored in Sanity. State managed with Redux. TalwindCss used for styling the app. As well as ReactNativeNavigation,CurrencyFormatter, Animatable etc.. ',
        href: 'https://www.not_deployed',
        // i have to add my own video here
        texture: '/textures/project/project3.mp4',
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React Native',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/JavaScript_logo.png',
            },
            {
                id: 4,
                name: 'Redux',
                path: '/assets/Redux_logo.png',
            },
        ],
    },
    {
        title: 'ChatAndConnect',
        desc: 'Chat application that allows logged users to chat with each other.',
        subdesc:
            ' Users are authenticated with Firebase authentication and stored in Firebase storage. Push notifications are also configured.',
        href: 'https://www.not_deployed',
        // i have to add my own video
        texture: '/textures/project/project4.mp4',
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/Flutter_logo.png',
            },
            {
                id: 2,
                name: 'Dart',
                path: 'assets/Dart_logo.png',
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/assets/Firebase_Logo.png',
            },
        ],
    },
    {
        title: 'StarCardApp-Loyalty',
        desc: 'Coming soon',
        subdesc: '...',
        href: 'https://www.not_deployed',
        // i have to add my own video
        texture: '/textures/project/project5.mp4',
        // logo: '/assets/project-logo5.png',
        // logoStyle: {
        //     backgroundColor: '#1C1A43',
        //     border: '0.2px solid #252262',
        //     boxShadow: '0px 0px 60px 0px #635BFF4D',
        // },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Php',
                path: '/assets/PHP_logo.png',
            },
            {
                id: 2,
                name: 'React Native',
                path: 'assets/react.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },

        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5.5, 0] : isTablet ? [7, -8, 0] : [9, -7, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [7, 1, 0] : [-12, 0, -1],
        //something doesn't work well with rings, should be checked
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-9, 1, 0] : [10, 0, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-11, -7, -18] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Sotex Solutions',
        pos: 'Internship Android Developer',
        duration: 'Sep 2023 - Nov 2023',
        title: "Worked on an android internship project related to electricity consumption using graphs in Kotlin.",
        animation: 'victory',
    },
    {
        id: 2,
        name: 'GoSmartDevelopment',
        pos: 'Junior Software Developer',
        duration: '2025 - Present',
        title: "...",
        animation: 'clapping',
    },
];