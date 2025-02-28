import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiMongodb } from 'react-icons/di';
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = (duration)=>({
  inital:{y:-10},
  animate:{
    y:[10, -10],
    Transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
})

function Technology() {
  return (
    <div className='w-full border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='text-4xl text-center my-20 '>Technology</motion.h1>
       <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}} 
       transition={{duration:1.5}}
       className='flex flex-wrap items-center justify-center gap-10'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNode className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
       variants={iconVariants(5)}
       initial="initial"
       animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <TbBrandJavascript  className='text-7xl text-yellow-300'/>
        </motion.div>
        <motion.div 
      variants={iconVariants(2)}
      initial="initial"
      animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMongodb className='text-7xl text-green-600'/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiMsqlServer className="text-7xl text-white"/>
        </motion.div>
        <motion.div
       variants={iconVariants(6)}
       initial="initial"
       animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaJava className="text-7xl text-blue-800"/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaPython className="text-7xl text-blue-400"/>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology