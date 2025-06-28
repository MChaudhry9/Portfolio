"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Im a senior Computer Science student at The City College of New York, graduating in May 2026. Driven by the 
              power of technology to create meaningful change, I’m passionate about leveraging software engineering and 
              data science to solve real-world problems and promote social good.
            </p>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              Currently a software engineer fellow at CCNY, I focus on building tools that not only address complex challenges 
              but also improve accessibility and quality of life for those who need it most. My work centers on using data and 
              automation to streamline tedious tasks, designing intuitive solutions, and ensuring technology 
              is inclusive—serving everyone regardless of background or ability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
