"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

const projects = [
  {
    name: "Buddy Walk: An AI-Powered Personalized Travel Assistant App",
    highlight: "⭐ CUNY Student Inclusion Initiatives Award",
    mainConcepts: [
                    "Assistive Technology",
                    "Customer Discovery",
                    "Computer Vision",
                    "Accessibility",
                    "AI",
                    "Multimodal",
                    "LLMs"
                  ],
    techStack: [
      "OpenAI",
      "Google Maps API",
      "Web Speech API",
      "React",
      "Typescript",
      "Vite",
      "Material UI",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Docker",
      "Figma",
      "GCP",
      "Agile",
      "Git",
    ],
    description:
      "Developed an AI-powered multimodal vision-assistance app with OpenAI’s LLM designed to help Blind & Low Vision (BLV) users travel independently. Using OpenAI’s GPT-4.1-mini, computer vision, and the Google Maps API, the app provides real-time contextual information (e.g., surroundings, landmarks, directions) through voice-based interaction. The app responds to a variety of user queries—whether from images or videos captured by the user or from navigation-related questions—delivering precise, accessible answers that help users better understand their environment. By integrating multiple data sources and interactive feedback, it focuses on making independent travel safer and more accessible for BLV users.",
    imageUrl: "/images/buddy3.png",
    githubUrl: "https://github.com/tort8678/contextual_vlm",
    demoUrl: "https://contextual-vlm-317938018556.us-central1.run.app/",
  },
  {
    name: "PropertyIntel: Uncover Hidden Real Estate Insights",
mainConcepts: [
                "Data Transparency",
                "Real Estate",
                "Public Data",
                "REST API",
                "Social Good",
              ],
    techStack: [
      "Flask",
      "React",
      "RESTful API",
      "Google Maps API", 
      "NYC Open Data",
      "Supabase",
      "Figma",
      "Vercel",
      "cURL",
      "Git",
    ],
    description:
      "Developed a full-stack platform using MVC architecture with 2 engineers to help users find real-time building complaints and violations for properties across NYC, using data from the Department of Buildings (DOB) with a custom restful api. Designed with accessibility and transparency in mind, it transforms underutilized public data into an intuitive, map-based interface with smart search filters. Built in collaboration with two engineers, the app empowers renters, homeowners, and real estate professionals to make informed decisions by revealing hidden property issues, ranging from residential, commercial, and more. Includes detailed documentation on complaint and disposition codes to better interpret a building’s history. Promoting data transparency and smarter decision-making.",
    imageUrl: "/images/real.png",
    githubUrl: "https://github.com/MChaudhry9/PropertyIntel-A-Real-Estate-App",
    demoUrl: "https://real-estate-complaints.vercel.app/",

  },
  {
    name: "FoodScrap Drop-Off",
    highlight: "⭐ 1st Place – Open Data Science Hackathon",
    mainConcepts: [
                    "Accessibility",
                    "Public Data",
                    "Social Good",
                    "Data Science"
                  ],
    techStack: [
      "React", 
      "NYC Open Data", 
      "Pandas", 
      "Matplotlib", 
      "NumPy", 
      "Seaborn",
      "Mapbox API", 
      "Vite", 
      "Jupyter Notebook", 
      "Tailwind CSS", 
      "Figma", 
      "Git"
    ],
    description:
      "Developed a web application in 72 hours as a team of three engineers, designed to help NYC residents locate local food scrap drop-off sites and promote composting efforts. Leveraging NYC Open Data, we conducted exploratory data analysis (EDA) using Pandas and NumPy to extract borough-level insights, and visualized patterns with Matplotlib and Seaborn to inform UX decisions. The platform features an interactive Mapbox map that displays drop-off locations with key details like operating hours and accepted materials. By encouraging community participation in composting, the app supports environmental sustainability and helps reduce landfill waste across the city.",
    imageUrl: "/images/food.png",
    githubUrl: "https://github.com/MChaudhry9/FoodScrapDropOffSite",
    demoUrl: "https://playful-longma-0172bc.netlify.app/",

  },
  {
    name: "Swebay: An E-Bidding Platform",
mainConcepts: [
                "Online Bidding",
                "Fraud Prevention",
                "Scalable App"
              ],
    techStack: ["Django", "Python", "HTML", "Tailwind CSS", "Git"],
    description:
      "Collaborated in a team of 4 to create a secure online bidding platform where users can list items, place bids, and complete transactions. Built with multiple user roles (e.g., Registered Users, Super Users, VIPs) and includes features like bot-prevention, complaint handling, user ratings, and live bidding sessions. Designed to simulate real-world auction dynamics while maintaining data integrity and user accountability.",
    imageUrl: "/images/swebay3.png",
    githubUrl: "https://github.com/MChaudhry9/ecom-bidding-csc322",
  },
  {
    name: "Inventory Management App",
mainConcepts: [
                "Inventory Tracking",
                "Small Business Tool",
                "Data Syncing"
              ],
    techStack: ["Next.js", "React", "Firebase", "Material UI", "Git"],
    description:
      "Developed a responsive web application for tracking and managing inventory across multiple categories. It features a clean, intuitive UI with real-time data syncing and user authentication, allowing users to easily add, update, and organize items. Designed for small businesses or personal use, the app combines sleek styling with practical functionality for efficient inventory control.",
    imageUrl: "/images/placeholder.png",
    githubUrl: "https://github.com/MChaudhry9/inventory-management-app",
  },
  {
    name: "Towers of Hanoi",
mainConcepts: [
                "Educational Tool",
                "Interactive",
                "Algorithm Visualizer"
              ],
    techStack: ["Java (JDK 8+)", "JavaFX", "WindowBuilder", "Git"],
    description:
      "Developed a visual and interactive Java application that illustrates the classic recursive algorithm. Built with two engineers, it uses JavaFX and a GUI designed in WindowBuilder to display each step of the disk movement between pegs, helping beginners understand recursion and problem-solving through real-time visualization. Serves as both an educational tool and algorithm visualizer.",
    imageUrl: "/images/placeholder.png",
    githubUrl: "https://github.com/MChaudhry9/Towers-of-Hanoi_Frontend_GUI",
  },
  {
    name: "Westcoast Classics",
mainConcepts: [
                "E-Commerce",
                "User Authentication",
              ],
    techStack: ["JavaScript", "HTML", "CSS", "Git"],
    description:
      "Developed a modern, user-friendly platform that allows users to browse a wide selection of popular cars. It supports user authentication via cookies, enabling seamless sign-in or registration. The site offers a streamlined browsing experience, helping users easily explore and compare vehicles for a smooth and efficient shopping journey.",
    imageUrl: "/images/west.png",
    githubUrl: "https://github.com/MChaudhry9/WESTCOAST.CLASSICS",
    demoUrl: "https://mchaudhry9.github.io/WESTCOAST.CLASSICS/",

  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <RiExternalLinkLine size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.name}
                </h3>
                {/* ---------------------------------- */}
                {project.highlight && (
                  <p className="text-yellow-400 font-medium mb-2 text-sm">
                    {project.highlight}
                  </p>
                )}
                {/* ---------------------------- */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.mainConcepts.map((concept, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
                {/* ---------------------------- */}
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={24} />
                    GitHub
                  </Link>
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <RiExternalLinkLine size={24} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
