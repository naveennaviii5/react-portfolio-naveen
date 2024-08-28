import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h1 whileInView={{opacity: 1,y:0}}
      initial={{opacity:0,y:-100}} 
      transition={{duration:1.5}}className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* HTML */}
        <motion.div variants={iconVariants(4)}
          initial="initial"
          animate="animate" className="relative group p-4">
          <FaHtml5 className="text-7xl text-orange-500 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">HTML5</span>
        </motion.div>
        {/* CSS */}
        <motion.div variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="relative group p-4">
          <FaCss3Alt className="text-7xl text-blue-500 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">CSS3</span>
        </motion.div>
        {/* JavaScript */}
        <motion.div  variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"className="relative group p-4">
          <FaJsSquare className="text-7xl text-yellow-500 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">JavaScript</span>
        </motion.div>
        {/* React */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">React</span>
        </motion.div>
        {/* SQL (MySQL) */}
        <motion.div variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" className="relative group p-4">
          <SiMysql className="text-7xl text-blue-600 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">MySQL</span>
        </motion.div>
        {/* Python */}
        <motion.div variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="relative group p-4">
          <FaPython className="text-7xl text-green-500 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">Python</span>
        </motion.div>
        {/* Java */}
        <motion.div variants={iconVariants(4)}
          initial="initial"
          animate="animate" className="relative group p-4">
          <FaJava className="text-7xl text-red-600 animate-spin-slow" />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">Java</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
