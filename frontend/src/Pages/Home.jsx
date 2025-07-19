import React from 'react';
import bgImage from '../assets/me.jpg';
import Projects from './Projects';
import Footer from '../components/Footer';
import Buttom from '../components/Buttom';
import { motion } from 'framer-motion';
import Proj from '../components/Proj';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  return (
    <div>
      
      <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen w-full px-6 py-20 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="text-left md:w-1/2 space-y-6"
            custom={1}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-gray-300">
              Hey, <span className="inline-block">there</span>
            </h2>

            <div className="flex items-center gap-2 bg-orange-200 text-orange-900 px-4 py-2 rounded-full w-fit font-medium shadow-sm">
              <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
              Available for new opportunities
            </div>

            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tight"
              style={{ fontFamily: 'Playfair' }}
            >
              I AM <br /> SUVESH RAJPUT
            </h1>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={bgImage}
              alt="Suvesh Rajput"
              className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover transform hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x500?text=Image+Not+Found';
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Developer</span> and a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Designer</span> who loves to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500">build</span> things from scratch. I get excited about turning <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ideas</span> into real, working, and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">good-looking</span> products. I always want to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">learn</span> new things and use what I learn right away. <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">Doing</span> is better than just knowing!
        </p>
      </motion.div>

      {/* Project Section */}
      <Proj />

      {/* Footer Section */}
      <Buttom />
      <Footer />
      </div>
    </div>
    
  );
};

export default Home;
