import React from 'react'
import { PROFILE_CONTENT } from '../Constants'
import profileImg from '../assets/profile.jpeg'
import { motion } from 'framer-motion'

const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay}
  }
})
const Profile = () => {
  return (
    <div className='border-b border-neutral-300 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mx-20'>
            <motion.h1
         variants={container(0)}
         initial="hidden"
         animate="visible"
         className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl text-neutral-700'>Anamika Sharma</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-500 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 text-xl text-neutral-500 tracking-tighter '>{PROFILE_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8 '>
          <div className='flex justify-end pr-52 pt-15' >
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}} className="rounded-2xl" src={profileImg} alt='profileImage' height="500px" width="500px" /></div></div>
      </div>
    </div>
  )
}

export default Profile