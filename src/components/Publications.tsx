
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const publications = [
  {
    title: "A Multimodal AI-Powered Travel Assistant Geo-App for BLV Users",
    conference: "41st Annual CSUN Assistive Technology Conference",
    date: "2026",
    type: "Journal on Technology & Persons with Disabilities",
    description:
      "Research on Buddy Walk, an AI-powered assistive technology application designed to help Blind and Low-Vision (BLV) individuals navigate their surroundings more independently. The study explores multimodal AI, accessible navigation, and user-centered design to improve travel experiences for individuals with visual impairments.",
    award:
      "Recipient of the Dr. Arthur I. Karshmer Award – Best Paper in Assistive Technology Research",
    link: "https://scholarworks.calstate.edu/concern/publications/1v53k6791",
    journalLink: "https://csun.at/draftvol14",
  },
];

const awards = [
  {
    title: "CUNY Student Inclusion Initiatives Award",
    organization: "The City University of New York (CUNY)",
    date: "2025",
    description:
      "Recognized for supporting assistive technology research and education.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Publications & Awards
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Publication Card */}
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex gap-3">
              <span className="text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full text-sm font-semibold">
                Publication
              </span>

              <span className="text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Best Paper Award
              </span>
            </div>
              

              <h3 className="text-2xl text-white font-bold mb-3">
                {publication.title}
              </h3>

              <p className="text-blue-400 mb-2">
                {publication.conference}
              </p>

              <p className="text-gray-400 text-sm mb-5">
                {publication.type} · {publication.date}
              </p>

              <p className="text-gray-300 leading-relaxed mb-5">
                {publication.description}
              </p>

              <p className="text-yellow-400 font-medium mb-6">
                {publication.award}
              </p>

              {/* Publication Links */}
              <div className="flex flex-col gap-3">
                <Link
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Read Research Paper →
                </Link>

                <Link
                  href={publication.journalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  View Full Journal (Volume 14) →
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CUNY Award Card */}
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-5">
                <span className="text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full text-sm font-semibold">
                  🏅 Recognition
                </span>
              </div>

              <h3 className="text-2xl text-white font-bold mb-3">
                {award.title}
              </h3>

              <p className="text-blue-400 mb-2">
                {award.organization}
              </p>

              <p className="text-gray-400 text-sm mb-5">
                {award.date}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
