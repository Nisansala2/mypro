
"use client";
import About from './components/About/page';
import Projects from './components/Projects/page';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Link from 'next/link';
import image from '../../public/assets/image.jpg';


export default function HomePage() {
  return (
   <section className="grid gap-8 md:grid-cols-2 items-center">
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Nisansala Gamachchige</span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-300 max-w-xl">
          BICT undergraduate | Software Engineering & Web Developer. I build MERN web apps — Rare Medicine Finder, Coffee Shop app, School Management and more.
        </p>

        <div className="mt-6 flex gap-3">
         <Link href= "./components/Projects" className="inline-block px-5 py-3 rounded-lg shadow-sm font-medium bg-accent-400 text-white hover:brightness-90">
            View Projects
          </Link>
          <Link href= "./components/About" className="inline-block px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700">
            Contact Me
          </Link>
        </div>

        <ul className="mt-8 text-sm text-slate-500 dark:text-slate-400 space-y-1">
          <li><strong>Skills:</strong> JavaScript, React, Next.js, Node.js, MongoDB, CSS</li>
          <li><strong>Interests:</strong> Web dev, UX, Cloud fundamentals, Project management</li>
        </ul>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
          <Image src="/assets/image.jpg" alt="Nisansala Gamachchige" width={400} height={400} className="object-cover"/>
        </div>
      </motion.div>
    </section>
  

   
  );
}