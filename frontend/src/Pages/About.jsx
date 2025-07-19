import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Imgs from '../assets/me.jpg';
import Resume from '../../public/Suvesh-Rajput.pdf';

const About = () => {
  const navigate = useNavigate();

  const myDescription = `I’m Suvesh Rajput, a self-motivated and highly passionate computer science student based in Hyderabad, India. I have hands-on experience in C, Java, Python, and JavaScript, along with a solid grasp of data structures and algorithms. I’m deeply interested in problem-solving and have actively participated in competitive programming across platforms like LeetCode, CodeChef, and HackerRank. My technical skill set extends to full-stack development, where I’ve built real-world applications using React, Node.js, Express, and MongoDB. I'm also familiar with tools and workflows like Git, GitHub, REST APIs, and Postman, and constantly strive to enhance my development and debugging capabilities.

Additionally, I’m skilled in UI/UX and Web Designing using Figma, where I craft clean, modern, and user-friendly interfaces. I enjoy transforming ideas into responsive and accessible web layouts, keeping usability and performance in mind throughout the design process.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-sans mt-10"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10 p-6 sm:p-10 lg:p-16 border border-gray-800 rounded-2xl">
        
        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src={Imgs}
              alt="Suvesh Rajput"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/0F172A/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
        </motion.div>

        {/* Animated Text Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-6 text-center">
            A Bit About Me
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
            {myDescription}
          </p>

          {/* Animated Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Resume Button */}
            <motion.a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-green-700 transition-transform hover:scale-105"
            >
              Resume
            </motion.a>

            {/* Projects Button - uses navigate */}
            <motion.button
              onClick={() => navigate('/project')}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-orange-700 transition-transform hover:scale-105"
            >
              Projects
            </motion.button>

            {/* GitHub Button */}
            <motion.a
              href="https://github.com/suvesh13"
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-teal-700 transition-transform hover:scale-105"
            >
              Github
            </motion.a>

            {/* Personal Button (dummy scroll link) */}
      
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
