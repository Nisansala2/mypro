"use client";

import { motion } from "framer-motion";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import Contac from "./components/Contac/page";

import Image from "next/image";
import { ExternalLink, Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-8 bg-[#020617] mt-30 min-h-screen"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* ===== Left Section (Text) ===== */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Nisansala Gamachchige
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-4"
            >
              Software Engineering Undergraduate
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              3rd-year BICT student at the University of Sri Jayewardenepura,
              passionate about web development and building innovative
              solutions. Winner of Sirasa Lakshapathi.
            </motion.p>




            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                href="https://github.com/Nisansala2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ExternalLink size={20} />
              </motion.a>

              <motion.a
                href="mailto:nisansalagamchchige@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Contact Me <Mail size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-6"
            >
              <motion.a
                href="https://github.com/Nisansala2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={28} />
              </motion.a>

              <motion.a
                href="https://medium.com/@nisansalagamchchige"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare size={28} />
              </motion.a>

              <motion.a
                href="https://acesse.one/hrUVl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
            </motion.div>

            
          </div>

          {/* ===== Right Section (Profile Image) ===== */}
          <div className="flex-1 flex justify-center md:justify-end mt-7 md:mt-0">
            <div className="relative w-64 h-80 md:w-[420px] md:h-[560px] rounded-2xl overflow-hidden border-2 border-white-500 shadow-lg">
              <Image
                src="/assets/cv1.png"
                alt="Nisansala Gamachchige"
                fill
                className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>
        

        {/* ===== Other Sections ===== */}
        <About />
        <Projects />
        <Contac />
        
      </motion.div>
    </section>
  );
}
