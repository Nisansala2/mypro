// Footer Component

"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, Briefcase, User, ExternalLink } from 'lucide-react';



export default function footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 py-8 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 ">
          
          {/* Quick Links */}
          <div className ="ml-60">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Nisansala2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://medium.com/@nisansalagamchchige" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <MessageSquare size={16} /> Medium Blog
                </a>
              </li>
              <li>
                <a href="https://acesse.one/hrUVl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://simple-portfolio-nine-eta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <ExternalLink size={16} /> Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="ml-70">
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:nisansalagamchchige@gmail.com" className="hover:text-purple-400 transition-colors">
                  nisansalagamchchige@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <User size={16} className="mt-1 flex-shrink-0" />
                <span>University of Sri Jayewardenepura</span>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <Briefcase size={16} className="mt-1 flex-shrink-0" />
                <span>Available for Internships</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 ml-50">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nisansala Gamachchige. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Nisansala2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://medium.com/@nisansalagamchchige"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageSquare size={20} />
            </motion.a>
            <motion.a
              href="https://acesse.one/hrUVl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:nisansalagamchchige@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};