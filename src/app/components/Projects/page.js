// Projects Page Component
"use client"
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsPage  ()  {
  const projects = [
    {
      title: 'Hostel Management System',
      description: 'Management system to handle student registrations, room allocations, and fee tracking',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image:"assets/uni.png",
    },
    {
      title: 'Coffee Shop Web Application',
      description: 'Built using MERN stack with login system, menu management, and custom coffee builder',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: '#',
       image:'assets/coffee.jpg'
    },
    {
      title: 'Rare Medicine Finder',
      description: 'Web application to help users locate pharmacies stocking rare medicines with Google Maps API integration',
      tech: ['React', 'Node.js', 'Google Maps API'],
      link: '#',
       image:'assets/medi.png'
    },
    {
      title: 'School Management System',
      description: 'Web application for managing student data, attendance, and exam records',
      tech: ['HTML', 'CSS', 'Node.js', 'MongoDB'],
      link: '#',
       image:'assets/school.png'
    },
    {
      title: 'User Management System',
      description: 'Web application to manage user accounts, roles, and permissions with RESTful API',
      tech: ['Node.js', 'Express', 'MongoDB'],
      link: '#',
       image:'assets/hostel.png'
    },
    {
      title: 'Weather Finder System',
      description: 'Web application to fetch and display real-time weather information based on user location',
      tech: ['JavaScript', 'Weather API', 'HTML/CSS'],
      link: '#',
       image:'assets/weath.png'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold mb-12 text-white"
        >
          My Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-purple-500"
            >
             <div className="h-48 rounded-xl mb-6 overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300">
   
  {project.image ? (
  <Image
    src={`/${project.image}`}  // ✅ add leading slash so it points to /public/assets
    alt={project.title}
    width={400}
    height={250}
    className="object-cover w-full h-full"
  />
) : (
  <div className="flex items-center justify-center h-full text-gray-400">
    No image
  </div>
)}

</div>

              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-purple-400 text-xs rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                View Project <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
