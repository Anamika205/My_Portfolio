import React from 'react'
import { PROJECT_DETAILS } from '../Constants'
import { motion } from 'framer-motion'

function Project() {
  return (
    <div className='border-b border-neutral-300 pb-4'>
      <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-5xl font-semibold text-gray-600 text-center'>Project</motion.h1>
      <div>
        {PROJECT_DETAILS.map((product, index)=>(
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='w-full lg:w-1/4'>
            <img 
            src={product.img} 
            width={150}
            height={150}
            alt={product.title}
            className='mb-6 rounded'/>
          </motion.div>
          <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
          className='w-full max-w-xl lg:w-3/4'><h6 className='mb-2 text-2xl text-neutral-500 font-semibold'>{product.title}</h6>
          <p className='mb-4 text-xl text-neutral-600'>{product.desc}</p>
          {product.technology.map((tech, index)=>(
            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-m font-medium text-pink-700'>{tech}</span>
          ))}</motion.div>
          </div>
        ))}</div></div>
  )
}

export default Project