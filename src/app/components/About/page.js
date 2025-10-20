"use client"
import { motion } from 'framer-motion';


export default function AboutPage () {
  const skills = {
    languages: ['C', 'Java', 'JavaScript'],
    web: ['HTML', 'CSS', 'React', 'Node.js', 'Next.js', 'Express'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git/GitHub', 'VS Code', 'Docker']
  };

  const softSkills = [
    'Teamwork & Collaboration',
    'Problem-Solving',
    'Communication',
    'Fast Learner',
    'Leadership',
    'Management'
  ];

  return (
  
    <section>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold mb-8 text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-12 shadow-xl"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a dedicated 3rd-year BICT undergraduate at the University of Sri Jayewardenepura 
            with a strong interest in software engineering and web development. I'm passionate about 
            building innovative solutions and constantly learning new technologies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Education</h3>
              <p className="text-gray-300 mb-2">University of Sri Jayewardenepura</p>
              <p className="text-gray-400 text-sm mb-4">BICT (Software Specification) • 2023-2027</p>
              <p className="text-gray-300 text-sm">A/L District Rank 04, Island Rank 24</p>
            </div>
            
            <div className="bg-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Achievements</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>🏆 Winner of Sirasa Lakshapathi</li>
                <li>👥 Member of ICT Society (ICTS)</li>
                <li>🔐 Organizer of J'pura CryptX 1.0</li>
                <li>📢 Page Manager at Voice Tech, USJ</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-white">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-purple-400 mb-4 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-white">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white text-center font-semibold shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>

    </section>
  );
};
