import { AiFillEdit } from "react-icons/ai"
import {SiCplusplus} from "react-icons/si"

export const details = {
        firstName: "Samarth",
        lastName: "Joshi",
        role: "Web Developer",
        about: "Pre-Final Year Electronics and Communications Student at Indian Institute of Information Technology, Ranchi. Passionate about Web Dev!",
        email:"joshi.samarth24@gmail.com",
        gitHub: "https://github.com/joshisamarth24",
        instaGram: "https://www.instagram.com/samarth_joshi_24?igsh=MXN1azhybjV5ZTJ1Zw==",
        linkedIn: "https://www.linkedin.com/in/samarth-joshi-05a871228/",
        twitter: ""
}
export const techMain = "I've worked with a range of technologies related to website development"

export const tech = [
    {
        id: "1",
        icon: () => <AiFillEdit/>,
        title: "Web Development",
        des: "Experience with MERN Stack,TailwindCSS, Typescript, ExpressJs."
    },
    {
        id: "2",
        icon: () => <SiCplusplus/>,
        title: "Languages",
        des: "Proficient in C++, Javascript, Python, C"
    }
]

export const project = [
    {
        id: "1",
        title: "EasyBuy, E-Commerce Platform",
        img: "./placeholder_image.png", // Please replace with appropriate image path
        des: "Developed a comprehensive e-commerce platform, EasyBuy, using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication and authorization using JSON Web Tokens (JWT) for secure account creation, login, and profile management. Designed and integrated a responsive and user-friendly interface using Styled Components for a seamless shopping experience across devices. Crafted a dynamic shopping cart system enabling users to effortlessly add, remove items, and proceed to checkout. Integrated the Stripe payment gateway to ensure secure and reliable online transactions. Utilized Redux toolkit for efficient state management, enhancing the application’s scalability and maintainability.",
        tech: ["MERN", "Styled Components", "JWT", "Stripe", "Redux Toolkit"],
        link: "https://github.com/joshisamarth24/EasyBuy" // Add project link if available
    },
    {
        id: "2",
        title: "Streamify, Movie Application",
        img: "./placeholder_image.png", // Please replace with appropriate image path
        des: "Engineered Streamify, a cutting-edge movie application utilizing React and seamlessly integrating data from the TMDB API. Championed the development of a visually striking, responsive UI using SCSS, enhancing the user experience across diverse devices. Pioneered a dynamic movie catalog, empowering users with effortless exploration, advanced filtering, and immersive movie discovery. Leveraged the power of Redux Toolkit for streamlined state management, significantly boosting the application’s scalability and maintainability. Integrated React Router to facilitate seamless navigation, providing an intuitive user journey through movie details, genres, and search results.",
        tech: ["React", "TMDB API", "SCSS", "Redux Toolkit", "React Router"],
        link: "https://github.com/joshisamarth24/Streamify" // Add project link if available
    },
    {
        id: "3",
        title: "Memories (MERN stack with Material-UI)",
        img: "./placeholder_image.png", // Please replace with appropriate image path
        des: "Developed ”Memories,” a MERN stack platform allowing users to share thoughts through posts, implementing CRUD operations with Material-UI for styling. Implemented user authentication, Google OAuth, and utilized Redux for state management. Enabled features such as liking, commenting, and a search functionality for posts. Added a recommendation system to suggest related posts based on the current post. Ensured a responsive design for various devices, optimizing overall platform performance.",
        tech: ["MERN", "Material-UI", "Google OAuth", "Redux"],
        link: "https://github.com/joshisamarth24/memories" // Add project link if available
    }
];