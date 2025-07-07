"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Software Engineer Fellow",
    company: "The City College of New York",
    date: "January 2025 - Present",
    description:
      "Developing a web application to help Blind & Low Vision (BLV) users travel independently, with a focus on optimizing performance and accessibility. Integrated a new Text-to-Speech API, cutting response time by an average 50%, and led user research through interviews and testing at vision rehabilitation centers in NYC. Analyzing qualitative and quantitative user data to develop a research paper on assistive technology and inclusive design.",
    logo: "/images/ccny4.jpg",
  },
  {
    title: "Software Engineer Research Intern",
    company: "National Intelligence University",
    date: "January 2024 - May 2024",
    description:
      "Developed a data tool using the CAMEO taxonomy and GDELT dataset to support global event research. Preprocessed over 600K records and implemented feature engineering for data. Refactored the backend to reduce response time by 20% and code length by 30%. Implemented a network graph algorithm to uncover direct and indirect connections between entities, and integrated article frequency counts with source URLs to enhance analytical insights. Presented project scope to NSF data scientists and progress during weekly Agile meetings, aligning technical outcomes with research goals.",
    logo: "/images/niu.jpg",
  },
  {
    title: "Software Engineering Intern",
    company: "neARabl Inc. (Startup)",
    date: "July 2023 - August 2023",
    description:
      "Developed an ETL pipeline to process over 800K socioeconomic data records for a mobile AI construction app. Implemented feature engineering and optimized data workflows to support machine learning integration, and created 35+ visualizations in Python to uncover key patterns and drive data-informed decision-making through effective storytelling.",
    logo: "/images/near2.jpg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={50}
                height={50}
                className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
              />
              <div>
                <h3 className="text-2xl text-white font-bold mb-2">{experience.title}</h3>
                <p className="text-blue-400 mb-2">{experience.company}</p>
                <p className="text-gray-400 mb-4">{experience.date}</p>
                <p className="text-gray-300 mb-4">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
