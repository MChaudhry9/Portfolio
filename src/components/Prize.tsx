"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Prize() {
  return (
    <section className="py-20 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-semibold mb-6 text-center"
      >
        🎉 You made it to the end! 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-lg mb-8 text-center"
      >
        Here’s a lil reward for you 🐸
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto w-full max-w-[700px] aspect-[1170/700] rounded-2xl overflow-hidden border border-white/20 shadow-lg"

        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/images/cat.png"
          alt="Funny animal"
          width={1000}
          height={100}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
