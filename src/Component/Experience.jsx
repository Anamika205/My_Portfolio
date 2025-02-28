import React from 'react'
import { EXPERIENCE_DET } from "../Constants/index"
import { motion } from 'framer-motion';

const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay}
  }
})

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Experience</motion.h1>

       <div>
        {EXPERIENCE_DET.map((experience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
          className='w-full lg:w-1/4'>
              <h3 className='mb-1 text-1.5xl text-neutral-400'>{experience.Duration}</h3></motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className='w-full max-w-x lg:w-3/4'> 
              <h6 className='mb-2 font-semibold'>{experience.company}-{""}
                <span className='text-sm text-purple-100'>{experience.role}</span></h6>
                {experience.Work.map((workdet, index) =>(
                  <p key={index} className='mb-4 text-neutral-400 '>{workdet}</p>
                ))}
              
              {experience.technology.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 '>{tech}</span>

 ))} 
            </motion.div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Experience;