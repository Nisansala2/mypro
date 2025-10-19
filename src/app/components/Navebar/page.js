'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// --- NavLink component ---
function NavLink({ href, label, icon, delay = 0 }) {
  const path = usePathname();
  const active = path === href;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Link
        href={href}
        className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg ${
          active ? 'bg-sky-500 text-white' : 'hover:bg-sky-100'
        }`}
      >
        <span className="text-lg md:text-xl">{icon}</span>
      </Link>
    </motion.div>
  );
}

// --- Sidebar component ---
export default function Sidebar() {

    
const items = 
[
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/components/About', label: 'About', icon: 'ℹ️' },
    { href: '/projects', label: 'Projects', icon: '🧰' },
    { href: '/contact', label: 'Contact', icon: '✉️' },
]



  return (
    <aside className="h-full w-100  flex flex-col items-center py-6 space-y-6  style ={{ marginLeft: '200px', padding: '20px', width: '100%'}} bg-amber-600 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-sm md:text-base font-semibold">NG</div>
      </motion.div>

      <nav className="flex-1 flex flex-col items-center space-y-4">
        {items.map((it, idx) => (
          <NavLink
            key={it.href}
            href={it.href}
            label={it.label}
            icon={it.icon}
            delay={idx * 0.05}
          />
        ))}
      </nav>

      <div className="text-xs text-center px-2">© Nisansala</div>
    </aside>
  );
}
