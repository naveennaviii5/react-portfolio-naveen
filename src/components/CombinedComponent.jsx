import React from 'react';
import logo from "../assets/NaveenLogo.png";
import profilePic from "../assets/NaveenProfile.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HERO_CONTENT, ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const CombinedComponent = () => {
  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between py-6 z-10">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-20 h-20" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <a
  href="https://www.linkedin.com/in/naveen-s-261402280/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: 'white' }}
  className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
>
  <FaLinkedin />
</a>


          <a
            href="https://github.com/naveennaviii5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_naveen_navii_?igsh=MWJnazNhcGttMWttYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>

      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${profilePic})`,
          backgroundSize: 'cover', // Ensures the image covers the entire background
          backgroundPosition: 'center', // Centers the image
          opacity: 0.5 // Adjust opacity as needed
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
        }}
      />

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-white z-10"> 
        <div className="relative z-10 flex flex-wrap items-center justify-center lg:justify-between w-full px-4">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1 
                variants={container(0)} 
                initial="hidden" 
                animate="visible" 
                className="pb-0 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center lg:text-left">
                I'm Naveen S
              </motion.h1>
              <motion.span 
                variants={container(0.5)} 
                initial="hidden" 
                animate="visible" 
                className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center lg:text-left">
                Software Developer
              </motion.span>
              <motion.p  
                variants={container(1)} 
                initial="hidden" 
                animate="visible"
                className="mt-6 max-w-xl font-light tracking-tighter text-center lg:text-left ">
                {HERO_CONTENT}
              </motion.p>
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1UmrmkaAjBGbLVSdX36jrDT-djw3MqPQq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-full hover:bg-gradient-to-r hover:from-gray-800 hover:via-black hover:to-gray-800 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative border-b border-neutral-900 pb-5 z-10 pt-20">
        <h1 className="my-15 text-center text-4xl text-white opacity-70">
          About 
          <span> Me</span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-2/3 flex items-center justify-center">
            <div className="flex-grow text-center">
              <p className="my-2 max-w-full py-6 text-white opacity-70">{ABOUT_TEXT}</p> {/* Adjusted opacity */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombinedComponent;
