"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';


// ─────────────────────────────── 
// 🔹 NavLink Component 
//  ─────────────────────────────── 

function NavLink({ href, name, icon, delay = 0, onClick }) {
  const path = usePathname(); 
  const isActive = path === href; 

    return (
       <motion.div
       initial={{ opacity: 0, y: 6 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay }} 
       >
         <Link 
         href={href} 
         className={ `group relative w-20 h-20 flex flex-col items-center justify-center 
          rounded-3xl transition-all duration-300 
          border border-slate-700/60 shadow-md backdrop-blur-sm 
         ${isActive 
          ? 'bg-sky-600 text-white shadow-sky-400/50' 
          : 'bg-slate-800/60 hover:bg-sky-500/20 text-gray-300 hover:text-white'
         } `} 
         >

         
      {/* Icon */} 
      <span className="text-2xl md:text-2xl">
        {icon}
        </span> 
        {/* Name */} 
        <span className="text-sm mt-2 transition-opacity duration-300 group-hover:opacity-100"> {name}
        </span>

        {/* Active Glow */} 
        {isActive
         && ( <motion.span layoutId="active-glow" 
         className="absolute inset-0 rounded-3xl border-2 border-sky-400/60 shadow-[0_0_15px_#38bdf8]" 
         /> 
         )} 

         </Link> 
          </motion.div> ); 
          }

 // ─────────────────────────────── //
 //  🔹 Sidebar Component 
// ─────────────────────────────── 
   export default function Sidebar() {
      const [open, setOpen] = useState(false);
      const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

    
     const items = [ 
      { href: '/', icon: '🏠', name: 'Home' }, 
      { href: '/components/About', icon: 'ℹ️', name: 'About' },
      { href: '/components/Projects', icon: '🧰', name: 'Projects' }, 
      { href: '/components/Contac', icon: '✉️', name: 'Contact' },
       ]; 

       
       return (
         <>
     {/* 🔹 Toggle button (visible only on mobile) */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 bg-sky-600 p-2 rounded-xl shadow-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}


      {/* Sidebar */}
      <motion.aside
        initial={false}
       animate={{ x: !isMobile || open ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 md:w-72 flex flex-col items-center py-8 space-y-8 
        bg-[#0f172a] text-white border-r border-slate-700/70 shadow-lg rounded-r-3xl`}
      >
        {/* ── Profile Section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center space-y-4"
        >
          <h2 className="text-xl font-semibold text-amber-400">NG</h2>
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-sky-500 shadow-lg">
            <Image
              src="/assets/image.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ── Navigation Links ── */}
        <nav className="flex flex-col space-y-4 items-center">
          {items.map((item, idx) => (
            <NavLink
              key={item.href}
              {...item}
              delay={idx * 0.05}
              onClick={() => setOpen(false)} // closes sidebar on mobile
            />
          ))}
        </nav>

        {/* ── CV Download Button ── */}
        <motion.a
          href="/assets/NG_CV.pdf"
          download
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 mt-auto py-2 bg-gradient-to-r from-blue-700 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
        >
          Download CV
        </motion.a>
      </motion.aside>
    </>
  );
}