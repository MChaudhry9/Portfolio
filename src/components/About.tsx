"use client";

import { motion } from "framer-motion";
import { Heart, Users, Settings } from "lucide-react";


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

          {/* Feature boxes section */}
          <div className="mt-16 space-y-6">
            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Heart className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Social Impact</h3>
                <p className="text-gray-300">
                  Using technology to solve real-world problems and create positive change in communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Users className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
                <p className="text-gray-300">
                  Ensuring digital solutions are inclusive and usable by people of all abilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Settings className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
                <p className="text-gray-300">
                  Leveraging data science to automate tasks and create tools that make work more efficient.
                </p>
              </div>
            </motion.div>
          </div>


         </motion.div>
       </div>
     </section>
  );
}
